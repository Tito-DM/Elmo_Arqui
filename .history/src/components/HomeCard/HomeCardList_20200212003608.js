import React, { useState, Fragment } from "react";
import HomeCard from "./HomeCard";
import slideImg1 from "../../asset/img/slideImg.jpg";
const HomeCardList = () => {
	const [card] = useState([
		{
			id: "1A",
			img: slideImg1,
			title: " Casas",
			description: ""
		},
		{
			id: "2B",
			img: slideImg1,
			title: "Escritório",
			description: ""
		},
		{
			id: "3C",
			img: slideImg1,
			title: "Decoração",
			description: ""
		},
		{
			id: "4D",
			img: slideImg1,
			title: "Condomínio",
			description: ""
		},
		{
			id: "5E",
			img: slideImg1,
			title: "Resort",
			description: ""
		},
		{
			id: "6F",
			img: slideImg1,
			title: "Projetos Comerciais",
			description: ""
		}
	]);

	return (
		<Fragment>
			<div className="container">
			<div className="home-cards">
				{card.map((card) => (
					<HomeCard
						key={card.id}
						img={card.img}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
			</div>
		</Fragment>
	);
};

export default HomeCardList;
