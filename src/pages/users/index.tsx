import { Navigate, Route, Routes } from "react-router";
import UsersPage from "./Users.page";
import AddUserPage from "./AddUser.page";
import UserPage from "./User.page";

const UsersRoot = () => {
	return (
		<Routes>
			<Route index element={<UsersPage />} />
			<Route path="add" element={<AddUserPage />} />
			<Route path=":userId" element={<UserPage />} />
			<Route path="*" element={<Navigate to="" />} />
		</Routes>
	);
};

export default UsersRoot;
