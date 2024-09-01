import { useQuery } from "@tanstack/react-query";
import { Application } from "../../models/Application.model";
import { PropertyAddress } from "../../models/Property.model";
import Table, { TableColumn } from "../../ui/table/Table";
import { getAddress } from "../../utils/getAddress";
import ApplicationsApi from "../../api/Applications.api";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/Container.styled";

const columns: TableColumn<Application>[] = [
	{
		field: "firstName",
		name: "Applicant",
		render: (_value, row) => {
			return `${row.firstName} ${row.lastName}`;
		},
	},
	{
		field: "property",
		name: "Property",
		render: (address: PropertyAddress) => getAddress(address),
	},
	{ field: "status", name: "Status" },
	{ field: "isComplete", name: "Completed" },
	{ field: "isPaid", name: "Paid" },
];

interface Props {
	property?: string;
	status?: string;
	complete?: string;
	paid?: string;
}

const ApplicationsTable = ({ property, status, complete, paid }: Props) => {
	const navigate = useNavigate();
	const {
		data: applications,
		error,
		isLoading,
	} = useQuery<Application[], Error>({
		queryKey: ["applications", property, status, complete, paid],
		queryFn: () =>
			ApplicationsApi.getAll({
				property,
				status: status || undefined,
				isComplete: complete || undefined,
				isPaid: paid || undefined,
			}),
	});

	if (isLoading || error) {
		return (
			<Container>
				<h5>{isLoading ? "Loading..." : error?.message}</h5>
			</Container>
		);
	}

	return (
		<Table
			columns={columns}
			data={applications}
			onRowClick={({ _id }) => navigate(`/applications/${_id}`)}
		/>
	);
};

export default ApplicationsTable;
