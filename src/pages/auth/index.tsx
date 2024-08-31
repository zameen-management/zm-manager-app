import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Login.page";
import ForgotPasswordPage from "./ForgotPassword.page";
import SetPasswordPage from "./SetPassword.page";

const AuthRoot = () => {
	return (
		<Routes>
			<Route index element={<Navigate to="sign-in" />} />
			<Route path="sign-in" element={<LoginPage />} />
			<Route path="forgot-password" element={<ForgotPasswordPage />} />
			<Route path="set-password" element={<SetPasswordPage />} />
			<Route path="*" element={<Navigate to="sign-in" />} />
		</Routes>
	);
};

export default AuthRoot;
