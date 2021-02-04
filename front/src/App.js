import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { toast } from "react-toastify";
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
		toast.error("You are lost...");
		return <Redirect to="/" />;
	}
};

function App() {
	const { id } = useSelector((state) => state.user);
	const isLoggedIn = !!id;

	return (
		<>
			<Reset />
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/Home" component={Home} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/audiolist" component={AudioList} />
					<Route exact path="/mantra" component={Mantra} />
					<PrivateRoute path="/admin" component={Admin} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
