import styled from "styled-components";

export const StyledTable = styled.table`
	border-radius: 10px;
	overflow: hidden;
	border-collapse: collapse;
	width: 100%;

	tr {
		border: 1px solid ${({ theme }) => theme.colors.lightGray};
	}

	th,
	td {
		text-align: start;
		padding: 1rem;
		font-size: 13px;
		line-height: 13px;
		letter-spacing: -0.25px;
		color: ${({ theme }) => theme.colors.darkGray};
	}

	thead {
		background: ${({ theme }) => theme.colors.lightGray};

		tr {
			th {
				font-weight: 300;
			}
		}
	}

	tbody {
		tr {
			transition: all 0.25s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.colors.offWhite};
			}
		}
	}
`;
