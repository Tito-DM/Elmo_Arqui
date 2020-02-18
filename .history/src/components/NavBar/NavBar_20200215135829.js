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
						<Link to='/' className="brand-logo logo-direction">
						<img src={Logo} className="logo-img" alt="logo" />
						</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/" className="amber darken-2">
								Home
							</Link>
						</li>
						<li>
							<Link to=".html">Seu Projecto</a>
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
