import React, { Fragment } from "react";
import "./HomeCard.scss";
const HomeCard2 = ({ img, title, description }) => {
	return (
		<Fragment>
			<div>
				<img src={img} className="card" />
				<h3 className="text">{title}</h3>
				<p>{description}</p>
				<a href="#">
					Learn More<i className=" material-icons">chevron_right</i>
				</a>
			</div>
		</Fragment>
	);
};

export default HomeCard2;