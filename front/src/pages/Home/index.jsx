import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import Loading from "../../pages/Loading/";

const Home = () => {
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		setTimeout(() => setSpinner(false), 500);
	}, []);

	return (
		<>
			{spinner ? (
				<Loading />
			) : (
				<Container>
					<h1>Sophrodyn</h1>
					<ul>
						<Link to="/profile">
							<li>Profile</li>
						</Link>
						<Link to="/mantra">
							<li>Mantra</li>
						</Link>
						<Link to="/audiolist">
							<li>Audios</li>
						</Link>
					</ul>
				</Container>
			)}
		</>
	);
};
export default Home;
