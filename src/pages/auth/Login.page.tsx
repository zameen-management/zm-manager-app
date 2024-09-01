import Modal from "../../features/ui/modal/Modal";
import { Column } from "../../features/styles/Column.styled";
import Input from "../../features/ui/input/Input";
import Form from "../../features/ui/form/Form";
import { useState } from "react";
import Button from "../../features/ui/button/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthApi from "../../features/api/Auth.api";

const LoginPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async () => {
		try {
			setIsLoading(true);
			await AuthApi.login(email, password);
			navigate("/");
		} catch (error: any) {
			alert(`Unable to login: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Modal>
			<Column $gap="0.25rem">
				<h4>Log In</h4>
				<p>Please enter your email address and password.</p>
			</Column>
			<Form onSubmit={handleSubmit}>
				<Column>
					<Input
						id="email"
						label="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						required
					/>
					<Input
						id="password"
						label="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						required
					/>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? "Logging In..." : "Log In"}
					</Button>
					<Link to="/auth/forgot-password">Forgot Password</Link>
				</Column>
			</Form>
		</Modal>
	);
};

export default LoginPage;
