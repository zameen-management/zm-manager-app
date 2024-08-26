import styled from "styled-components";

export const StyledFileUpload = styled.div`
	width: 100%;
	border: 1px dashed ${({ theme }) => theme.colors.lightGray};
	padding: 1rem;
	border-radius: 5px;

	label {
		border: 1px solid ${({ theme }) => theme.colors.primary};
		background: none;
		color: ${({ theme }) => theme.colors.primary};
		font-size: 1rem;
		line-height: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		align-items: center;
		width: min-content;
		white-space: nowrap;
		margin: 2rem auto;
		cursor: pointer;
		transition: all 0.25s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.colors.primary};
			color: white;
		}

		svg {
			width: 25px;
			height: 25px;
		}
	}

	input {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export const StyledUploadItem = styled.li`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	border-radius: 5px;
	padding: 0.5rem 1rem;

	.file-icon {
		width: 30px;
		height: 30px;
		color: ${({ theme }) => theme.colors.primary};
	}

	p {
		color: black;
		font-weight: 300;
	}

	.file-size {
		font-size: 14px;
		line-height: 14px;
		font-weight: 300;
		color: ${({ theme }) => theme.colors.gray};
	}

	.file-delete {
		width: 25px;
		height: 25px;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.gray};
		transition: all 0.25s ease-in-out;

		&:hover {
			color: ${({ theme }) => theme.colors.error};
		}
	}
`;
