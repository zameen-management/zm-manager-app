import { FormEvent, ReactNode } from "react";
import { StyledForm } from "./Form.styled";

interface Props {
	onSubmit?: () => void;
	children?: ReactNode;
}

const Form = ({ onSubmit, children }: Props) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit && onSubmit();
	};

	return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
