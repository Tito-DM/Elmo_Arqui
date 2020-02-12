import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import SlideShow from "../src/components/SlideShow/SlideShow";
import FloatButtom from "../src/components/FloatButtom/FloatButtom";
import HomeCardList from "../src/";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<NavBar />
			<SlideShow />
			<HomeCardList/>
			<FloatButtom />
		</div>
	);
}

export default App;
