import { InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label?: string;
}

const Input = ({ id, label, required = false, ...rest }: Props) => {
	return (
		<StyledInput>
			{label && (
				<label htmlFor={id}>
					{label}
					{required && "*"}
				</label>
			)}
			<input id={id} required={required} {...rest} />
		</StyledInput>
	);
};

export default Input;
