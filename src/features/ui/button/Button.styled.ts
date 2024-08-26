import styled from "styled-components";

export const StyledButton = styled.button<any>`
	outline: none;
	padding: 10px 20px;
	font-size: 1rem;
	line-height: 1rem;
	font-weight: 400;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	border-radius: 5px;
	border: 1px solid
		${(props) =>
			props.disabled
				? "none"
				: props.$color || props.theme.colors.primary};
	background: ${(props) =>
		props.disabled
			? props.theme.colors.gray
			: props.$outline === "outline"
			? "none"
			: props.$color || props.theme.colors.primary};
	color: ${(props) =>
		props.$outline === "outline"
			? props.$color || props.theme.colors.primary
			: "white"};
	white-space: nowrap;
	min-width: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	transition: all 0.25s ease-in-out;

	&:hover {
		background: ${(props) =>
			props.disabled
				? props.theme.colors.gray
				: props.$color || props.theme.colors.primary};
		color: white;
		box-shadow: ${(props) =>
			props.disabled ? "none" : "rgba(0, 0, 0, 0.5) 0px 5px 15px"};
	}

	&:focus,
	&:active {
		box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
	}

	svg {
		width: 25px;
		height: 25px;
	}
`;