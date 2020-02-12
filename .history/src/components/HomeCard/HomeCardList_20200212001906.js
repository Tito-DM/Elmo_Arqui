import React, { useState, Fragment } from "react";
import HomeCard from "./HomeCard";

const HomeCardList = () => {
	const [card] = useState([
		{
            id: '1A',
			img: "",
			title: " Casas",
			description: ""
		},
		{
            id: '2B',
			img: "",
			title: "Escritório",
			description: ""
		},
		{
            id: '3C',
			img: "",
			title: "Decoração",
			description: ""
		},
		{
            id: '4D',
			img: "",
			title: "Condomínio",
			description: ""
		},
		{
            id: '5E',
			img: "",
			title: "Resort",
			description: ""
		},
		{
            id: '6F',
			img: "",
			title: "Projetos Comerciais",
			description: ""
		}
	]);

	return (
		<Fragment>
			{card.map(card  => (
				<<div className="home-cards">
				<HomeCard key={card.id}
					img={card.img}
					title={card.title}
					description={card.description}
				/>
			))}
		</Fragment>
	);
};

export default HomeCardList;