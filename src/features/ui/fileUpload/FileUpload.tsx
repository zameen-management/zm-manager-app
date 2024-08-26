import { MdUpload } from "react-icons/md";
import { StyledFileUpload } from "./FileUpload.styled";
import { ChangeEvent, useEffect, useState } from "react";
import { Column } from "../../styles/Column.styled";
import UploadItem from "./UploadItem";

interface Props {
	onChange: (files: File[]) => void;
}

const FileUpload = ({ onChange }: Props) => {
	const [files, setFiles] = useState<File[]>([]);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const newFiles = Array.from(e.target.files);
			const updatedFiles = [...files];

			newFiles.forEach((newFile) => {
				const existingFileIndex = updatedFiles.findIndex(
					(file) => file.name === newFile.name
				);

				if (existingFileIndex !== -1) {
					updatedFiles[existingFileIndex] = newFile;
				} else {
					updatedFiles.push(newFile);
				}
			});

			setFiles(updatedFiles);
		}
	};

	useEffect(() => {
		onChange(files);
	}, [files]);

	return (
		<StyledFileUpload>
			<label htmlFor="fileUpload">
				<MdUpload /> Upload Files
			</label>
			<input
				id="fileUpload"
				type="file"
				multiple
				onChange={handleFileChange}
			/>
			<Column>
				<ul>
					{files.map((file, index) => (
						<UploadItem
							key={index}
							file={file}
							onDelete={() =>
								setFiles((prev) =>
									prev.filter((f) => f.name !== file.name)
								)
							}
						/>
					))}
				</ul>
			</Column>
		</StyledFileUpload>
	);
};

export default FileUpload;
