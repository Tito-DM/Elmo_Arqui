import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import SlideShow from "../src/components/SlideShow/SlideShow";
import FloatButtom from "../src/components/FloatButtom/FloatButtom";
import HomeCardList from "./components/HomeCard/HomeCardList";
import "./App.scss";

function App() {
	return (
		<div className="App">
		
			<div className="container">
			<SlideShow />
			<HomeCardList/>
			</div>
			<FloatButtom />
		</div>
	);
}

export default App;
