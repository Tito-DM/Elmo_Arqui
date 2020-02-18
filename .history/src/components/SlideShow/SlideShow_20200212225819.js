import React, { Component, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import slideImg1 from "../../asset/img/slideImg.jpg";

const SlideShow = () => {
	useEffect(() => {
		var elems = document.querySelectorAll(".carousel.carousel-slider");
		M.Carousel.init(elems, { fullWidth: true, indicators: true, duration: 10 });

		setInterval(() => {
			M.Carousel.init(elems, "next");
		}, 100);
	}, []);

	const [SlideShow, SetSlideShow] = useState({
		img: slideImg1,
		title: "Projectando um Futuro Melhor e saudavel",
		subTitle: "Para Ti e a Sua Familia"
	});

	return (
		<div className="slider current">
      <div className"content">
  </div>
	);
};

export default SlideShow;
