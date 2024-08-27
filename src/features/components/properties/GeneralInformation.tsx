import { Container } from "../../styles/Container.styled";
import { Column } from "../../styles/Column.styled";
import { Grid } from "../../styles/Grid.styled";
import Input from "../../ui/input/Input";
import { getAddress } from "../../utils/getAddress";
import { useSelector } from "react-redux";
import { getProperty } from "../../app/property.slice";
import { getFullName } from "../../utils/getFullName";
import { User } from "../../models/User.model";

const GeneralInformation = () => {
	const property = useSelector(getProperty);

	return (
		<Container>
			<Column>
				<h5>Property Information</h5>
				<Grid $columns={1}>
					<Input
						id="address"
						label="Address"
						value={getAddress(property?.address)}
						readOnly
						disabled
					/>
					<Input
						id="type"
						label="Property Type"
						value={
							property?.hasMultipleUnits
								? "Multi-Unit"
								: "Single-Family"
						}
						readOnly
						disabled
					/>
					<Input
						id="owners"
						label="Owner(s)"
						value={
							property?.owners
								.map((owner) => getFullName(owner as User))
								.join(", ") || ""
						}
						readOnly
						disabled
					/>
				</Grid>
			</Column>
		</Container>
	);
};

export default GeneralInformation;
