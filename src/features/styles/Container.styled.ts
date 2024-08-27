import styled from "styled-components";

export const Container = styled.div`
	background: white;
	border-radius: 5px;
	padding: 1rem;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};

	@media (max-width: 600px) {
		padding: 0.75rem;
	}
`;
