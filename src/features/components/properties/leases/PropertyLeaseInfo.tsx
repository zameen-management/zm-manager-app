import { useSelector } from "react-redux";
import { Lease } from "../../../models/Lease.model";
import { Column } from "../../../styles/Column.styled";
import Input from "../../../ui/input/Input";
import { getProperty } from "../../../app/property.slice";
import { getAddress } from "../../../utils/getAddress";
import { Grid } from "../../../styles/Grid.styled";
import Dropdown from "../../../ui/dropdown/Dropdown";
import { Dispatch, SetStateAction } from "react";
import { User } from "../../../models/User.model";
import { getFullName } from "../../../utils/getFullName";

interface Props {
	lease: Lease;
	setLease: Dispatch<SetStateAction<Lease>>;
	canEdit: boolean;
}

const PropertyLeaseInfo = ({ lease, setLease, canEdit }: Props) => {
	const property = useSelector(getProperty);
	const tenants: User[] = lease.tenants as User[];

	return (
		<Column>
			<Input
				id="property"
				label="Property"
				value={getAddress(property?.address) || ""}
				disabled
				readOnly
			/>
			<Grid $columns={2}>
				<Input
					id="startDate"
					label="Lease Start Date"
					type="date"
					value={lease.startDate}
					readOnly
					disabled
				/>
				<Input
					id="endDate"
					label="Lease End Date"
					type="date"
					value={lease.endDate}
					readOnly
					disabled
				/>
			</Grid>
			<Grid $columns={2}>
				<Dropdown
					id="status"
					label="Lease Status"
					placeholder="Please Select Status"
					options={[
						{ name: "Inactive", value: "Inactive" },
						{ name: "Active", value: "Active" },
					]}
					value={lease.status}
					onSelect={(option) =>
						setLease({ ...lease, status: option.value })
					}
					disabled={!canEdit}
				/>
				<Input
					id="tenants"
					label="Tenants"
					value={tenants
						.map((tenant: User) => getFullName(tenant))
						.join(", ")}
					readOnly
					disabled
				/>
			</Grid>
		</Column>
	);
};

export default PropertyLeaseInfo;
