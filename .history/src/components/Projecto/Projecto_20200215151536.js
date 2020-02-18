import React, { Component, Fragment } from "react";
import NavBar from "../NavBar/NavBar";

class Projecto extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<NavBar />
				<form class="col s12" id="form_projecto">
					<div class="row">
						<div class="input-field col s6">
							<i class="material-icons prefix">account_circle</i>
							<input id="Primeiro_Name" type="text" class="validate" />
							<label for="Primeiro_Name">Primeiro Name</label>
						</div>
					</div>
				</form>
			</Fragment>
		);
	}
}

export default Projecto;
