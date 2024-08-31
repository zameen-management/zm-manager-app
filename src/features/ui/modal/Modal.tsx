import { ReactNode } from "react";
import { ModalWrapper, StyledModal } from "./Modal.styled";

const Modal = ({ children }: { children?: ReactNode }) => {
	return (
		<ModalWrapper>
			<StyledModal>{children}</StyledModal>
		</ModalWrapper>
	);
};

export default Modal;
