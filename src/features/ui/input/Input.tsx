import { InputHTMLAttributes } from "react";
import { Column } from "../../styles/Column.styled";
import { StyledInput } from "./Input.styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	error?: string;
	required?: boolean;
	disabled?: boolean;
}

const Input = ({
	id,
	label,
	error,
	required = false,
	disabled = false,
	...rest
}: Props) => {
	return (
		<StyledInput $disabled={disabled}>
			<Column $gap="0.5rem">
				<label htmlFor={id}>
					{label}
					{required && "*"}
				</label>
				<Column $gap="0.25rem">
					<input
						id={id}
						disabled={disabled}
						required={required}
						{...rest}
					/>
					{error && <p className="error">{error}</p>}
				</Column>
			</Column>
		</StyledInput>
	);
};

export default Input;
