import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { User } from "../../models/User.model";
import { Grid } from "../../styles/Grid.styled";
import Input from "../../ui/input/Input";
import { Column } from "../../styles/Column.styled";
import Dropdown from "../../ui/dropdown/Dropdown";

interface Props {
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
	canEdit?: boolean;
}

const UserForm = ({ user, setUser, canEdit = true }: Props) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setUser((prevUser) => ({
			...prevUser,
			[id]: value,
		}));
	};

	return (
		<Column>
			<Grid $columns={2}>
				<Input
					autoFocus
					id="firstName"
					label="First Name"
					placeholder="Enter First Name"
					value={user.firstName}
					onChange={handleInputChange}
					disabled={!canEdit}
					required
				/>
				<Input
					id="lastName"
					label="Last Name"
					placeholder="Enter Last Name"
					value={user.lastName}
					onChange={handleInputChange}
					disabled={!canEdit}
					required
				/>
				<Input
					id="email"
					label="Email"
					placeholder="Enter Email Address"
					value={user.email}
					onChange={handleInputChange}
					type="email"
					disabled={!canEdit}
					required
				/>
				<Dropdown
					id="role"
					label="Role"
					placeholder="Enter User Role"
					value={user.role || ""}
					disabled={!canEdit}
					options={[
						{ name: "Tenant", value: "Tenant" },
						{ name: "Manager", value: "Manager" },
						{ name: "Owner", value: "Owner" },
					]}
					onSelect={(option) =>
						setUser({ ...user, role: option.value })
					}
					required
				/>
			</Grid>
		</Column>
	);
};

export default UserForm;
