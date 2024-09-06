import { Navigate, Route, Routes } from "react-router-dom";
import PropertyLayout from "../../../features/components/properties/PropertyLayout";
import PropertyInformationPage from "./PropertyInformation.page";
import PropertyApplicationsPage from "./PropertyApplications.page";
import PropertyLeasesRoot from "./leases/PropertyLeasesRoot.page";

const pages = [
	{ path: "applications", page: <PropertyApplicationsPage /> },
	{ path: "leases/*", page: <PropertyLeasesRoot /> },
];

const PropertyRoot = () => {
	return (
		<Routes>
			<Route element={<PropertyLayout />}>
				<Route index element={<PropertyInformationPage />} />
				{pages.map((page, index) => (
					<Route key={index} path={page.path} element={page.page} />
				))}
				<Route path="*" element={<Navigate to="" />} />
			</Route>
		</Routes>
	);
};

export default PropertyRoot;
