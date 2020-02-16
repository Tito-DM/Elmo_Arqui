import React, { Component, Fragment, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import M from "materialize-css/dist/js/materialize.min.js";

const Projecto = () => {
	const val =0;

	useEffect(() => {
		M.AutoInit();
	}, []);
	const selectValue = (e) => {
		val = e.target.value;
	};

	return (
		<Fragment>
			<NavBar />
			<div class="container">
				<form class="col s12" id="form_projecto">
					<div class="row">
						<div className="row">
							<div class="input-field col s12">
								<select onChange={selectValue}>
									<option value="" disabled selected>
										Escolhe o seu Projecto
									</option>
									<option value="1">Casa</option>
									<option value="2">Condomino</option>
									<option value="3">Escritorio</option>
								</select>
								<label>Seu Projecto</label>
							</div>
						</div>
						{
							(val = "1" ? (
								<div class="row">
									<div class="input-field col s6">
										<input
											value="Alvin"
											id="first_name2"
											type="text"
											class="validate"
										/>
										<label class="active" for="first_name2">
											First Name
										</label>
									</div>
								</div>
							) : (
								""
							))
						}
						}
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default Projecto;
