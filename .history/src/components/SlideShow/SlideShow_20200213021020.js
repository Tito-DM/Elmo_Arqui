import React, { Component, useEffect, useState, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./SlideShow.scss";
import slideImg1 from "../../asset/img/slideImg.jpg";

const SlideShow = () => {
	useEffect(() => {
		const slides = document.querySelectorAll(".slide");
		const next = document.querySelector("#next");
		const prev = document.querySelector("#prev");
		const auto = true;
		const interval = 4000;

		const nextSlide = () => {
			const current = document.querySelector(".current");
			current.classList.remove("current");
			if (current.nextElementSibling) {
				current.nextElementSibling.classList.add("current");
			} else {
				slides[0].classList.add("current");
			}
			setTimeout(() => current.classList.remove("current"));
		};

		const prevSlide = () => {
			const current = document.querySelector(".current");
			current.classList.remove("current");
			if (current.previousElementSibling) {
				current.previousElementSibling.classList.add("current");
			} else {
				slides[slides.length - 1].classList.add("current");
			}
			setTimeout(() => current.classList.remove("current"));
		};

		next.addEventListener("click", (e) => {
			nextSlide();
		});

		prev.addEventListener("click", (e) => {
			prevSlide();
		});

		if (auto) {
			setInterval(nextSlide, interval);
		}
	}, []);

	const [SlideShow] = useState(
		{
			title: "Projectando um Futuro Melhor e saudavel",
			subTitle: "Para Ti e a Sua Familia"
		},
		{
			title: "Projectos Residências",
			subTitle: "	Segurança & Bem-Estar"
		},
		{
			title: "Design Interno",
			subTitle: "Para Ti e a Sua Familia"
		},
		{
			title: "Projectos Comerciais",
			subTitle: "Lazer & Bem-Estar"
		}
	);

	return (
		<Fragment>
			<div className="slider   ">
        {SlideShow.map(=>())}
				<div className="slide current  ">
					<div className="content1">
						<h3 className="light grey-text text-lighten-3 slide-text">
							Projectando um Futuro Melhor e saudavel
						</h3>
						<h5 className="light grey-text text-lighten-3 slide-text">
							Para Ti e a Sua Familia
						</h5>
					</div>
				</div>
			</div>

			<div className="button">
				<button id="prev">
					<i className="fas fa-arrow-left"></i>
				</button>

				<button id="next">
					<i className="fas fa-arrow-right"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default SlideShow;
