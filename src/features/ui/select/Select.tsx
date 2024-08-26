import { useState } from "react";
import Input from "../input/Input";
import { StyledSelect } from "./Select.styled";
import {
	MdArrowDropDown,
	MdCheckBox,
	MdCheckBoxOutlineBlank,
} from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";

type Option = {
	name: string;
	value: any;
};

interface Props {
	id: string;
	label: string;
	options: Option[];
	disabled?: boolean;
	value: string[];
	onChange: (options: string[]) => void;
}

const Select = ({
	id,
	label,
	options = [],
	disabled = false,
	value,
	onChange,
}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [selectedOptions, setSelectedOptions] = useState(value);
	const ref = useOutsideClick<HTMLDivElement>({
		onOutsideClick: () => setIsOpen(false),
	});

	const handleOptionClick = (option: Option) => {
		let updatedOptions = [...selectedOptions];
		if (selectedOptions.includes(option.value)) {
			updatedOptions = updatedOptions.filter(
				(opt) => opt !== option.value
			);
		} else {
			updatedOptions.push(option.value);
		}

		setSelectedOptions(updatedOptions);
		onChange(updatedOptions);
	};

	return (
		<StyledSelect ref={ref} open={isOpen}>
			<Input
				id={id}
				label={label}
				placeholder="Select All That Apply..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onClick={() => !disabled && setIsOpen(!isOpen)}
				disabled={disabled}
			/>
			<MdArrowDropDown className="select-icon" />
			{isOpen && (
				<ul className="select-options">
					{options.map((option, index) => {
						const selected = selectedOptions.includes(option.value);
						return (
							<li
								key={index}
								onClick={() => handleOptionClick(option)}
							>
								{selected ? (
									<MdCheckBox />
								) : (
									<MdCheckBoxOutlineBlank />
								)}
								{option.name}
							</li>
						);
					})}
				</ul>
			)}
		</StyledSelect>
	);
};

export default Select;
