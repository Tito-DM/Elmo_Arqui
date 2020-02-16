import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./NavBar.scss";
import Logo from "../../asset/img/logo.jpg";
import {Link } from "react-router-dom";
const NavBar = () => {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper cyan darken-3 ">
					<a href="#" className="brand-logo logo-direction ">
						<Link to='/' className="brand-logo logo-direction>
						<img src={Logo} className="logo-img" alt="logo" />
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<a href="sass.html" className="amber darken-2">
								Home
							</a>
						</li>
						<li>
							<a href="collapsible.html">Seu Projecto</a>
						</li>
						<li>
							<a href="collapsible.html">Sobre Nos</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
