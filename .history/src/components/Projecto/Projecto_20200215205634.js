import React, { Component, Fragment } from "react";
import NavBar from "../NavBar/NavBar";

class Projecto extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<NavBar />
				<div class="container">
					<form class="col s12" id="form_projecto">
					
						<div class="row">
							<div class="input-field col s6">
								<i class="material-icons prefix">account_circle</i>
								<input id="Primeiro_Name" type="text" class="validate" />
								<label for="Primeiro_Name">Primeiro Name</label>
							</div>
							<div class="input-field col s6">
								<i class="material-icons prefix">account_circle</i>
								<input id="Sobrenome" type="text" class="validate" />
								<label for="Sobrenome">Sobrenome</label>
							</div>
						</div>

						<div class="row">
							<div class="input-field col s12">
								<i class="material-icons prefix">email</i>
								<input id="Email" type="email" class="validate" />
								<label for="password">Email</label>
							</div>
						</div>

						<div class="row">
							<div class="row">
								<div class="input-field col s6">
									<i class="material-icons prefix">mode_edit</i>
									<textarea
										id="detalhe"
										class="materialize-textarea"
									></textarea>
									<label for="icon_prefix2">Descrevenos o seu Projecto</label>
								</div>
							</div>
							<button
								class="btn waves-effect waves-light cyan darken-3"
								type="submit"
								name="action"
							>
								Enviar
								<i class="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default Projecto;
