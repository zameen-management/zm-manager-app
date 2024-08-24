import { ReactElement } from "react";

export interface NavItem {
	to: string;
	name: string;
	icon?: ReactElement;
}
