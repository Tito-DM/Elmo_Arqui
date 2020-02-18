import React, { Component, useEffect, useState, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./SlideShow.scss";
import slideImg1 from "../../asset/img/slideImg.jpg";

const SlideShow = () => {
	useEffect(() => {
		
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

    <div className="button">
        <button id='prev'><i className="fas fa-arrow-left"></i></button>
        <button id='next'><i className="fas fa-arrow-right"></i></button>
    </div>
    </Fragment>
	);
};

export default SlideShow;
