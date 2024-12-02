import styled from "styled-components";

interface Props {
	$gap?: string;
}

export const Column = styled.div<Props>`
	display: flex;
	flex-direction: column;
	gap: ${({ $gap }) => $gap || "1rem"};
`;
