import React, { Component, useEffect, useState, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./SlideShow.scss";
import slideImg1 from "../../asset/img/slideImg.jpg";

const SlideShow = () => {
	useEffect(() => {
		const slides = document.querySelectorAll(".slide");
		const auto = true;
		const interval = 4000;

		
		if (auto) {
			setInterval(nextSlide, interval);
		}
	}, []);

	const [SlideShow] = useState([
		{
      id:1,
			title: "Projectando um Futuro Melhor e saudavel",
      subTitle: "Para Ti e a Sua Familia",
      clss:"current"
		},
		{
      id:2,
			title: "Projectos Residências",
			subTitle: "	Segurança & Bem-Estar"
		},
		{
      id:3,
			title: "Design Interno",
			subTitle: "Para Ti e a Sua Familia"
		},
		{
      id:4,
			title: "Projectos Comerciais",
			subTitle: "Lazer & Bem-Estar"
		}
  ]);

	return (
		<Fragment>
			<div className="slider">
				{SlideShow.map((slide) => (
					<div className={`slide ${slide.clss}`} key={slide.id}>
						<div className= {`content${slide.id}`}>
							<h3 className="light grey-text text-lighten-3 slide-text">
								{slide.title}
							</h3>
							<h5 className="light grey-text text-lighten-3 slide-text">
								{slide.subTitle}
							</h5>
						</div>
					</div>
				))}
			</div>

			<div className="button">
				<button id="prev" onClick={prev}>
					<i className="fas fa-arrow-left"></i>
				</button>

				<button id="next" onClick={next}>
					<i className="fas fa-arrow-right"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default SlideShow;
