import { Image } from "./Image.model";

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
	units: string[];
	owners: string[];
	images: Image[];
	description?: string;
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
};
