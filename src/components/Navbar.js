import React from "react";
import logo from "../logo.png";
//font react aweseome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Navlink} from "react-router-dom"
import { waitForElementToBeRemoved } from "@testing-library/dom";
const Navbars = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">



  <a className="navbar-brand" href="#"><img className="logo"src={logo} alt="logo..."></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/portfolio">Porfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact Me</a>
      </li>

      
    </ul>
   
  </div>
 

  </div>
</nav>

    )
}

<footer className="footer">
<p>
  @2021 MIT
</p>
</footer>



export default Navbars
