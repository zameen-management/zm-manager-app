import styled from "styled-components";

interface Props {
	open: boolean;
}

export const StyledSelect = styled.div<Props>`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;

	input {
		cursor: pointer;
	}

	.select-icon {
		width: 25px;
		height: 25px;
		color: ${({ theme }) => theme.colors.darkGray};
		position: absolute;
		top: 34px;
		right: 8px;
		transform: rotate(${({ open }) => (open ? "180deg" : "0")});
	}

	.select-options {
		border-radius: 5px;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		color: ${({ theme }) => theme.colors.darkGray};
		cursor: pointer;
		max-height: 250px;
		overflow-y: auto;

		li {
			list-style: none;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;
			transition: all 0.25s ease-in-out;
			font-size: 15px;
			padding: 0.75rem 0.5rem;

			&:hover {
				background-color: ${({ theme }) => theme.colors.offWhite};
			}

			svg {
				width: 20px;
				height: 20px;
				color: ${({ theme }) => theme.colors.primary};
			}
		}
	}
`;
