import React,{Component} from 'react';
import "materialize-css/dist/css/materialize.min.css";

const NavBar = ()=>{
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo left">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">H</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
        
    )
}

export default NavBar;