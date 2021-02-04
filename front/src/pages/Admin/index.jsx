import { React, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { api, cookies } from "../../conf";
import { Container } from "./style";
import Loading from "../../pages/Loading/";

const Admin = () => {
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		setTimeout(() => setSpinner(false), 1000);
	}, []);
	const dispatch = useDispatch();

	const handleLogout = () => {
		toast(`Vous n'êtes pas authentifié`);
		cookies.set("token", null);
		api.defaults.headers.authorization = null;
		dispatch({ type: "LOGOUT" });
	};

	return (
		<>
			{spinner ? (
				<Loading />
			) : (
				<Container>
					<h1>Sophrodyn</h1>
					<h2>Admin</h2>
					<span>Under Construction</span>
					<button onClick={handleLogout}>Log out</button>
				</Container>
			)}
		</>
	);
};

export default Admin;
