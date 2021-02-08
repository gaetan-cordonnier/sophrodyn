import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Reset } from "styled-reset";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AudioList from "./pages/AudioList";
import Admin from "./pages/Admin";
import Mantra from "./pages/Mantra";

const PrivateRoute = (props) => {
	const { id } = useSelector((state) => state.user);
	const isLoggedIn = !!id;

	if (isLoggedIn) {
		return <Route {...props} />;
	} else {
		toast.error("Accès non autorisé");
		return <Redirect to="/" />;
	}
};

function App() {
	return (
		<>
			<Reset />
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<PrivateRoute exact path="/Home" component={Home} />
					<PrivateRoute exact path="/profile/:id" component={Profile} />
					<PrivateRoute exact path="/audiolist" component={AudioList} />
					<PrivateRoute exact path="/mantra" component={Mantra} />
					<PrivateRoute path="/admin" component={Admin} />
				</Switch>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
