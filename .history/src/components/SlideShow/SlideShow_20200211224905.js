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
		<div class="carousel carousel-slider">
		<a class="carousel-item" href="#one!"><img src="" class/></a>
		<a class="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"/></a>
		<a class="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"/></a>
		<a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"/></a>
	  </div>
	);
};

export default SlideShow;
