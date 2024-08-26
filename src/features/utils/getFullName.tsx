import { User } from "../models/User.model";

export const getFullName = (user: User) => {
	return `${user.firstName} ${user.lastName}`;
};
