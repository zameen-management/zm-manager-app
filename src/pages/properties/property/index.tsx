import { Navigate, Route, Routes } from "react-router-dom";
import PropertyLayout from "../../../features/components/properties/PropertyLayout";
import PropertyInformationPage from "./PropertyInformation.page";
import PropertyLeasesPage from "./PropertyLeases.page";
import PropertyMaintenancePage from "./PropertyMaintenance.page";
import PropertyDocumentsPage from "./PropertyDocuments.page";
import PropertyFinancesPage from "./PropertyFinances.page";

const PropertyRoot = () => {
	return (
		<Routes>
			<Route element={<PropertyLayout />}>
				<Route index element={<PropertyInformationPage />} />
				<Route path="leases" element={<PropertyLeasesPage />} />
				<Route
					path="maintenance"
					element={<PropertyMaintenancePage />}
				/>
				<Route path="documents" element={<PropertyDocumentsPage />} />
				<Route path="finances" element={<PropertyFinancesPage />} />
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default PropertyRoot;
