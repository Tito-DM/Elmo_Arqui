import React, { useState, Fragment } from "react";
import HomeCard2 from "./HomeCard1";
import slideImg1 from "../../asset/img/slideImg.jpg";
const HomeCardList2 = () => {
	const [card] = useState([
		
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
			<div className="home-cards">
				{card.map((card) => (
					<HomeCard2
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

export default HomeCardList2;
