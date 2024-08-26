import { InputHTMLAttributes } from "react";
import { Column } from "../../styles/Column.styled";
import { StyledTextBox } from "./TextBox.styled";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
	id: string;
	label: string;
	error?: string;
	required?: boolean;
	disabled?: boolean;
}

const TextBox = ({
	id,
	label,
	error,
	required = false,
	disabled = false,
	...rest
}: Props) => {
	return (
		<StyledTextBox $disabled={disabled}>
			<Column $gap="0.5rem">
				<label htmlFor={id}>
					{label}
					{required && "*"}
				</label>
				<Column $gap="0.25rem">
					<textarea
						id={id}
						disabled={disabled}
						required={required}
						{...rest}
					/>
				</Column>
			</Column>
		</StyledTextBox>
	);
};

export default TextBox;
