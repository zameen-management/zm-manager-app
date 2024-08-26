import styled from "styled-components";

export const StyledWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(5px);

	.modal {
		background: white;
		padding: 1rem;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		width: 500px;

		.close-icon {
			width: 30px;
			height: 30px;
			cursor: pointer;
			color: ${({ theme }) => theme.colors.darkGray};
		}
	}

	@media (max-width: 600px) {
		padding: 1rem;

		.modal {
			width: 100%;
		}
	}
`;
