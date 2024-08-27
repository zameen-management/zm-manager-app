import styled from "styled-components";

export const StyledPropertiesNav = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	background: white;
	border-radius: 5px;
	padding: 1rem;
	overflow-x: scroll;

	a {
		white-space: nowrap;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.gray};
		font-weight: 400;
		font-size: 14px;
		line-height: 14px;
		padding: 0.5rem 1rem;
		border-radius: 5px;

		&.active {
			background: ${({ theme }) => theme.colors.primary};
			color: white;
		}
	}
`;
