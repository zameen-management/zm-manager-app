import { ReactNode } from "react";
import { StyledControlBar } from "./ControlBar.styled";
import { Column } from "../../styles/Column.styled";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
	title: string;
	to?: string;
	children?: ReactNode;
}

const ControlBar = ({ title, to, children }: Props) => {
	return (
		<StyledControlBar>
			<Column $gap="0">
				{to && (
					<Link to={to} className="back">
						<MdArrowBack />
						Go Back
					</Link>
				)}
				<h5>{title}</h5>
			</Column>
			{children}
		</StyledControlBar>
	);
};

export default ControlBar;
