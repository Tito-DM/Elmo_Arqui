import React,{Component} from 'react';
import "materialize-css/dist/css/materialize.min.css";

const NavBar = ()=>{
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo left">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Projectos</a></li>
            <li><a href="collapsible.html">Seu Projecto</a></li>
            <li><a href="collapsible.html"></a></li>
          </ul>
        </div>
      </nav>
        
    )
}

export default NavBar;