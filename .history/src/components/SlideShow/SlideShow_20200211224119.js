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
<div class="slider fullscreen fix-slide">
  <ul class="slides filter_img">
    <li>
      <img src="img/sven-mieke-1162927-unsplash.jpg"/> 
      <div class="caption right-align">
        <h3 class="light grey-text text-lighten-3 slide-text">Projectando um Futuro Melhor e saudavel</h3>
        <h5 class="light grey-text text-lighten-3 slide-text">Para Ti e a Sua Familia</h5>
      </div>
    </li>
    <li>
      <img src="img/16 CASAS- PROJET. EXT 33.jpg" > 
      <div class="caption center-align">
        <h3 class="light  text-lighten-1 slide-text">Projectos Residências</h3>
        <h5 class="light  text-lighten-1 slide-text">Segurança &amp; Bem-Estar</h5>
      </div>
    </li>
    <li>
      <img src="img/16 CASAS- PROJET. INT 01.jpg"> 
      <div class="caption right-align">
        <h3 class="light grey-text text-lighten-3 slide-text">Design Interno</h3>
        <h5 class="light grey-text text-lighten-3 slide-text">Dando Vida a Tua Habitação.</h5>
      </div>
    </li>
    <li>
      <img src="img/RESORT-NELSON TITO ARQ- TRAÇO VIVO 11.jpg"> 
      <div class="caption center-align">
        <h3 class="light  text-lighten-5 slide-text">Projectos Comerciais</h3>
        <h5 class="light  text-lighten-5 slide-text">Lazer &amp; Bem-Estar</h5>
      </div>
    </li>
  </ul>
</div>
	);
};

export default SlideShow;
