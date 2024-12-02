import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			gray: string;
			lightGray: string;
			offWhite: string;
			error: string;
			success: string;
		};
	}
}
