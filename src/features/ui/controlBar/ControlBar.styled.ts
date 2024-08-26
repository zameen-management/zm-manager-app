import styled from "styled-components";

export const StyledControlBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;

	.back {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.primary};
		font-size: 12px;
	}
`;
