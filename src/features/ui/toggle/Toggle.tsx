import { StyledToggle, ToggleOption } from "./Toggle.style";

export type ToggleOption = {
	name: string;
	value: string;
};

interface Props {
	options: ToggleOption[];
	selected: string;
	onClick: (value: string) => void;
}

const Toggle = ({ options = [], selected, onClick }: Props) => {
	return (
		<StyledToggle>
			{options.map((option, index) => (
				<ToggleOption
					key={index}
					onClick={() => onClick(option.value)}
					$selected={selected === option.value}
				>
					{option.name}
				</ToggleOption>
			))}
		</StyledToggle>
	);
};

export default Toggle;
