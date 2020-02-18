import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projecto from "./components/Projecto1/Projecto";
import AboutUs from "./components/About/About";
import ProjectoList from './components/ProJectos/ProjectoList'
import "./App.scss";
import Home from "../src/components/Home/Home";

function App(props) {
	
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

				<Route path='/projectolist/:id' children={<Child />}>
					<ProjectoList/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
