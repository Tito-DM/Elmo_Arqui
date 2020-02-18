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
            
			img: "",
			title: "Projetos Comerciais",
			description: ""
		}
	]);

	return (
		<Fragment>
			{card.map(() => (
				<HomeCard
					img={card.img}
					title={card.title}
					description={card.description}
				/>
			))}
		</Fragment>
	);
};
