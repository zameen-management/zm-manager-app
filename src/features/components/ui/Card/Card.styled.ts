import styled from "styled-components";

export const StyledCard = styled.div`
	background-color: white;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	padding: 2rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 600px;

	@media (max-width: 600px) {
		width: 100%;
		border: none;
		box-shadow: none;
	}
`;
