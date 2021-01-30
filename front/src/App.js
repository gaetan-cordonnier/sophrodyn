import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Loading from "./pages/Loading/";
import SignUp from "./pages/SignUp/";

function App() {
	return (
		<>
			<Reset />
			<Router>
				<Switch>
					<Route exact path="/" component={Loading} />
					<Route exact path="/signup" component={SignUp} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
