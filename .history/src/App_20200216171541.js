import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projecto from "./components/Projecto1/Projecto";
import AboutUs from "./components/About/About";
import Pro from './components/ProJectos/Casas/Casa'
import "./App.scss";
import Home from "../src/components/Home/Home";

function App() {
	
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/projecto">
					<Projecto />
				</Route>

				<Route path="/about">
					<AboutUs />
				</Route>

				<Route path='/casa'>
					<Casa/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
