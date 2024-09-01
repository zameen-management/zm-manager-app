import { useState } from "react";
import Modal from "../../features/ui/modal/Modal";
import { Column } from "../../features/styles/Column.styled";
import Form from "../../features/ui/form/Form";
import Input from "../../features/ui/input/Input";
import Button from "../../features/ui/button/Button";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Row } from "../../features/styles/Row.styled";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async () => {
		console.log({ email });
	};

	return (
		<Modal>
			<Column $gap="0.25rem">
				<h4>Forgot Password?</h4>
				<p>
					Enter your email address below. We will send you a link to
					reset your password.
				</p>
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
					<Button type="submit">Send Reset Link</Button>
					<Link to="/auth/login">
						<Row $gap="0.25rem">
							<MdArrowBack />
							Back to Sign In
						</Row>
					</Link>
				</Column>
			</Form>
		</Modal>
	);
};

export default ForgotPasswordPage;
