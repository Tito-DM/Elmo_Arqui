import React, { Fragment, useState } from "react";
import NavBar from "../NavBar/NavBar";
import FlootB from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import "./Casa.scss";
import ImageGallery from "../ImageGallery/ImageGallery";
import Img3 from "../../asset/img/Gallery/img3.jpg";
import SlideShow from "../SlideShow/SlideShow";
const Casa = () => {
	const [cards] = useState([
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},

		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},

		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		}
	]);

	return (
		<Fragment>
			<div className="backg">
				<NavBar />
                
				<div className="container">
					<h6 className="text-slide cyan-text">Projectos a Venda</h6>
					{cards.map((card) => (
						<div class="col s12 m7">
							<div class="card horizontal">
								<div class="card-image">
									<img src={card.img} />
								</div>
								<div class="card-stacked">
									<div class="card-content">
										<span class="card-title activator grey-text text-darken-4">
											{card.title}
										</span>
                                        Tipologia: T3<br/>
                                        Modelo:

									</div>
									<div class="card-action">
										<a href="#">This is a link</a>
									</div>
								</div>
							</div>
						</div>
					))}

					<h6 className="text-slide cyan-text">Projectos Realizados</h6>
					<ImageGallery />
				</div>

				<FlootB />
				<Footer />
			</div>
		</Fragment>
	);
};

export default Casa;
