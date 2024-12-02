import Button from "../../features/components/ui/Button/Button";
import Card from "../../features/components/ui/Card/Card";
import CenteredContainer from "../../features/components/ui/CenteredContainer/CenteredContainer";
import Form from "../../features/components/ui/Form/Form";
import Input from "../../features/components/ui/Input/Input";
import { Column } from "../../features/styles/Column.styled";

const LoginPage = () => {
	const handleSubmit = () => {
		console.log(true);
	};

	return (
		<CenteredContainer>
			<Card>
				<Form onSubmit={handleSubmit}>
					<Column $gap="0.5rem">
						<h5>Welcome!</h5>
						<p>Please enter your credentials below</p>
					</Column>
					<Column $gap="0.5rem">
						<Input
							id="email"
							label="Email"
							placeholder="Enter email address"
							type="email"
							required
						/>
						<Input
							id="password"
							label="Password"
							placeholder="Enter password"
							type="password"
							required
						/>
						<Button type="submit">Sign In</Button>
					</Column>
				</Form>
			</Card>
		</CenteredContainer>
	);
};

export default LoginPage;
