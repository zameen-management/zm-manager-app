import styled from "styled-components";

export const StyledToggle = styled.div`
	background: ${({ theme }) => theme.colors.lightGray};
	border-radius: 5px;
	padding: 2px;
	display: flex;
	gap: 2px;
	width: min-content;
`;

export const ToggleOption = styled.div<{ $selected: boolean }>`
	background: ${({ $selected }) => ($selected ? "white" : "none")};
	font-size: 14px;
	line-height: 14px;
	color: ${({ $selected, theme }) =>
		$selected ? theme.colors.darkGray : theme.colors.gray};
	border-radius: 4px;
	padding: 0.5rem 1.5rem;
	cursor: pointer;
	white-space: nowrap;
`;
