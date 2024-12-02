import { CSSProperties, ReactNode } from "react";
import { StyledCenterContainer } from "./CenteredContainer.styled";

interface Props {
	children?: ReactNode;
	style?: CSSProperties;
}

const CenteredContainer = ({ children, style }: Props) => {
	return (
		<StyledCenterContainer style={style}>{children}</StyledCenterContainer>
	);
};

export default CenteredContainer;
