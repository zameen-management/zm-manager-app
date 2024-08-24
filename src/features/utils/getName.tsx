import { User } from "../models/User.model";

export const getName = (user: User) => {
	return `${user.firstName} ${user.lastName}`;
};
