import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "./style";
import Loading from "../../pages/Loading/";

const Home = () => {
	const [profile, setProfile] = useState([]);
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		setTimeout(() => setSpinner(false), 1000);
		axios
			.get("http://localhost:5050/user/3")
			.then(function (response) {
				setProfile(response.data[0]);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<>
			{spinner ? (
				<Loading />
			) : (
				<Container>
					<h1>Sophrodyn</h1>
					<h2>Bonjour {profile.firstname}!</h2>
					<ul>
						<Link to="/profile">Profil</Link>
						<Link to="/mantra">Mantra</Link>
						<Link to="/audiolist">Audios</Link>
					</ul>
				</Container>
			)}
		</>
	);
};
export default Home;
