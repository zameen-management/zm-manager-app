import styled from "styled-components";

interface Column {
	$gap?: string;
}

export const Column = styled.div<Column>`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props?.$gap || "1rem"};
`;
