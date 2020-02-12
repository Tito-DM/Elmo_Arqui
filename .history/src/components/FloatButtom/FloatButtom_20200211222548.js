import React from "react";

import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class FloatingButtom extends React.Component {
	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.fixed-action-btn');
			var instances = M.FloatingActionButton.init(elems);
		  });
    }
	render(){
		return (
			<div className="fixed-action-btn ">
				<a className="btn-floating btn-large red pulse">
					<i className="large material-icons">mode_edit</i>
				</a>
				<ul>
					<li>
						<a className="btn-floating green">
							<i className="material-icons">location_on</i>
						</a>
					</li>
					<li>
						<a className="btn-floating red">
							<i className="fab fa-youtube"></i>
						</a>
					</li>
					<li>
						<a className="btn-floating blue">
							<i className="fab fa-facebook-f"></i>
						</a>
					</li>
				</ul>
			</div>
		);
	}

}

export default FloatButtom;
