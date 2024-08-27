import { PropertyAddress } from "../models/Property.model";

export const getAddress = (address: PropertyAddress | undefined) => {
	if (!address) return "";
	const { street, city, state, zip } = address;
	return `${street}, ${city}, ${state} ${zip}`;
};
