import { User } from "./User.model";

export interface Lease {
	_id?: string;
	property: string;
	unit: string;
	tenants: string[] | User[];
	startDate: string;
	endDate: string;
	status: "Inactive" | "Active";
	createdAt?: Date;
	updatedAt?: Date;
}

export const EmptyLease: Lease = {
	property: "",
	unit: "",
	tenants: [],
	startDate: "",
	endDate: "",
	status: "Inactive",
};
