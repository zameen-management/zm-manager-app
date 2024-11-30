import GlobalStyles from "./features/styles/Global.styled";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeRoot from "./pages/home/Home.page";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Routes>
				{/* public */}
				<Route index element={<HomeRoot />} />

				{/* catch-all */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

export default App;
