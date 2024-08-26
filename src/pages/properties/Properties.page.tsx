import { useNavigate } from "react-router-dom";
import PropertiesTable from "../../features/components/properties/PropertiesTable";
import { Column } from "../../features/styles/Column.styled";
import { Container } from "../../features/styles/Container.styled";
import { Row } from "../../features/styles/Row.styled";
import Button from "../../features/ui/button/Button";

const PropertiesPage = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Column $gap="1.5rem">
				<Row $justifyContent="space-between">
					<h5>Properties</h5>
					<Button onClick={() => navigate("add")}>
						Add Property
					</Button>
				</Row>
				<PropertiesTable />
			</Column>
		</Container>
	);
};

export default PropertiesPage;
