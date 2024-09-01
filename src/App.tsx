import Layout from "./features/components/layout";
import GlobalStyles from "./features/styles/Global.styled";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeRoot from "./pages/home";
import UsersRoot from "./pages/users";
import PropertiesRoot from "./pages/properties";
import AuthRoot from "./pages/auth";
import PersistLogin from "./features/auth/PersistLogin";
import UnauthorizedPage from "./pages/unauthorized";
import RequireAuth from "./features/auth/RequireAuth";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Routes>
				{/* public */}
				<Route path="auth/*" element={<AuthRoot />} />
				<Route path="unauthorized" element={<UnauthorizedPage />} />

				{/* private */}
				<Route element={<Layout />}>
					<Route element={<PersistLogin />}>
						<Route element={<RequireAuth />}>
							<Route index element={<HomeRoot />} />
							<Route
								path="properties/*"
								element={<PropertiesRoot />}
							/>
							<Route path="users/*" element={<UsersRoot />} />
						</Route>
					</Route>
				</Route>

				{/* catch-all */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

export default App;
