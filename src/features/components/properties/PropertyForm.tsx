import { Dispatch, SetStateAction } from "react";
import { Property } from "../../models/Property.model";
import { Column } from "../../styles/Column.styled";
import { Grid } from "../../styles/Grid.styled";
import Input from "../../ui/input/Input";
import Toggle from "../../ui/toggle/Toggle";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../models/User.model";
import UsersApi from "../../api/Users.api";
import TextBox from "../../ui/textBox/TextBox";
import Select from "../../ui/select/Select";
import { getFullName } from "../../utils/getFullName";
import FileUpload from "../../ui/fileUpload/FileUpload";

interface Props {
	property: Property;
	setProperty: Dispatch<SetStateAction<Property>>;
	unitCount: number;
	setUnitCount: Dispatch<SetStateAction<number>>;
	setFiles: Dispatch<SetStateAction<File[]>>;
	canEdit?: boolean;
}

const PropertyForm = ({
	property,
	setProperty,
	unitCount,
	setUnitCount,
	setFiles,
	canEdit = true,
}: Props) => {
	const { data, isLoading } = useQuery<User[]>({
		queryKey: ["users", "role=owner"],
		queryFn: () => UsersApi.getUsers({ role: "Owner" }),
	});

	const owners =
		data?.map((owner) => ({
			name: getFullName(owner),
			value: owner._id || "",
		})) || [];

	if (isLoading)
		return (
			<Column>
				<h5>Loading Form...</h5>
			</Column>
		);

	return (
		<Column $gap="2rem">
			<Column $gap="0.5rem">
				<h6>General Information</h6>
				<Grid $columns={2}>
					<Input
						id="street"
						label="Street"
						value={property.address.street}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									street: e.target.value,
								},
							})
						}
						required
						disabled={!canEdit}
					/>
					<Input
						id="city"
						label="City"
						value={property.address.city}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									city: e.target.value,
								},
							})
						}
						required
						disabled={!canEdit}
					/>
					<Input
						id="state"
						label="State"
						value={property.address.state}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									state: e.target.value,
								},
							})
						}
						required
						disabled={!canEdit}
					/>
					<Input
						id="zip"
						label="Zip Code"
						value={property.address.zip}
						onChange={(e) =>
							setProperty({
								...property,
								address: {
									...property.address,
									zip: e.target.value,
								},
							})
						}
						required
						disabled={!canEdit}
					/>
				</Grid>
			</Column>
			<Column $gap="0.5rem">
				<h6>Property Type</h6>
				<Column>
					<Toggle
						options={[
							{ name: "Single-Family", value: false },
							{ name: "Multi-Unit", value: true },
						]}
						selected={property.hasMultipleUnits}
						onClick={(value) =>
							setProperty({
								...property,
								hasMultipleUnits: value,
							})
						}
					></Toggle>
					{property.hasMultipleUnits && (
						<Input
							id="units"
							label="Number of Units"
							type="number"
							value={unitCount}
							onChange={(e) =>
								setUnitCount(parseInt(e.target.value) || 1)
							}
							min={1}
							max={10000}
						/>
					)}
				</Column>
			</Column>
			<Column $gap="0.5rem">
				<h6>Additional Information</h6>
				<Grid $columns={1}>
					<Select
						id="owners"
						label="Owners"
						options={owners}
						value={property.owners as string[]}
						onChange={(options) =>
							setProperty({ ...property, owners: options })
						}
					/>
					<TextBox
						id="description"
						label="Property Description"
						placeholder="Enter any property information you would like potential tenants to see"
						value={property.description}
						onChange={(e) =>
							setProperty({
								...property,
								description: e.target.value,
							})
						}
					/>
				</Grid>
			</Column>
			<Column $gap="0.5rem">
				<h6>Property Images (Order can be changed later)</h6>
				<FileUpload onChange={(files) => setFiles(files)} />
			</Column>
		</Column>
	);
};

export default PropertyForm;
