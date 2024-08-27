import styled from "styled-components";

export const StyledLayout = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;

	@media (max-width: 1080px) {
		flex-direction: column;
	}

	.hamburger-icon {
		color: ${({ theme }) => theme.colors.primary};
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
`;

export const StyledLayoutHeader = styled.header`
	width: 100%;
	height: 60px;
	background: ${({ theme }) => theme.colors.darkGray};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;

	@media (min-width: 1080px) {
		display: none;
	}
`;

export const StyledLayoutNav = styled.nav<{
	$isNavOpen: boolean;
}>`
	width: 300px;
	height: 100%;
	padding: 1rem;
	background: ${({ theme }) => theme.colors.darkGray};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 10;
	transition: all 0.25s ease-in-out;

	.hamburger-icon {
		display: none;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem;
		border-radius: 5px;
		text-decoration: none;
		color: green;
		font-weight: 300;
		font-size: 18px;
		color: ${({ theme }) => theme.colors.gray};
		transition: all 0.25s ease-in-out;

		&:hover,
		&.active {
			background: rgba(255, 255, 255, 0.05);
		}

		&.active {
			color: white;
			font-weight: 400;
		}

		svg {
			width: 22px;
			height: 22px;
		}
	}

	@media (max-width: 1080px) {
		position: fixed;
		left: ${({ $isNavOpen }) => ($isNavOpen ? "0" : "-100vw")};
		top: 0;
		width: 100%;
		height: 100vh;
		padding-bottom: 3rem;

		.hamburger-icon {
			display: block;
		}

		.nav-item {
			border: 1px solid rgba(255, 255, 255, 0.05);
		}
	}
`;

export const NavLogo = styled.a`
	display: block;
	height: 35px;

	img {
		height: 100%;
		width: auto;
	}
`;

export const StyledLayoutBody = styled.section`
	flex: auto;
	min-height: 100%;
	overflow: auto;
	padding: 1rem;
	background: ${({ theme }) => theme.colors.offWhite};

	@media (max-width: 1080px) {
		flex: 1;
		min-height: 0;
	}

	@media (max-width: 600px) {
		padding: 0.75rem;
	}
`;
