import { useParams } from "react-router-dom";
import ApplicationsTable from "../../../features/components/applications/ApplicationsTable";
import { Column } from "../../../features/styles/Column.styled";
import { Container } from "../../../features/styles/Container.styled";
import Toggle from "../../../features/ui/toggle/Toggle";
import { useState } from "react";
import { Grid } from "../../../features/styles/Grid.styled";

const statusOptions = [
	{ name: "All", value: "" },
	{ name: "Approved", value: "Approved" },
	{ name: "Rejected", value: "Rejected" },
	{ name: "In-Review", value: "In-Review" },
];

const completeStatus = [
	{ name: "All", value: "" },
	{ name: "Complete", value: "true" },
	{ name: "Incomplete", value: "false" },
];

const paymentStatus = [
	{ name: "All", value: "" },
	{ name: "Paid", value: "true" },
	{ name: "Not Paid", value: "false" },
];

const PropertyApplicationsPage = () => {
	const { propertyId } = useParams();
	const [status, setStatus] = useState("");
	const [complete, setComplete] = useState("");
	const [paid, setPaid] = useState("");

	return (
		<Container>
			<Column $gap="1.5rem">
				<h5>Applications</h5>
				<Grid $columns={3}>
					<Toggle
						options={statusOptions}
						selected={status}
						onClick={(value) => setStatus(value)}
					/>
					<Toggle
						options={completeStatus}
						selected={complete}
						onClick={(value) => setComplete(value)}
					/>
					<Toggle
						options={paymentStatus}
						selected={paid}
						onClick={(value) => setPaid(value)}
					/>
				</Grid>
				<ApplicationsTable
					property={propertyId}
					status={status}
					complete={complete}
					paid={paid}
				/>
			</Column>
		</Container>
	);
};

export default PropertyApplicationsPage;
