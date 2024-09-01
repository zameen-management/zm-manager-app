import { Application } from "../models/Application.model";
import axiosInstance from "./axios";

class ApplicationApi {
	private endpoint = "/applications";
	private api = axiosInstance;

	add = async (data: Application): Promise<Application> => {
		const response = await this.api.post(this.endpoint, data);
		return response.data;
	};

	getAll = async (params?: any): Promise<Application[]> => {
		const response = await this.api.get(this.endpoint, { params });
		return response.data;
	};

	getById = async (id: string): Promise<Application> => {
		const response = await this.api.get(`${this.endpoint}/${id}`);
		return response.data;
	};

	update = async (
		id: string,
		data: Partial<Application>
	): Promise<Application> => {
		const response = await this.api.put(`${this.endpoint}/${id}`, data);
		return response.data;
	};

	delete = async (id: string): Promise<Application> => {
		const response = await this.api.delete(`${this.endpoint}/${id}`);
		return response.data;
	};
}

export default new ApplicationApi();
