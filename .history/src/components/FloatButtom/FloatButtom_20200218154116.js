import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

const FloatButtom = () => {
	useEffect(() => {
		var elems = document.querySelectorAll(".fixed-action-btn");
		M.FloatingActionButton.init(elems);
	}, []);

	return (
		<div className="fixed-action-btn ">
			<Link className="btn-floating btn-large red pulse" >
				<i className="large material-icons">mode_edit</i>
			</a>
			<ul>
				<li>
					<Link className="btn-floating green">
						<i className="material-icons">location_on</i>
					</Link>
				</li>
				<li>
					<Link className="btn-floating red">
						<i className="fab fa-youtube"></i>
					</Link>
				</li>
				<li>
					<Link className="btn-floating blue">
						<i className="fab fa-facebook-f"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default FloatButtom;
