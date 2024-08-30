import GeneralInformation from "../../../features/components/properties/information/GeneralInformation";
import DeleteProperty from "../../../features/components/properties/information/DeleteProperty";
import ImageGallery from "../../../features/components/properties/information/ImageGallery";
import { useSelector } from "react-redux";
import { getProperty } from "../../../features/app/property.slice";
import AdditionalInformation from "../../../features/components/properties/information/AdditionalInformation";

const PropertyInformationPage = () => {
	const property = useSelector(getProperty);

	return (
		<>
			<GeneralInformation />
			{!property?.hasMultipleUnits && <AdditionalInformation />}
			<ImageGallery />
			<DeleteProperty />
		</>
	);
};

export default PropertyInformationPage;
