import { Unit } from "../models/Unit.model";
import axiosInstance from "./axios";

class UnitApi {
	private endpoint = "/units";
	private api = axiosInstance;

	add = async (data: Unit): Promise<Unit> => {
		const response = await this.api.post(this.endpoint, data);
		return response.data;
	};

	getAll = async (params: any): Promise<Unit[]> => {
		const response = await this.api.get(this.endpoint, { params });
		return response.data;
	};

	getById = async (id: string): Promise<Unit> => {
		const response = await this.api.get(`${this.endpoint}/${id}`);
		return response.data;
	};

	update = async (id: string, data: Partial<Unit>): Promise<Unit> => {
		const response = await this.api.put(`${this.endpoint}/${id}`, data);
		return response.data;
	};

	delete = async (id: string): Promise<Unit> => {
		const response = await this.api.delete(`${this.endpoint}/${id}`);
		return response.data;
	};
}

export default new UnitApi();
