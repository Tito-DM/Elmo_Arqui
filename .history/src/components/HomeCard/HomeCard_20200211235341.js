import React,{Fragment,useState} from "react";
import "./HomeCard.scss"
const HomeCard = ({img, title,  description}) => {

	return (
		<Fragment className="home-cards">
			<div>
				<img src={img} className="card" />
				<h3 className="text">New surface</h3>
				<p>kdkdpodpkdpapadaapdapjdjdjdap</p>
                <a href="#">Learn More <i className=" fas fa-chevro-right"></i></a>
			</div>
		
		</Fragment>
	);
};

export default HomeCard;