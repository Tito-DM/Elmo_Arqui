import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projecto from "../src/components/Projecto/Projecto";
import "./App.scss";
import Home from ".."
function App() {
	return (
		<Router>
			<div className="App">
				</Home>
			</div>
			<Switch>
				<Route exact path='/'>

				</Route>
				<Route exact path="/projecto">
					<Projecto />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
