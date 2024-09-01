import { NavLink, useNavigate } from "react-router-dom";
import { Column } from "../../styles/Column.styled";
import Button from "../../ui/button/Button";
import { NavLogo, StyledLayoutNav } from "./Layout.styled";
import { MdClose, MdHome, MdPersonOutline } from "react-icons/md";
import { NavItem } from "./Layout";
import { FC } from "react";
import { Row } from "../../styles/Row.styled";
import useLogout from "../../auth/useLogout";

interface Nav {
	isNavOpen: boolean;
	setIsNavOpen: (state: boolean) => void;
}

const navItems: NavItem[] = [
	{
		to: "/properties",
		name: "Properties",
		icon: <MdHome />,
	},
	{
		to: "/users",
		name: "Users",
		icon: <MdPersonOutline />,
	},
];

const LayoutNav: FC<Nav> = ({ isNavOpen, setIsNavOpen }) => {
	const logout = useLogout();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
		} catch (error) {
			console.log(error);
		} finally {
			navigate("/auth/login");
		}
	};
	return (
		<StyledLayoutNav $isNavOpen={isNavOpen}>
			<Column $gap="2rem">
				<Row $justifyContent="space-between">
					<MdClose
						onClick={() => setIsNavOpen(false)}
						className="hamburger-icon"
					/>
					<NavLogo href="/">
						<img src="./images/logo-icon.svg" alt="ZM" />
					</NavLogo>
					<span></span>
				</Row>
				<Column>
					{navItems.map((item: NavItem, index: number) => (
						<NavLink
							key={index}
							to={item.to}
							className="nav-item"
							onClick={() => setIsNavOpen(false)}
						>
							{item?.icon && item.icon}
							{item.name}
						</NavLink>
					))}
				</Column>
			</Column>
			<Button $outline="outline" onClick={handleLogout}>
				Log Out
			</Button>
		</StyledLayoutNav>
	);
};

export default LayoutNav;
