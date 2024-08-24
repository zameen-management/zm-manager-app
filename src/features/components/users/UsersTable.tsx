import { useState } from "react";
import UsersApi from "../../api/Users.api";
import { User, UserRole } from "../../models/User.model";
import { Column } from "../../styles/Column.styled";
import Table, { TableColumn } from "../../ui/table/Table";
import { useQuery } from "@tanstack/react-query";
import Toggle from "../../ui/toggle/Toggle";
import { Row } from "../../styles/Row.styled";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router";

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

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<Column $gap="1.5rem">
			<Row $justifyContent="space-between">
				<h5>Users</h5>
				<Button onClick={() => navigate("add")}>Add User</Button>
			</Row>
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
		</Column>
	);
};

export default UsersTable;
