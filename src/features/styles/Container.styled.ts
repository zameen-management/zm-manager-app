import styled from "styled-components";

export const Container = styled.div`
	background: white;
	border-radius: 10px;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
