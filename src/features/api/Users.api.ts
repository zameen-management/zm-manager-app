import { User } from "../models/User.model";
import axiosInstance from "./axios";

class UserApi {
	private endpoint = "/users";
	private api = axiosInstance;

	add = async (user: User): Promise<User> => {
		const response = await this.api.post(this.endpoint, user);
		return response.data;
	};

	getUsers = async (params: any): Promise<User[]> => {
		const response = await this.api.get(this.endpoint, { params });
		return response.data;
	};

	getById = async (id: string): Promise<User> => {
		const response = await this.api.get(`${this.endpoint}/${id}`);
		return response.data;
	};

	update = async (id: string, user: Partial<User>): Promise<User> => {
		const response = await this.api.put(`${this.endpoint}/${id}`, user);
		return response.data;
	};

	delete = async (id: string): Promise<User> => {
		const response = await this.api.delete(`${this.endpoint}/${id}`);
		return response.data;
	};
}

export default new UserApi();
