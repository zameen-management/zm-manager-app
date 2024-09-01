import { Navigate, Route, Routes } from "react-router-dom";
import PropertyLayout from "../../../features/components/properties/PropertyLayout";
import PropertyInformationPage from "./PropertyInformation.page";
import PropertyApplicationsPage from "./PropertyApplications.page";

const PropertyRoot = () => {
	return (
		<Routes>
			<Route element={<PropertyLayout />}>
				<Route index element={<PropertyInformationPage />} />
				<Route
					path="applications"
					element={<PropertyApplicationsPage />}
				/>
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default PropertyRoot;
