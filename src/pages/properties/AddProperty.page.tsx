import { useState } from "react";
import { EmptyProperty, Property } from "../../features/models/Property.model";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import PropertyApi from "../../features/api/Properties.api";
import { Container } from "../../features/styles/Container.styled";
import { Column } from "../../features/styles/Column.styled";
import ControlBar from "../../features/ui/controlBar/ControlBar";
import Form from "../../features/ui/form/Form";
import Button from "../../features/ui/button/Button";
import PropertyForm from "../../features/components/properties/PropertyForm";
import AssetsApi from "../../features/api/Assets.api";
import { Image } from "../../features/models/Image.model";

const AddPropertyPage = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [property, setProperty] = useState(EmptyProperty);
	const navigate = useNavigate();

	const createMutation = useMutation({
		mutationFn: (newProperty: Property) => PropertyApi.add(newProperty),
		onSuccess: () => {
			alert("New property created.");
			navigate("/properties");
		},
		onError: (error: Error) => {
			alert(`Unable to add property: ${error.message}`);
		},
	});

	const handleAddProperty = async () => {
		try {
			const images: Image[] = [];
			for (const file of files) {
				const key = await AssetsApi.uploadAsset(file);
				images.push({
					key,
					name: file.name,
					description: "",
				});
			}
			setProperty({ ...property, images });
			createMutation.mutate(property);
		} catch (error: any) {
			alert(`Unable to add upload assets: ${error.message}`);
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
							setFiles={setFiles}
						/>
						<Button
							type="submit"
							disabled={createMutation.isPending}
						>
							{createMutation.isPending
								? "Adding Property..."
								: "Add Property"}
						</Button>
					</Column>
				</Form>
			</Column>
		</Container>
	);
};

export default AddPropertyPage;
