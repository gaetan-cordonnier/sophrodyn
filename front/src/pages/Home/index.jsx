import { React, useState, useEffect } from "react";
import { Container } from "./style";
import Loading from "../../pages/Loading/";

const Home = () => {
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		setTimeout(() => setSpinner(false), 1000);
	}, []);

	return (
		<>
			{spinner ? (
				<Loading />
			) : (
				<Container>
					<h1>Sophrodyn</h1>
					<h2>HOME</h2>
					<span>Under Construction</span>
				</Container>
			)}
		</>
	);
};
export default Home;
