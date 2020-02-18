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
			img: "",
			title: "Decoração",
			description: ""
		},
		{
			id: "4D",
			img: "",
			title: "Condomínio",
			description: ""
		},
		{
			id: "5E",
			img: "",
			title: "Resort",
			description: ""
		},
		{
			id: "6F",
			img: "",
			title: "Projetos Comerciais",
			description: ""
		}
	]);

	return (
		<Fragment>
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
		</Fragment>
	);
};

export default HomeCardList;
