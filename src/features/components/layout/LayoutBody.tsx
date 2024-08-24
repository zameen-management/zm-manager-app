import { Outlet } from "react-router";
import { StyledLayoutBody } from "./Layout.styled";

const LayoutBody = () => {
	return <StyledLayoutBody>{<Outlet />}</StyledLayoutBody>;
};

export default LayoutBody;
