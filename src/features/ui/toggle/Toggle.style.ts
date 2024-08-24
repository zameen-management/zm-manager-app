import styled from "styled-components";

export const StyledToggle = styled.div`
	background: ${({ theme }) => theme.colors.lightGray};
	border-radius: 10px;
	padding: 5px;
	display: flex;
	gap: 5px;
	width: min-content;
`;

export const ToggleOption = styled.div<{ $selected: boolean }>`
	background: ${({ $selected }) => ($selected ? "white" : "none")};
	border-radius: 5px;
	padding: 0.5rem 1rem;
	cursor: pointer;
`;
