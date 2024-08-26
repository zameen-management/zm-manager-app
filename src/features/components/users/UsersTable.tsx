import { useState } from "react";
import UsersApi from "../../api/Users.api";
import { User, UserRole } from "../../models/User.model";
import Table, { TableColumn } from "../../ui/table/Table";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Container } from "../../styles/Container.styled";
import Toggle from "../../ui/toggle/Toggle";

const columns: TableColumn<User>[] = [
	{ field: "firstName", name: "First Name" },
	{ field: "lastName", name: "Last Name" },
	{ field: "role", name: "Role" },
	{ field: "email", name: "Email" },
	{ field: "status", name: "Status" },
];

const UsersTable = () => {
	const [role, setRole] = useState<UserRole | "">("");
	const {
		data: users,
		error,
		isLoading,
	} = useQuery<User[], Error>({
		queryKey: ["users", role],
		queryFn: () => UsersApi.getUsers({ role: role || undefined }),
	});
	const navigate = useNavigate();

	if (isLoading || error) {
		return (
			<Container>
				<h5>{isLoading ? "Loading..." : error?.message}</h5>
			</Container>
		);
	}

	return (
		<>
			<Toggle
				options={[
					{
						name: "All",
						value: "",
					},
					{
						name: "Manager",
						value: "Manager",
					},
					{
						name: "Owner",
						value: "Owner",
					},
					{
						name: "Tenant",
						value: "Tenant",
					},
				]}
				selected={role}
				onClick={(value) => setRole(value as UserRole | "")}
			/>
			<Table
				columns={columns}
				data={users}
				onRowClick={({ _id }) => navigate(`/users/${_id}`)}
			/>
		</>
	);
};

export default UsersTable;
