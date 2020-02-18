import React, { Component, useEffect, useState, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./SlideShow.scss";
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
    <Fragment>
		<div className="slider   ">
			<div className="slide current  ">
				<div className="content1">
        <h3 class="light grey-text text-lighten-3 slide-text">Projectando um Futuro Melhor e saudavel</h3>
        <h5 class="light grey-text text-lighten-3 slide-text">Para Ti e a Sua Familia</h5>
				
				</div>
			</div>

			<div className="slide   ">
				<div className="content2">
        <h3 class="light white-text  text-lighten-1 slide-text">Projectos Residências</h3>
        <h5 class="light white-text text-lighten-1 slide-text">Segurança &amp; Bem-Estar</h5>
				</div>
			</div>

			<div className="slide  ">
				<div className="content3">
        <h3 class="light white-text text-lighten-3 slide-text">Design Interno</h3>
        <h5 class="light grey-text text-lighten-3 slide-text">Dando Vida a Tua Habitação.</h5>
				</div>
			</div>
      <div className="slide  ">
				<div className="content4">
        <h3 class="light grey-text text-lighten-5 slide-text">Projectos Comerciais</h3>
        <h5 class="light grey-text text-lighten-5 slide-text">Lazer &amp; Bem-Estar</h5>
				</div>
			</div>
		</div>

    <div className="buttons">
        <button id='prev'
    </div>
    </Fragment>
	);
};

export default SlideShow;
