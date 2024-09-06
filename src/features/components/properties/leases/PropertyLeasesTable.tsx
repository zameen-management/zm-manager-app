import { useQuery } from "@tanstack/react-query";
import { Lease } from "../../../models/Lease.model";
import { User } from "../../../models/User.model";
import Table, { TableColumn } from "../../../ui/table/Table";
import { getFullName } from "../../../utils/getFullName";
import LeaseApi from "../../../api/Lease.api";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../styles/Container.styled";

const columns: TableColumn<Lease>[] = [
	{
		field: "tenants",
		name: "Tenants",
		render: (tenants: User[]) =>
			tenants.map((tenant: User) => getFullName(tenant)).join(", "),
	},
	{
		field: "startDate",
		name: "Start Date",
	},
	{
		field: "endDate",
		name: "End Date",
	},
	{
		field: "status",
		name: "Status",
	},
];

const PropertyLeasesTable = () => {
	const {
		data: leases,
		error,
		isLoading,
	} = useQuery<Lease[], Error>({
		queryKey: ["leases"],
		queryFn: () => LeaseApi.getAll(),
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
		<Table
			columns={columns}
			data={leases}
			onRowClick={({ _id }) => navigate(`${_id}`)}
		/>
	);
};

export default PropertyLeasesTable;
