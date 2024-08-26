import styled from "styled-components";

interface Props {
	$disabled: boolean;
}

export const StyledTextBox = styled.div<Props>`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	label {
		font-size: 14px;
		color: ${({ theme }) => theme.colors.gray};
		font-style: ${({ $disabled }) => ($disabled ? "italic" : "none")};
	}

	textarea {
		width: 100%;
		height: 250px;
		resize: none;
		font-size: 15px;
		padding: 0.75rem 0.5rem;
		border-radius: 5px;
		outline: none;
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
		color: ${({ theme }) => theme.colors.darkGray};
		cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "text")};

		&::placeholder {
			color: ${({ theme }) => theme.colors.gray};
		}

		&:focus,
		&:active {
			border-color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
