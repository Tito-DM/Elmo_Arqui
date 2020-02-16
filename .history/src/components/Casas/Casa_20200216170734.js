import React, { Fragment, useState } from "react";
import NavBar from "../NavBar/NavBar";
import FlootB from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import "./Casa.scss";
import ImageGallery from "../ImageGallery/ImageGallery";

import SlideShow from "../SlideShow/SlideShow";
const Casa = ({img,title,projecto}) => {
	
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
									<img src={img} />
								</div>
								<div class="card-stacked">
									<div class="card-content">
										<span class="card-title activator grey-text text-darken-4">
											{card.title}
										</span>
                                        Tipologia: T3<br/>
                                        Modelo:<br/>
                                        Garagem:

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
