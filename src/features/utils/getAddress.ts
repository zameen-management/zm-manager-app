import { PropertyAddress } from "../models/Property.model";

export const getAddress = (address: PropertyAddress) => {
	const { street, city, state, zip } = address;
	return `${street}, ${city}, ${state} ${zip}`;
};
