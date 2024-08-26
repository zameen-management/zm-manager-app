import { InputHTMLAttributes, useState } from "react";
import { StyledDropdown } from "./Dropdown.styled";
import { Column } from "../../styles/Column.styled";
import useOutsideClick from "../../hooks/useOutsideClick";
import { MdArrowDropDown } from "react-icons/md";

export type DropdownOption = {
	name: string;
	value: any;
};

interface Props
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "onSelect"> {
	id: string;
	label: string;
	value: string;
	error?: string;
	required?: boolean;
	disabled?: boolean;
	options: DropdownOption[];
	onSelect: (option: DropdownOption) => void;
}

const Dropdown = ({
	id,
	label,
	value,
	error,
	required = false,
	disabled = false,
	options,
	onSelect,
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useOutsideClick<HTMLDivElement>({
		onOutsideClick: () => setIsOpen(false),
	});

	const handleToggle = () => {
		if (!disabled) {
			setIsOpen((prev) => !prev);
		}
	};

	const handleOptionClick = (selectedOption: DropdownOption) => {
		onSelect(selectedOption);
		setIsOpen(false);
	};

	return (
		<StyledDropdown $disabled={disabled} $isOpen={isOpen} ref={ref}>
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
						onClick={handleToggle}
						value={value}
						readOnly
					/>
					<MdArrowDropDown className="dropdown-icon" />
					{isOpen && (
						<ul className="dropdown-options">
							{options.map((option, index) => (
								<li
									key={index}
									onClick={() => handleOptionClick(option)}
								>
									{option.name}
								</li>
							))}
						</ul>
					)}
					{error && <p className="error">{error}</p>}
				</Column>
			</Column>
		</StyledDropdown>
	);
};

export default Dropdown;
