import React, { Component, Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import M from "materialize-css/dist/js/materialize.min.js";

class Projecto extends Component {
	componentDidMount(){
		M.AutoInit();
	}
	state = {};
	render() {
		return (
			<Fragment>
				<NavBar />
				<div class="container">
					<form class="col s12" id="form_projecto">
						<div class="row">
						<div className="row">
							<div class="input-field col s12">
								<select onChange>
									<option value="" disabled selected>
										Escolhe o seu Projecto
									</option>
									<option value="1" >Casa</option>
									<option value="2">Condomino</option>
									<option value="3">Escritorio</option>
								</select>
								<label>Teu Projecto</label>
							</div>
						</div>
						</div>
					</form>

					{option.value = '1' ? console.log('ncnc') : console.log("no value")}
				</div>
			</Fragment>
		);
	}
}

export default Projecto;
