import { useDispatch } from "react-redux";
import AuthApi from "../api/Auth.api";
import { setAccessToken, setRole } from "../app/auth.slice";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		try {
			const { accessToken, role } = await AuthApi.refresh();

			dispatch(setAccessToken(accessToken));
			dispatch(setRole(role));

			return accessToken;
		} catch (error: any) {
			throw new Error(error.message);
		}
	};

	return refresh;
};

export default useRefreshToken;
