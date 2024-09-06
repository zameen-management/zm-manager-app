import { Navigate, Route, Routes } from "react-router-dom";
import PropertyAddLeasePage from "./PropertyAddLease.page";
import PropertyLeasePage from "./PropertyLease.page";
import PropertyLeasesPage from "./PropertyLeases.page";

const PropertyLeasesRoot = () => {
	return (
		<Routes>
			<Route index element={<PropertyLeasesPage />} />
			<Route path="add" element={<PropertyAddLeasePage />} />
			<Route path=":leaseId" element={<PropertyLeasePage />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default PropertyLeasesRoot;
