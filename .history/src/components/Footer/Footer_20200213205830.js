import React, { Fragment } from "react";
import "./Footer.scss";
const Footer = () => {
	return (
		<Fragment>
			<footer className="page-footer cyan darken-3">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Contactos</h5>
							<div class="row">
								<div class="col s1"><i className=" material-icons icon">email</i></div>
								<div class="col s1">2</div>
							</div>
						
							<i className=" material-icons icon">local_phone</i>+2449234567
							<p className="grey-text text-lighten-4">
								Nao esite em contactar para saber mais......
							</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<ul>
								<li>
									<a className="grey-text text-lighten-3" href="#!">
										Home
									</a>
								</li>
								<li>
									<a className="grey-text text-lighten-3" href="#!">
										Seu Projecto
									</a>
								</li>
								<li>
									<a className="grey-text text-lighten-3" href="#!">
										Sobre nos
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">© 2014 Copyright Text</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
