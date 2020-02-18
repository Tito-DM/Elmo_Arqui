import React, { Component, useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const SlideShow = () => {
	const [SlideShow, SetSlideShow] = useState({im});

	return (
		<div class="slider fullscreen fix-slide">
			<ul class="slides filter_img">
				<li>
					<img src="img/sven-mieke-1162927-unsplash.jpg" />
					<div class="caption right-align">
						<h3 class="light grey-text text-lighten-3 slide-text">
							Projectando um Futuro Melhor e saudavel
						</h3>
						<h5 class="light grey-text text-lighten-3 slide-text">
							Para Ti e a Sua Familia
						</h5>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SlideShow;
