import { useDispatch, useSelector } from "react-redux";
import { Column } from "../../../styles/Column.styled";
import { Container } from "../../../styles/Container.styled";
import { getProperty, setProperty } from "../../../app/property.slice";
import Image from "../../../ui/image/Image";
import { StyledImage, StyledImageGallery } from "../Properties.styled";
import { MdAddPhotoAlternate, MdArrowLeft, MdArrowRight } from "react-icons/md";
import { ChangeEvent, useState } from "react";
import AssetsApi from "../../../api/Assets.api";
import { Image as ImageModel } from "../../../models/Image.model";
import PropertiesApi from "../../../api/Properties.api";
import { Property } from "../../../models/Property.model";
import PopupModal from "../../../ui/popupModal/PopupModal";
import { Row } from "../../../styles/Row.styled";
import Button from "../../../ui/button/Button";
import Input from "../../../ui/input/Input";

const ImageGallery = () => {
	const dispatch = useDispatch();
	const property = useSelector(getProperty);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedImage, setSelectedImage] = useState<ImageModel>();

	const uploadFiles = async (files: File[]): Promise<ImageModel[]> => {
		const images: ImageModel[] = [];

		for (const file of files) {
			const key = await AssetsApi.uploadAsset(file);
			images.push({
				key,
				name: file.name,
				description: "",
			});
		}

		return images;
	};

	const updatePropertyImages = async (
		images: ImageModel[]
	): Promise<Property> => {
		if (!property?.images || !property?._id) {
			throw new Error("Missing property.");
		}

		const updatedProperty = await PropertiesApi.update(property._id, {
			images: [...property.images, ...images],
		});
		return updatedProperty;
	};

	const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || !property?.images) return;

		const files = Array.from(e.target.files);
		const prev = property.images.map((image) => image.name);
		const newFiles = files.filter((file) => !prev.includes(file.name));

		try {
			setIsLoading(true);
			const images = await uploadFiles(newFiles);
			const updatedProperty = await updatePropertyImages(images);
			dispatch(
				setProperty({ ...property, images: updatedProperty.images })
			);
		} catch (error: any) {
			alert(`Unable to upload files: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async () => {
		if (!confirm("Are you sure you want to delete this image?")) return;
		if (!selectedImage || !property) return;
		try {
			setIsLoading(true);
			await AssetsApi.delete(selectedImage.key || "");
			const updatedProperty = await PropertiesApi.update(
				property?._id || "",
				{
					images: property?.images.filter(
						(image) => image.key !== selectedImage.key
					),
				}
			);
			setSelectedImage(undefined);
			dispatch(
				setProperty({ ...property, images: updatedProperty.images })
			);
		} catch (error: any) {
			alert(`Unable to delete image: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSave = async () => {
		if (!selectedImage || !property?.images) return;
		try {
			setIsLoading(true);
			const updatedImages = [...property.images];
			const index = property.images.findIndex(
				(image) => image.key === selectedImage.key
			);
			if (index === -1) return;
			updatedImages[index] = selectedImage;
			const updatedProperty = await PropertiesApi.update(
				property?._id || "",
				{ images: updatedImages }
			);
			setSelectedImage(undefined);
			dispatch(
				setProperty({ ...property, images: updatedProperty.images })
			);
		} catch (error: any) {
			alert(`Unable to save image: ${error.message}`);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const moveImage = async (index: number, to: number) => {
		if (!property?.images) return;
		const images = [...property.images];

		if (
			index < 0 ||
			index >= images.length ||
			to < 0 ||
			to >= images.length
		) {
			return;
		}

		try {
			setIsLoading(true);
			const updatedImages = [...images];
			const [movedItem] = updatedImages.splice(index, 1);
			updatedImages.splice(to, 0, movedItem);

			const updatedProperty = await PropertiesApi.update(
				property?._id || "",
				{ images: updatedImages }
			);
			dispatch(
				setProperty({ ...property, images: updatedProperty.images })
			);
		} catch (error: any) {
			alert(`Unable to reorder images: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<Container>
				<Column $gap="2rem">
					<h5>Image Gallery</h5>
					<StyledImageGallery>
						<StyledImage>
							<label htmlFor="uploadNew">
								{isLoading ? (
									<p>Uploading...</p>
								) : (
									<>
										<MdAddPhotoAlternate />
										<p>Add Photo(s)</p>
									</>
								)}
							</label>
							<input
								id="uploadNew"
								type="file"
								multiple
								accept="image/*"
								onChange={handleFileUpload}
								disabled={isLoading}
							/>
						</StyledImage>
						{property?.images.map((image, index) => (
							<Column key={index} $gap="0.5rem">
								<StyledImage>
									<Image
										imageKey={image.key || ""}
										alt="Property"
										onClick={() =>
											image && setSelectedImage(image)
										}
									/>
								</StyledImage>
								<Row $justifyContent="center">
									<MdArrowLeft
										style={{
											width: "30px",
											height: "30px",
											cursor: "pointer",
										}}
										onClick={() =>
											moveImage(index, index - 1)
										}
									/>
									<MdArrowRight
										style={{
											width: "30px",
											height: "30px",
											cursor: "pointer",
										}}
										onClick={() =>
											moveImage(index, index + 1)
										}
									/>
								</Row>
							</Column>
						))}
					</StyledImageGallery>
				</Column>
			</Container>
			{selectedImage && (
				<PopupModal
					title="Edit Photo"
					onClose={() => setSelectedImage(undefined)}
				>
					<Image imageKey={selectedImage.key || ""} />
					<Input
						id="description"
						label="Enter Image Description"
						value={selectedImage.description}
						onChange={(e) =>
							setSelectedImage({
								...selectedImage,
								description: e.target.value,
							})
						}
					/>
					<Row $justifyContent="center">
						<Button
							onClick={handleDelete}
							$outline="outline"
							$color="#e74c3c"
							disabled={isLoading}
						>
							Delete Image
						</Button>
						<Button onClick={handleSave} disabled={isLoading}>
							Save Changes
						</Button>
					</Row>
				</PopupModal>
			)}
		</>
	);
};

export default ImageGallery;
