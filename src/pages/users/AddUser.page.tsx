import { useState } from "react";
import UserForm from "../../features/components/users/UserForm";
import { Container } from "../../features/styles/Container.styled";
import { EmptyUser, User } from "../../features/models/User.model";
import Form from "../../features/ui/form/Form";
import { Column } from "../../features/styles/Column.styled";
import Button from "../../features/ui/button/Button";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import UsersApi from "../../features/api/Users.api";
import ControlBar from "../../features/ui/controlBar/ControlBar";

const AddUserPage = () => {
	const [user, setUser] = useState(EmptyUser);
	const navigate = useNavigate();

	const createMutation = useMutation({
		mutationFn: (newUser: User) => UsersApi.add(newUser),
		onSuccess: () => {
			alert("New user created.");
			navigate("/users");
		},
		onError: (error: Error) => {
			alert(`Unable to add user: ${error.message}`);
		},
	});

	const handleAddUser = () => createMutation.mutate(user);

	return (
		<Container>
			<Column $gap="2rem">
				<Column $gap="0.5rem">
					<ControlBar title="Add User" to="/users" />
					<p>
						After adding a user, an email will be sent to the
						address entered; the user will need to add a password
						before being able to use the account.
					</p>
				</Column>
				<Form onSubmit={handleAddUser}>
					<Column>
						<UserForm user={user} setUser={setUser} />
						<Button
							type="submit"
							disabled={createMutation.isPending}
						>
							{createMutation.isPending
								? "Adding User..."
								: "Add User"}
						</Button>
					</Column>
				</Form>
			</Column>
		</Container>
	);
};

export default AddUserPage;
