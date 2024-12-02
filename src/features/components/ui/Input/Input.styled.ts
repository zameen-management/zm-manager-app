import styled from "styled-components";

export const StyledInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;

	label {
		font-weight: 400;
		color: ${({ theme }) => theme.colors.gray};
		font-size: 15px;
		letter-spacing: 0.1px;
	}

	input {
		padding: 0.75rem;
		font-size: 1rem;
		border: 2px solid ${({ theme }) => theme.colors.lightGray};
		border-radius: 6px;
		outline: none;

		&:focus {
			border-color: ${({ theme }) => theme.colors.primary};
		}

		&:disabled,
		&:read-only {
			cursor: not-allowed;
		}
	}
`;
