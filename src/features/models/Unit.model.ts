import { Image } from "./Image.model";

export interface Unit {
	property: string;
	number?: string;
	beds: number;
	baths: number;
	sqft: number;
	description?: string;
	lease?: string;
	images: Image[];
}

export const EmptyUnit: Unit = {
	property: "",
	number: "",
	beds: 0,
	baths: 0,
	sqft: 0,
	description: "",
	lease: "",
	images: [],
};
