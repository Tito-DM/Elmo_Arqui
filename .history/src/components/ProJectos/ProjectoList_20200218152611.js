import React, { useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Projectos from "./Projectos";
import Img3 from "../../asset/img/House1.jpg";
import NavBar from "../NavBar/NavBar";
import FlootB from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery/ImageGallery";

const ProjectoList = () => {
	let { id } = useParams();
	let proj;

	const [cards] = useState([
		{
			title: "Card Title1",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},

		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},

		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		}
	]);

	if (id === "Casas") {
		proj = cards.map((card) => (
			<Projectos title={card.title} img={card.img} pro={id} />
		));
	} else if (id === "Escritório") {
		proj = cards.map((card) => (
			<Projectos title="Escritorio" img={card.img} pro={id} />
		));
	} else if (id == "Decoração") {
		proj = cards.map((card) => (
			<Projectos title="decoracao" img={card.img} pro={id} />
		));
	} else {
		proj = <div>ROUTE NOT FOUND</div>;
	}

	return (
		<Fragment>
			<NavBar />
			{proj}
			<div className="container">
				<h6 className="text-slide cyan-text">Projectos Realizados</h6>
				<ImageGallery />
			</div>
			<FlootB />
			<Footer />
		</Fragment>
	);
};

export default ProjectoList;
