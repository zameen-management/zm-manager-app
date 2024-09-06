import { useSelector } from "react-redux";
import { getProperty } from "../../../../features/app/property.slice";
import { useEffect, useState } from "react";
import { EmptyLease, Lease } from "../../../../features/models/Lease.model";
import Select, { SelectOption } from "../../../../features/ui/select/Select";
import { Form, useNavigate } from "react-router-dom";
import UsersApi from "../../../../features/api/Users.api";
import { getFullName } from "../../../../features/utils/getFullName";
import { Unit } from "../../../../features/models/Unit.model";
import LeaseApi from "../../../../features/api/Lease.api";
import { Container } from "../../../../features/styles/Container.styled";
import { Column } from "../../../../features/styles/Column.styled";
import { getAddress } from "../../../../features/utils/getAddress";
import Input from "../../../../features/ui/input/Input";
import { Grid } from "../../../../features/styles/Grid.styled";
import Dropdown from "../../../../features/ui/dropdown/Dropdown";
import Button from "../../../../features/ui/button/Button";

const PropertyAddLeasePage = () => {
	const property = useSelector(getProperty);
	const [lease, setLease] = useState(EmptyLease);
	const [tenants, setTenants] = useState<SelectOption[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const fetchTenants = async () => {
		try {
			const response = await UsersApi.getUsers({ role: "Tenant" });
			setTenants(
				response.map((user) => ({
					name: getFullName(user),
					value: user._id || "",
				}))
			);
		} catch (error: any) {
			alert(`Unable to fetch tenants: ${error.message}`);
		}
	};

	useEffect(() => {
		fetchTenants();
	}, []);

	const handleSubmit = async () => {
		if (lease.tenants.length === 0) {
			return alert("Please select at least one tenant.");
		}

		const unit = property?.units[0] as Unit;
		const data: Lease = {
			...lease,
			property: property?._id || "",
			unit: unit?._id || "",
		};

		try {
			setIsLoading(true);
			await LeaseApi.add(data);
			alert("Lease has been created.");
			navigate(`/properties/${property?._id}/leases`);
		} catch (error: any) {
			alert(`Unable to add lease: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container>
			<Column $gap="2rem">
				<h5>Add Lease: {getAddress(property?.address)}</h5>
				<Form onSubmit={handleSubmit}>
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
								onChange={(e) =>
									setLease({
										...lease,
										startDate: e.target.value,
									})
								}
								required
							/>
							<Input
								id="endDate"
								label="Lease End Date"
								type="date"
								value={lease.endDate}
								onChange={(e) =>
									setLease({
										...lease,
										endDate: e.target.value,
									})
								}
								required
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
							/>
							<Select
								id="tenants"
								label="Tenants"
								options={tenants}
								value={lease.tenants as string[]}
								onChange={(options) =>
									setLease({ ...lease, tenants: options })
								}
							/>
						</Grid>
						<Button disabled={isLoading}>
							{isLoading ? "Adding Lease..." : "Add Lease"}
						</Button>
					</Column>
				</Form>
			</Column>
		</Container>
	);
};

export default PropertyAddLeasePage;
