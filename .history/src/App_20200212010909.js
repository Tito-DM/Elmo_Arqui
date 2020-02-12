import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import SlideShow from "../src/components/SlideShow/SlideShow";
import FloatButtom from "../src/components/FloatButtom/FloatButtom";
import HomeCardList1 from "./components/HomeCard/HomeCardList1";
import HomeCardList2 from "./components/HomeCard/HomeCardList2";
import ImageGallery from "../src/components/ImageGallery/"
import "./App.scss";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="container">
				<SlideShow />
				<HomeCardList1 />
				<div className="divison">galery</div>
				<HomeCardList2 />
			</div>
			<FloatButtom />
		</div>
	);
}

export default App;
