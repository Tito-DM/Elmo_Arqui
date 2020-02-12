import React, { Component, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import Slideshow from '../../asset/img/Slideshow-img.jpg';


const SlideShow = () => {
	const [SlideShow, SetSlideShow] = useState({
		img: {},
		title: "Projectando um Futuro Melhor e saudavel",
		subTitle: "Para Ti e a Sua Familia"
	});

	return (
		<div class="slider fullscreen fix-slide">
			<ul class="slides filter_img">
				<li>
					<img src= {SlideShow.img} />
					<div class="caption right-align">
						<h3 class="light grey-text text-lighten-3 slide-text">
							{SlideShow.title}
						</h3>
						<h5 class="light grey-text text-lighten-3 slide-text">
							{SlideShow.subTitle}
						</h5>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SlideShow;
