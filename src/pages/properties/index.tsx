import { Navigate, Route, Routes } from "react-router-dom";
import PropertiesPage from "./Properties.page";
import AddPropertyPage from "./AddProperty.page";
import PropertyRoot from "./property";

const PropertiesRoot = () => {
	return (
		<Routes>
			<Route index element={<PropertiesPage />} />
			<Route path="add" element={<AddPropertyPage />} />
			<Route path=":propertyId" element={<PropertyRoot />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default PropertiesRoot;
