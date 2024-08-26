import { StyledToggle, ToggleOption } from "./Toggle.style";

export type ToggleOption<T> = {
	name: string;
	value: T;
};

interface Props<T> {
	options: ToggleOption<T>[];
	selected: T;
	onClick: (value: T) => void;
}

const Toggle = <T,>({ options = [], selected, onClick }: Props<T>) => {
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
