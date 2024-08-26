import { useQuery } from "@tanstack/react-query";
import { Property, PropertyAddress } from "../../models/Property.model";
import PropertyApi from "../../api/Properties.api";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/Container.styled";
import Table, { TableColumn } from "../../ui/table/Table";
import { getAddress } from "../../utils/getAddress";
import { User } from "../../models/User.model";
import { getFullName } from "../../utils/getFullName";

const columns: TableColumn<Property>[] = [
	{
		field: "address",
		name: "Address",
		render: (address: PropertyAddress) => getAddress(address),
	},
	{
		field: "hasMultipleUnits",
		name: "Property Type",
		render: (hasMultipleUnits: boolean) => {
			return hasMultipleUnits ? "Multi-Family" : "Single-Family";
		},
	},
	{
		field: "owners",
		name: "Owner(s)",
		render: (owners: any[]) => {
			if (owners.length > 0) {
				return owners.map((user: User) => getFullName(user)).join(", ");
			}
			return "None";
		},
	},
];

const PropertiesTable = () => {
	const {
		data: properties,
		error,
		isLoading,
	} = useQuery<Property[], Error>({
		queryKey: ["properties"],
		queryFn: () => PropertyApi.getAll({}),
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
			data={properties}
			onRowClick={({ _id }) => navigate(`/properties/${_id}`)}
		/>
	);
};

export default PropertiesTable;
