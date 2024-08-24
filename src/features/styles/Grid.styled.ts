import styled from "styled-components";

interface GridProps {
	$columns: number;
}
export const Grid = styled.div<GridProps>`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	gap: 1rem;

	@media (min-width: calc(${(props) => props.$columns} * 400px)) {
		grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
	}
`;
