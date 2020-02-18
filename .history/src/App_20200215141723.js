import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import SlideShow from "../src/components/SlideShow/SlideShow";
import FloatButtom from "../src/components/FloatButtom/FloatButtom";
import HomeCardList1 from "./components/HomeCard/HomeCardList1";
import HomeCardList2 from "./components/HomeCard/HomeCardList2";
import ImageGallery from "../src/components/ImageGallery/ImageGallery";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projecto from "../src/components/Projecto/Projecto";
import "./App.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="container">
					<SlideShow />
					<HomeCardList1 />
					<ImageGallery />
					<HomeCardList2 />
				</div>
				<FloatButtom />
				<Footer />
			</div>
			<Switch>
				<Route
				<Route exact path="/projecto">
					<Projecto />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
