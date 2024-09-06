import { useNavigate } from "react-router-dom";
import { Container } from "../../../../features/styles/Container.styled";
import { Column } from "../../../../features/styles/Column.styled";
import { Row } from "../../../../features/styles/Row.styled";
import Button from "../../../../features/ui/button/Button";
import PropertyLeasesTable from "../../../../features/components/properties/leases/PropertyLeasesTable";

const PropertyLeasesPage = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<Column $gap="1.5rem">
				<Row $justifyContent="space-between">
					<h5>Property Leases</h5>
					<Button onClick={() => navigate("add")}>Add Lease</Button>
				</Row>
				<PropertyLeasesTable />
			</Column>
		</Container>
	);
};

export default PropertyLeasesPage;
