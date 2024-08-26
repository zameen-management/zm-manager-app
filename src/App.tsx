import Layout from "./features/components/layout";
import GlobalStyles from "./features/styles/Global.styled";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeRoot from "./pages/home";
import UsersRoot from "./pages/users";
import PropertiesRoot from "./pages/properties";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Routes>
				{/* public */}
				<Route element={<Layout />}>
					<Route index element={<HomeRoot />} />
					<Route path="properties/*" element={<PropertiesRoot />} />
					<Route path="users/*" element={<UsersRoot />} />
				</Route>

				{/* catch-all */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

export default App;
