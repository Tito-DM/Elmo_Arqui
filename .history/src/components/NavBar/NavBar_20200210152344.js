import React, { Component } from "react";
import "materialize-css";;
import './NavBar.scss';
import Logo from '../../asset/img/logo.jpg';

const NavBar = () => {
	return (
		<nav>
			<div className="nav-wrapper cyan darken-3">
				<a href="#" className="brand-logo logo-direction ">
					<img src={Logo} className='logo-img' alt='logo'/>
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="sass.html" className='amber darken-2'>Home</a>
					</li>
					<li>
						<a href="badges.html">Projectos</a>
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
	);
};

export default NavBar;
