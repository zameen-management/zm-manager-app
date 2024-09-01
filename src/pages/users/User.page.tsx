import { Column } from "../../features/styles/Column.styled";
import { useNavigate, useParams } from "react-router";
import Form from "../../features/ui/form/Form";
import UserForm from "../../features/components/users/UserForm";
import Button from "../../features/ui/button/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UsersApi from "../../features/api/Users.api";
import { useEffect, useState } from "react";
import { EmptyUser, User } from "../../features/models/User.model";
import { Row } from "../../features/styles/Row.styled";
import ControlBar from "../../features/ui/controlBar/ControlBar";
import { getFullName } from "../../features/utils/getFullName";
import { Container } from "../../features/styles/Container.styled";

const UserPage = () => {
	const { userId } = useParams();
	const [user, setUser] = useState<User>(EmptyUser);
	const [canEdit, setCanEdit] = useState(false);
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { data, status } = useQuery({
		queryKey: ["users", userId],
		queryFn: () => UsersApi.getById(userId || ""),
	});

	useEffect(() => {
		if (status === "success") setUser(data);
	}, [status]);

	const handleToggleEdit = async () => {
		if (canEdit) {
			setCanEdit(false);
		} else {
			setCanEdit(true);
		}
	};

	const deleteMutation = useMutation({
		mutationFn: (id: string) => UsersApi.delete(id),
		onSuccess: () => {
			alert("User has been deleted.");
			navigate("/users");
		},
		onError: (error: Error) => {
			alert(`Unable to delete user: ${error.message}`);
		},
	});

	const handleDelete = async () => {
		if (userId && confirm("Are you sure you want to delete this user?")) {
			deleteMutation.mutate(userId);
		}
	};

	const updateMutation = useMutation({
		mutationFn: ({
			id,
			userData,
		}: {
			id: string;
			userData: Partial<User>;
		}) => UsersApi.update(id, userData),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["users", userId] });
			setCanEdit(false);
		},
		onError: (error: Error) => {
			alert(`Unable to edit user: ${error.message}`);
		},
	});

	const handleUpdateUser = async () => {
		if (userId) {
			updateMutation.mutate({
				id: userId,
				userData: {
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					role: user.role,
				},
			});
		}
	};

	if (!user)
		return (
			<>
				<h5>Loading...</h5>
			</>
		);

	return (
		<Container>
			<Column $gap="2rem">
				<Column $gap="0.5rem">
					<ControlBar
						title={
							status === "pending"
								? "Loading..."
								: getFullName(user)
						}
						to="/users"
					>
						<Row $gap="0.5rem">
							<Button onClick={handleToggleEdit}>
								{canEdit ? "Cancel" : "Edit User"}
							</Button>
							{!canEdit && (
								<Button
									onClick={handleDelete}
									$color={"#e74c3c"}
								>
									Delete User
								</Button>
							)}
						</Row>
					</ControlBar>
				</Column>
				<Form onSubmit={handleUpdateUser}>
					<Column>
						<UserForm
							user={user}
							setUser={setUser}
							canEdit={canEdit}
						/>
						{canEdit && <Button type="submit">Update User</Button>}
					</Column>
				</Form>
			</Column>
		</Container>
	);
};

export default UserPage;
