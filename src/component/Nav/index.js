import React, { useEffect, useState } from 'react';
import "./index.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180){
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, [])
  
  return (
    <div className={`nav ${show && "nav__scroll"}`}>
      <div className="nav__container">

        <Link to="/" className="nav_link">
          <div className="nav__logo__container">
            <img
              className="nav__logo"
              src={Logo}
              alt="logo"
            />
            <div className="nav__option">
              <span className="nav__optionLogo">HOME</span>
            </div>
          </div>
        </Link>

        <div className="nav__section">
          <div className="nav__option">
            <span className={`nav__optionLine ${show && "nav__optionLine__scroll"}`}>ABOUT</span>
          </div>
          <div className="nav__option">
            <span className={`nav__optionLine ${show && "nav__optionLine__scroll"}`}>PRICING</span>
          </div>
          <div className="nav__option">
            <span className={`nav__optionLine ${show && "nav__optionLine__scroll"}`}>CONTACT</span>
          </div>
          <Link to="/login" className="nav_link">
            <div className="nav__option">
              <button className={`nav__button ${show && "nav__button__scroll"}`}>
                LOGIN
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav