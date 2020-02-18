import React, { useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Projectos from "./Projectos";
import Img3 from "../../asset/img/Gallery/img3.jpg";
import NavBar from "../NavBar/NavBar";
import FlootB from "../FloatButtom/FloatButtom"
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery/ImageGallery";

const ProjectoList = () => {
	let { id } = useParams();

	const [cards] = useState([
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
		},
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		}
	]);

	return (<Fragment>
        		<NavBar />
        {cards.map((card)=>(
            <Projectos title={card.title} img= {card.img} pro={id}/>
        ))}
    </Fragment>);
};

export default ProjectoList;
