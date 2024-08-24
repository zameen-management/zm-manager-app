import { useState } from "react";
import { StyledLayout } from "./Layout.styled";
import LayoutBody from "./LayoutBody";
import LayoutHeader from "./LayoutHeader";
import LayoutNav from "./LayoutNav";

const Layout = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<StyledLayout>
			<LayoutHeader setIsNavOpen={setIsNavOpen} />
			<LayoutNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			<LayoutBody />
		</StyledLayout>
	);
};

export default Layout;
