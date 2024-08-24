import { MdMenu } from "react-icons/md";
import { NavLogo, StyledLayoutHeader } from "./Layout.styled";
import { FC } from "react";

interface Header {
	setIsNavOpen: (state: boolean) => void;
}

const LayoutHeader: FC<Header> = ({ setIsNavOpen }) => {
	return (
		<StyledLayoutHeader>
			<MdMenu
				onClick={() => setIsNavOpen(true)}
				className="hamburger-icon"
			/>
			<NavLogo href="/">
				<img src="./images/logo-icon.svg" alt="ZM" />
			</NavLogo>
			<span></span>
		</StyledLayoutHeader>
	);
};

export default LayoutHeader;
