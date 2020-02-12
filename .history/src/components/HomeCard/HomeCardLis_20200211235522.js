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
            id: '3c',
			img: "",
			title: "Decoração",
			description: ""
		},
		{
			img: "",
			title: "Condomínio",
			description: ""
		},
		{
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
