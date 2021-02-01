import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import Loading from "./pages/Loading/";
import Home from "./pages/Home/";
import SignUp from "./pages/SignUp/";
import SignIn from "./pages/SignIn/";
import Profile from "./pages/Profile/";

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
