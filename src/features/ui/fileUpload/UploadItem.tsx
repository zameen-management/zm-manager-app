import { StyledUploadItem } from "./FileUpload.styled";
import { Row } from "../../styles/Row.styled";
import { MdCancel, MdImage } from "react-icons/md";
import { Column } from "../../styles/Column.styled";
import { formatBytes } from "../../utils/formatBytes";

interface Props {
	file: File;
	onDelete: () => void;
}

const UploadItem = ({ file, onDelete }: Props) => {
	return (
		<StyledUploadItem>
			<Row>
				<MdImage className="file-icon" />
				<Column $gap="0">
					<p>{file.name}</p>
					<p className="file-size">{formatBytes(file.size)}</p>
				</Column>
			</Row>
			<MdCancel onClick={onDelete} className="file-delete" />
		</StyledUploadItem>
	);
};

export default UploadItem;
