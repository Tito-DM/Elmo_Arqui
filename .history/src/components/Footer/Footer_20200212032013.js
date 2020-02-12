import React, { Fragment } from "react";
import './Footer.scss'
const Footer = () => {
	return (
		<Fragment>
			<footer className="page-footer cyan darken-3">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text">Contactos</h5>
                             <i className=" material-icons icon">email</i><p>Nelsontito@gmail.com</p>
                             <i className=" material-icons icon">local_phone</i>
							<p className="grey-text text-lighten-4">
								You can use rows and columns here to organize your footer
								content.
							</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<h5 className="white-text">Menu</h5>
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
					<div className="container">
						© 2014 Copyright Text
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
