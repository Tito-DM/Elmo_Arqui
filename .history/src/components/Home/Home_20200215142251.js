import React, { Fragment } from "react";
import NavBar from "../src/components/NavBar/NavBar";
import SlideShow from "../src/components/SlideShow/SlideShow";
import FloatButtom from "../src/components/FloatButtom/FloatButtom";
import HomeCardList1 from "./components/HomeCard/HomeCardList1";
import HomeCardList2 from "./components/HomeCard/HomeCardList2";
import ImageGallery from "../src/components/ImageGallery/ImageGallery";
import Footer from "../src/components/Footer/Footer";

const Home = () => {
	return (
		<Fragment>
			<NavBar />
			<div className="container">
				<SlideShow />
				<HomeCardList1 />
				<ImageGallery />
				<HomeCardList2 />
			</div>
			<FloatButtom />
			<Footer />
		</Fragment>
	);
};

export default Home;
