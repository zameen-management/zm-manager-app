import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Property } from "../../models/Property.model";
import PropertiesApi from "../../api/Properties.api";
import { Container } from "../../styles/Container.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProperty } from "../../app/property.slice";
import { Column } from "../../styles/Column.styled";
import PropertiesNav from "./PropertiesNav";

const PropertyLayout = () => {
	const { propertyId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		data: property,
		error,
		status,
	} = useQuery<Property, Error>({
		queryKey: ["properties", propertyId],
		queryFn: () => PropertiesApi.getById(propertyId || ""),
		enabled: !!propertyId,
	});

	useEffect(() => {
		if (status === "success") {
			dispatch(setProperty(property));
		}
	}, [status]);

	if (error) {
		alert(`Unable to load property: ${error.message}`);
		navigate("/properties");
	}

	if (status === "pending") {
		return (
			<Container>
				<h5>Loading Property...</h5>
			</Container>
		);
	}
	return (
		<Column>
			<PropertiesNav />
			<Outlet />
		</Column>
	);
};

export default PropertyLayout;
