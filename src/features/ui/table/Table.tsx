import { StyledTable } from "./Table.styled";

export type TableColumn<T> = {
	field: keyof T;
	name: string;
	render?: (value: any, row: T) => JSX.Element | string;
};

type TableProps<T> = {
	columns: TableColumn<T>[];
	data?: T[];
	onRowClick?: (row: T) => void;
};

const Table = <T extends {}>({
	columns,
	data = [],
	onRowClick,
}: TableProps<T>) => {
	return (
		<StyledTable>
			<thead>
				<tr>
					{columns.map((column, index) => (
						<th key={index}>{column.name}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr
						key={rowIndex}
						onClick={() => onRowClick && onRowClick(row)}
						style={{
							cursor: onRowClick ? "pointer" : "default",
						}}
					>
						{columns.map((column, colIndex) => (
							<td key={colIndex}>
								{column.render
									? column.render(row[column.field], row)
									: (row[column.field] as string | number)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</StyledTable>
	);
};

export default Table;
