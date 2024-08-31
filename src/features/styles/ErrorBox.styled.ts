import styled from "styled-components";

export const ErrorBox = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.error};
	background-color: ${({ theme }) => theme.colors.error}10;
	padding: 1rem;
	border-radius: 5px;

	p {
		color: ${({ theme }) => theme.colors.error} !important;
		font-size: 14px;
		line-height: 18px;
	}
`;
