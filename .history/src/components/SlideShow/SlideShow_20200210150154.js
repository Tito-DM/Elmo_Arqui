import React, { Component, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import slideImg1 from '../../asset/img/slideImg.jpg';


const SlideShow = () => {
	const [SlideShow, SetSlideShow] = useState({
		img: slideImg1,
		title: "Projectando um Futuro Melhor e saudavel",
		subTitle: "Para Ti e a Sua Familia"
	});

	return (
		
        <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
            <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
            <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
            <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
            <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
      </div>
	);
};

export default SlideShow;
