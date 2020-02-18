import React,{Fragment} from "react";
import slideImg1 from "../../asset/img/slideImg.jpg";
const HomeCard = () => {
	return (
		<Fragment className="home-cards">
			<div>
				<img src={slideImg1} className="card" />
				<h3 className>New surface</h3>
				<p>kdkdpodpkdpapadaapdapjdjdjdap</p>
                <a href="#">Learn More <i className=" fas fa-chevro-right"></i></a>
			</div>
		
		</Fragment>
	);
};

export default HomeCard;