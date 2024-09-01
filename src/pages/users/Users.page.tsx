import { useNavigate } from "react-router-dom";
import UsersTable from "../../features/components/users/UsersTable";
import { Column } from "../../features/styles/Column.styled";
import { Row } from "../../features/styles/Row.styled";
import Button from "../../features/ui/button/Button";
import { Container } from "../../features/styles/Container.styled";

const UsersPage = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Column $gap="1.5rem">
				<Row $justifyContent="space-between">
					<h5>Users</h5>
					<Button onClick={() => navigate("add")}>Add User</Button>
				</Row>
				<UsersTable />
			</Column>
		</Container>
	);
};

export default UsersPage;
