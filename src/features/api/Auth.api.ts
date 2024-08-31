import axiosInstance from "./axios";

interface LoginI {
	id: string;
	email: string;
	role: string;
	accessToken: string;
}

class ApiAuth {
	private endpoint = "/auth";
	private api = axiosInstance;

	login = async (email: string, password: string): Promise<LoginI> => {
		const response = await this.api.post(`${this.endpoint}/login`, {
			email,
			password,
		});
		return response.data;
	};
}

export default new ApiAuth();
