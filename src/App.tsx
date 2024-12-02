import GlobalStyles from "./features/styles/Global.styled";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeRoot from "./pages/home/Home.page";
import LoginPage from "./pages/auth/Login.page";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Routes>
				{/* public */}
				<Route index element={<HomeRoot />} />
				<Route path="sign-in" element={<LoginPage />} />

				{/* catch-all */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

export default App;
