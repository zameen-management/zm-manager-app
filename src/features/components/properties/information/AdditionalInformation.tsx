import { useEffect, useState } from "react";
import { Container } from "../../../styles/Container.styled";
import { Row } from "../../../styles/Row.styled";
import Button from "../../../ui/button/Button";
import Form from "../../../ui/form/Form";
import { Unit } from "../../../models/Unit.model";
import { useSelector } from "react-redux";
import { getProperty } from "../../../app/property.slice";
import UnitsApi from "../../../api/Units.api";
import { Column } from "../../../styles/Column.styled";
import { Grid } from "../../../styles/Grid.styled";
import Input from "../../../ui/input/Input";
import TextBox from "../../../ui/textBox/TextBox";

const AdditionalInformation = () => {
	const property = useSelector(getProperty);
	const [unit, setUnit] = useState<Unit>();
	const [canEdit, setCanEdit] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (property && property.units.length > 0) {
			setUnit(property.units[0] as Unit);
		}
	}, [property]);

	const toggleEdit = async () => {
		if (canEdit) {
			setCanEdit(false);
		} else {
			setCanEdit(true);
		}
	};

	const handleSave = async () => {
		try {
			if (!unit || !unit._id) return;
			setIsLoading(true);
			await UnitsApi.update(unit._id, unit);
			await toggleEdit();
		} catch (error: any) {
			alert(`Unable to edit information: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	if (!unit) {
		return (
			<Container>
				<h5>Loading...</h5>
			</Container>
		);
	}

	return (
		<Container>
			<Form onSubmit={handleSave}>
				<Column>
					<Row $justifyContent="space-between">
						<h5>Additional Information</h5>
						<Row>
							<Button
								type="button"
								$outline="outline"
								onClick={toggleEdit}
							>
								{canEdit ? "Cancel" : "Edit Information"}
							</Button>
							{canEdit && (
								<Button disabled={isLoading} type="submit">
									{isLoading ? "Loading..." : "Save Changes"}
								</Button>
							)}
						</Row>
					</Row>
					<Grid $columns={3}>
						<Input
							id="beds"
							label="Number of Bedrooms"
							type="number"
							value={unit.beds}
							onChange={(e) =>
								setUnit({
									...unit,
									beds: parseInt(e.target.value),
								})
							}
							min={1}
							max={100}
							required
							disabled={!canEdit}
						/>
						<Input
							id="baths"
							label="Number of Bathrooms"
							type="number"
							value={unit.baths}
							onChange={(e) =>
								setUnit({
									...unit,
									baths: parseInt(e.target.value),
								})
							}
							min={1}
							max={100}
							required
							disabled={!canEdit}
						/>
						<Input
							id="sqft"
							label="Size (sqft)"
							type="number"
							value={unit.sqft}
							onChange={(e) =>
								setUnit({
									...unit,
									sqft: parseInt(e.target.value),
								})
							}
							min={1}
							required
							disabled={!canEdit}
						/>
					</Grid>
					<Grid $columns={2}>
						<Input
							id="rent"
							label="Rent ($)"
							type="number"
							value={unit.rent}
							onChange={(e) =>
								setUnit({
									...unit,
									rent: parseInt(e.target.value),
								})
							}
							min={1}
							required
							disabled={!canEdit}
						/>
						<Input
							id="deposit"
							label="Security Deposit ($)"
							type="number"
							value={unit.securityDeposit}
							onChange={(e) =>
								setUnit({
									...unit,
									securityDeposit: parseInt(e.target.value),
								})
							}
							min={1}
							required
							disabled={!canEdit}
						/>
					</Grid>
					<TextBox
						id="pets"
						label="Pet Policy"
						value={unit.petPolicy}
						onChange={(e) =>
							setUnit({ ...unit, petPolicy: e.target.value })
						}
						required
						disabled={!canEdit}
					/>
					<TextBox
						id="leaseTerms"
						label="Lease Terms"
						value={unit.leaseTerms}
						onChange={(e) =>
							setUnit({ ...unit, leaseTerms: e.target.value })
						}
						required
						disabled={!canEdit}
					/>
				</Column>
			</Form>
		</Container>
	);
};

export default AdditionalInformation;
