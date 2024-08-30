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

export const StyledImageGallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
`;

export const StyledImage = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	border-radius: 5px;
	height: 175px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	overflow: hidden;
	transition: all 0.25s ease-in-out;

	&:hover {
		background: ${({ theme }) => theme.colors.lightGray};
	}

	img {
		width: 100%;
		height: auto;
	}

	label {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	input {
		position: absolute;
		width: 0.1px;
		height: 0.1px;
		z-index: -1;
	}
`;
