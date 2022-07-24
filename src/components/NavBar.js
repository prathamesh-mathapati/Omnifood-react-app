import React from "react";
import './All.css'

const NavBar=()=>{

    return(
        <header className="header">
          <img
            className="logo"
            alt="Omnifood logo"
            src="./img/omnifood-logo.png"
            />
          
          
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li><a className="main-nav-link" href="#how">How it works</a></li>
              <li><a className="main-nav-link" href="#meals">Meals</a></li>
            <li><a className="main-nav-link" href="#testimonial">Testiomonias</a></li>
            <li><a className="main-nav-link" href="#pricing">Princing</a></li>
            <li><a className="main-nav-link nav-cta" href="#cta">Try for free</a></li>
          </ul>
        </nav>
        
        <button className="btn-mobile-nav">
          <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
  
    )
}

export default NavBar