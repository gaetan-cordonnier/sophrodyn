import React from "react";
import { Container } from "./style";

const Spinner = () => {
	return (
		<Container>
			<img src="/images/logo_load.png" className="logo" alt="Sophrodyn Logo" />
			<img src="/images/spinner.gif" className="spinner" alt="Spinner" />
		</Container>
	);
};
export default Spinner;
