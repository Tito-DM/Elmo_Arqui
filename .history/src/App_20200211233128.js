import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import SlideShow from "../src/components/SlideShow/SlideShow";
import FloatButtom from "../src/components/FloatButtom/FloatButtom";
import HomeCard from "../src/components/HomeCard/HomeCard";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<NavBar />
			<SlideShow />
			<HomeCard
			<FloatButtom />
		</div>
	);
}

export default App;
