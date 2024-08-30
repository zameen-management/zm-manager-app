import { MdArchive, MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProperty } from "../../../app/property.slice";
import PropertiesApi from "../../../api/Properties.api";
import { Container } from "../../../styles/Container.styled";
import { Column } from "../../../styles/Column.styled";
import { Row } from "../../../styles/Row.styled";
import Button from "../../../ui/button/Button";

const DeleteProperty = () => {
	const property = useSelector(getProperty);
	const navigate = useNavigate();

	const handleDelete = async () => {
		if (!property?._id) return;

		const response = prompt(
			'Are you sure you want to permanently delete this property? This action cannot be undone. To delete this property, please type "delete"'
		);
		if (response === "delete") {
			try {
				await PropertiesApi.delete(property._id);
				alert("Property has been deleted.");
				navigate("/properties");
			} catch (error: any) {
				alert(
					`Unable to delete property at this time: ${error.message}`
				);
			}
		}
	};

	// const handleArchive = () => {
	// 	if (
	// 		confirm(
	// 			"Are you sure you want to archive this property? (You can unarchive a property at any time."
	// 		)
	// 	) {
	// 		alert("todo: archive property");
	// 	}
	// };

	return (
		<Container>
			<Column>
				<h5>Delete Property</h5>
				<Row>
					{/* <Button
						style={{ width: "min-content" }}
						$color="#e67e22"
						$outline="outline"
						onClick={handleArchive}
					>
						<MdArchive />
						Archive Property
					</Button> */}
					<Button
						style={{ width: "min-content" }}
						$color="#e74c3c"
						onClick={handleDelete}
					>
						<MdDelete />
						Permanently Delete Property
					</Button>
				</Row>
			</Column>
		</Container>
	);
};

export default DeleteProperty;
