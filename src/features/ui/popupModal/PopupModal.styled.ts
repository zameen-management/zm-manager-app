import styled from "styled-components";

export const StyledWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(5px);
	display: flex;
	align-items: center;
	justify-content: center;

	.modal {
		background: white;
		padding: 1rem;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 650px;
		max-height: 80vh;
		overflow-y: auto;

		.close-icon {
			width: 30px;
			height: 30px;
			cursor: pointer;
			color: ${({ theme }) => theme.colors.darkGray};
		}
	}

	@media (max-width: 700px) {
		padding: 1rem;

		.modal {
			width: 100%;
		}
	}
`;
