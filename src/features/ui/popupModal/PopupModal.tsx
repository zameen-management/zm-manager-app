import { ReactNode } from "react";
import { StyledWrapper } from "./PopupModal.styled";
import { Row } from "../../styles/Row.styled";
import { MdClose } from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Column } from "../../styles/Column.styled";

interface Props {
	title: string;
	onClose: () => void;
	children?: ReactNode;
}

const PopupModal = ({ title, onClose, children }: Props) => {
	const ref = useOutsideClick<HTMLDivElement>({
		onOutsideClick: onClose,
	});

	return (
		<StyledWrapper>
			<div ref={ref} className="modal">
				<Row $justifyContent="space-between" $alignItems="center">
					<h5>{title}</h5>
					<MdClose onClick={onClose} className="close-icon" />
				</Row>
				<Column>{children}</Column>
			</div>
		</StyledWrapper>
	);
};

export default PopupModal;
