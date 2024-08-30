import { useState } from "react";
import { EmptyProperty } from "../../features/models/Property.model";
import { useNavigate } from "react-router-dom";
import PropertyApi from "../../features/api/Properties.api";
import { Container } from "../../features/styles/Container.styled";
import { Column } from "../../features/styles/Column.styled";
import ControlBar from "../../features/ui/controlBar/ControlBar";
import Form from "../../features/ui/form/Form";
import Button from "../../features/ui/button/Button";
import PropertyForm from "../../features/components/properties/PropertyForm";
import AssetsApi from "../../features/api/Assets.api";
import { Image } from "../../features/models/Image.model";
import UnitsApi from "../../features/api/Units.api";
import { EmptyUnit } from "../../features/models/Unit.model";

const AddPropertyPage = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [property, setProperty] = useState(EmptyProperty);
	const [unitCount, setUnitCount] = useState(1);
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleAddProperty = async () => {
		try {
			setIsLoading(true);

			// upload images
			const images: Image[] = [];
			for (const file of files) {
				const key = await AssetsApi.uploadAsset(file);
				images.push({
					key,
					name: file.name,
					description: "",
				});
			}

			// create new unit(s)
			const units: string[] = [];
			for (let i = 0; i < unitCount; i++) {
				const unit = await UnitsApi.add(EmptyUnit);
				unit._id && units.push(unit._id);
			}

			// create property
			await PropertyApi.add({ ...property, images, units });

			alert("New property created.");
			navigate("/properties");
		} catch (error: any) {
			alert(`Unable to add upload assets: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container>
			<Column $gap="2rem">
				<Column $gap="0.5rem">
					<ControlBar title="Add Property" to="/properties" />
				</Column>
				<Form onSubmit={handleAddProperty}>
					<Column $gap="2rem">
						<PropertyForm
							property={property}
							setProperty={setProperty}
							unitCount={unitCount}
							setUnitCount={setUnitCount}
							setFiles={setFiles}
						/>
						<Button type="submit" disabled={isLoading}>
							{isLoading ? "Adding Property..." : "Add Property"}
						</Button>
					</Column>
				</Form>
			</Column>
		</Container>
	);
};

export default AddPropertyPage;
