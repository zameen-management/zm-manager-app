import styled from "styled-components";

interface Props {
	$disabled: boolean;
}

export const StyledDropdown = styled.div<Props>`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	label {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.gray};
		font-style: ${({ $disabled }) => ($disabled ? "italic" : "none")};
	}

	input {
		font-size: 15px;
		padding: 0.75rem 0.5rem;
		border-radius: 5px;
		outline: none;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		color: ${({ theme }) => theme.colors.darkGray};
		cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
		caret-color: transparent;

		&::placeholder {
			color: ${({ theme }) => theme.colors.gray};
		}

		&:focus,
		&:active {
			border-color: ${({ theme }) => theme.colors.primary};
		}
	}

	.error {
		color: ${({ theme }) => theme.colors.error};
		font-size: 12px;
		line-height: 12px;
	}

	.dropdown-options {
		position: absolute;
		top: 3rem;
		left: 0;
		width: 100%;
		background: white;
		z-index: 10;
		border-radius: 5px;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		max-height: 200px;
		overflow-y: auto;

		li {
			list-style: none;
			padding: 0.75rem 0.5rem;
			cursor: pointer;
			transition: all 0.25s ease-in-out;
			border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

			&:hover {
				background: ${({ theme }) => theme.colors.primary};
				color: white;
			}

			&:first-child {
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}

			&:last-child {
				border-bottom-left-radius: 5px;
				border-bottom-right-radius: 5px;
				border: none;
			}
		}
	}
`;
