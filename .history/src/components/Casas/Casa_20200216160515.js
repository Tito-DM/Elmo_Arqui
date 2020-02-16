import React, { Fragment,useState } from "react";
import NavBar from "../NavBar/NavBar";
import FlootB from "../FloatButtom/FloatButtom";
import "./Casa.scss";
import Img3 from "../../asset/img/Gallery/img3.jpg";
const Casa = () => {
    const [cards] = useState([{
        title:'Card Title',
        img: Img
    }])

    
	return (
		<Fragment>
			<NavBar />
			<div className="container">
				<div className="casa-text">
                <h6 className='text-slide cyan-text'>Arquictura: Casas</h6>
					<p>
						I here by assume total responsibility for the expenses of school,
						house and food of my brother, name Jose Nzola Meso Pedro Nimi date
						of birth 20/10/1993 passport number N2429367 issued at 17 of january
						2019 expiry at 17 january 2024. I here by assume total
						responsibility for the expenses of school, house and food of my
						brother, name Jose Nzola Meso Pedro Nimi date of birth 20/10/1993
						passport number N2429367 issued at 17 of january 2019 expiry at 17
						january 2024.
					</p>
				</div>
                <h6 className='text-slide cyan-text'>Projectos a Venda</h6>
				<div class="row">
					<div class="col s4">
						<div class="row">
							<div class="col s12 m7">
								<div class="card  size">
									<div class="card-image">
										<img src={Img3} />
										<span class="card-title">Card Title</span>
									</div>
									<div class="card-content">
										<p>
											I am a very simple card. I am good at containing small
											bits of information. I am convenient because I require
											little markup to use effectively.
										</p>
									</div>
									<div class="card-action">
										<a href="#">This is a link</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col s4">
						<div class="row">
							<div class="col s12 m7">
								<div class="card size">
									<div class="card-image">
										<img src={Img3} />
										<span class="card-title">Card Title</span>
									</div>
									<div class="card-content">
										<p>
											I am a very simple card. I am good at containing small
											bits of information. I am convenient because I require
											little markup to use effectively.
										</p>
									</div>
									<div class="card-action">
										<a href="#">This is a link</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col s4">
						<div class="row">
							<div class="col s12 m7">
								<div class="card size">
									<div class="card-image">
										<img src={Img3} />
										<span class="card-title">Card Title</span>
									</div>
									<div class="card-content">
										<p>
											I am a very simple card. I am good at containing small
											bits of information. I am convenient because I require
											little markup to use effectively.
										</p>
									</div>
									<div class="card-action">
										<a href="#">This is a link</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
                <h6 className='text-slide cyan-text'>Projectos Realizados</h6>
			</div>
			<FlootB />
		</Fragment>
	);
};

export default Casa;
