import { Lease } from "../models/Lease.model";
import axiosInstance from "./axios";

class LeaseApi {
	private endpoint = "/leases";
	private api = axiosInstance;

	add = async (data: Lease): Promise<Lease> => {
		const response = await this.api.post(this.endpoint, data);
		return response.data;
	};

	getAll = async (params?: any): Promise<Lease[]> => {
		const response = await this.api.get(this.endpoint, { params });
		return response.data;
	};

	getById = async (id: string): Promise<Lease> => {
		const response = await this.api.get(`${this.endpoint}/${id}`);
		return response.data;
	};

	update = async (id: string, data: Partial<Lease>): Promise<Lease> => {
		const response = await this.api.put(`${this.endpoint}/${id}`, data);
		return response.data;
	};

	delete = async (id: string): Promise<Lease> => {
		const response = await this.api.delete(`${this.endpoint}/${id}`);
		return response.data;
	};
}

export default new LeaseApi();
