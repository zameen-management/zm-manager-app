import styled from "styled-components";

export const ModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 600px) {
		padding: 0.5rem;
	}
`;

export const StyledModal = styled.div`
	background: white;
	padding: 2rem;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 500px;
	max-height: 80vh;
	overflow-y: auto;

	@media (max-width: 600px) {
		width: 100%;
	}
`;
