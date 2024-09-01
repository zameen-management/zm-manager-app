import { useNavigate } from "react-router-dom";
import Button from "../../features/ui/button/Button";
import { useEffect } from "react";
import Modal from "../../features/ui/modal/Modal";

const UnauthorizedPage = () => {
	const navigate = useNavigate();

	const handleClick = () => navigate("/auth/login");

	useEffect(() => {
		setTimeout(() => {
			navigate("/auth/login");
		}, 3000);
	}, []);

	return (
		<Modal>
			<h5>Unauthorized</h5>
			<p>You will be redirected shortly...</p>
			<Button onClick={handleClick}>Back to Login</Button>
		</Modal>
	);
};

export default UnauthorizedPage;
