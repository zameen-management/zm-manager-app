import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	type?: "button" | "submit" | "reset";
}

const Button = ({ children, type = "button", ...rest }: ButtonProps) => {
	return (
		<StyledButton type={type} {...rest}>
			{children}
		</StyledButton>
	);
};

export default Button;
