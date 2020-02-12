import React, { Component, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import slideImg1 from "../../asset/img/slideImg.jpg";

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel.carousel-slider');
    M.Carousel.init(elems,{ fullWidth: true, indicators: true, duration: 10});
    autoplay();
    function autoplay() {
    elems.classList
      setTimeout(autoplay, 10000);
    }
  });

const SlideShow = () => {

    useEffect(() => {

    }, [])

   
    
    
	const [SlideShow, SetSlideShow] = useState({
		img: slideImg1,
		title: "Projectando um Futuro Melhor e saudavel",
		subTitle: "Para Ti e a Sua Familia"
    });
    
    

	return (
		<div class="carousel carousel-slider center" data-indicators="false">
			<div class="carousel-fixed-item center">
				<a class="btn waves-effect white grey-text darken-text-2">button</a>
			</div>
			<div class="carousel-item red white-text" href="#one!">
				<h2>First Panel</h2>
				<p class="white-text">This is your first panel</p>
			</div>
			<div class="carousel-item amber white-text" href="#two!">
				<h2>Second Panel</h2>
				<p class="white-text">This is your second panel</p>
			</div>
			<div class="carousel-item green white-text" href="#three!">
				<h2>Third Panel</h2>
				<p class="white-text">This is your third panel</p>
			</div>
			<div class="carousel-item blue white-text" href="#four!">
				<h2>Fourth Panel</h2>
				<p class="white-text">This is your fourth panel</p>
			</div>
		</div>
	);
};

export default SlideShow;
