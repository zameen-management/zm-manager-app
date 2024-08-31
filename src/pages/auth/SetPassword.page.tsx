import { useEffect, useState } from "react";
import useQueryParams from "../../features/hooks/useQueryParams";
import Modal from "../../features/ui/modal/Modal";
import { Column } from "../../features/styles/Column.styled";
import Form from "../../features/ui/form/Form";
import Input from "../../features/ui/input/Input";
import Button from "../../features/ui/button/Button";
import { Link } from "react-router-dom";
import { ErrorBox } from "../../features/styles/ErrorBox.styled";

const SetPasswordPage = () => {
	const params = useQueryParams();
	const token = params["token"];
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isValid, setIsValid] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);

	useEffect(() => {
		setIsValid(true);
		setErrors([]);
		if (!password) return;

		const minLength = 8;
		const uppercasePattern = /[A-Z]/;
		const lowercasePattern = /[a-z]/;
		const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

		if (password.length < minLength) {
			setErrors((prev) => [
				`Password must be at least ${minLength} characters long.`,
				...prev,
			]);
			setIsValid(false);
		}
		if (!uppercasePattern.test(password)) {
			setErrors((prev) => [
				"Password must contain at least one uppercase letter.",
				...prev,
			]);
			setIsValid(false);
		}
		if (!lowercasePattern.test(password)) {
			setErrors((prev) => [
				"Password must contain at least one lowercase letter.",
				...prev,
			]);
			setIsValid(false);
		}
		if (!specialCharacterPattern.test(password)) {
			setErrors((prev) => [
				"Password must contain at least one special character.",
				...prev,
			]);
			setIsValid(false);
		}

		if (!confirmPassword) return;

		if (password !== confirmPassword) {
			setErrors((prev) => ["Passwords do not match.", ...prev]);
			setIsValid(false);
		}
	}, [password, confirmPassword]);

	const handleSubmit = async () => {
		if (isValid) {
			console.log({ password, confirmPassword, token });
		} else {
			alert("Invalid password.");
		}
	};

	return (
		<Modal>
			<Column $gap="0.25rem">
				<h4>Set Password</h4>
				<p>
					Valid password must be at least 8 characters and container 1
					uppercase, 1 lowercase, and 1 special character.
				</p>
			</Column>
			<Form onSubmit={handleSubmit}>
				<Column>
					<Input
						id="password"
						label="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						required
					/>
					<Input
						id="confirmPassword"
						label="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						type="password"
						required
					/>
					{errors.length > 0 && (
						<ErrorBox>
							{errors.map((error, index) => (
								<p key={index}>{error}</p>
							))}
						</ErrorBox>
					)}
					<Button type="submit">Log In</Button>
					<Link to="/auth/sign-in">Back to Sign In</Link>
				</Column>
			</Form>
		</Modal>
	);
};

export default SetPasswordPage;
