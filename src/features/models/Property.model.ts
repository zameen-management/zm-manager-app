import { Image } from "./Image.model";
import { Unit } from "./Unit.model";
import { User } from "./User.model";

export interface PropertyAddress {
	street: string;
	city: string;
	state: string;
	zip: string;
}

export interface Property {
	_id?: string;
	address: PropertyAddress;
	hasMultipleUnits: boolean;
	units: string[] | Unit[];
	owners: string[] | User[];
	images: Image[];
	description: string;
	status: "Available" | "Unavailable" | "Occupied";
	isArchived: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export const EmptyProperty: Property = {
	address: {
		street: "",
		city: "",
		state: "",
		zip: "",
	},
	hasMultipleUnits: false,
	units: [],
	owners: [],
	images: [],
	description: "",
	status: "Available",
	isArchived: false,
};
