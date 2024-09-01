import { NavLink, useParams } from "react-router-dom";
import { StyledPropertiesNav } from "./Properties.styled";

interface Route {
	name: string;
	to: string;
}

const routes: Route[] = [
	{ name: "General", to: "" },
	{ name: "Applications", to: "applications" },
];

const PropertiesNav = () => {
	const { propertyId } = useParams();

	return (
		<StyledPropertiesNav>
			{routes.map((route, index) => (
				<NavLink
					key={index}
					to={`/properties/${propertyId}${
						route.to && `/${route.to}`
					}`}
					end={route.to === ""}
				>
					{route.name}
				</NavLink>
			))}
		</StyledPropertiesNav>
	);
};

export default PropertiesNav;
