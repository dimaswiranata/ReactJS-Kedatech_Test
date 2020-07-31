import React, { useEffect, useState } from 'react';
import "./index.css";
import { Link } from "react-router-dom";
import { Link as Links, animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/logo/logo.png";

function Nav() {
  const [show, handleShow] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180){
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  
  return (
    <div className={`nav ${show && "nav__scroll"}`}>
      <div className="nav__container">

        <Link to="/" className="nav_link">
          <div className="nav__logo__container">
            <img
              className="nav__logo"
              src={Logo}
              alt="logo"
              onClick={scrollToTop}
            />
            <div className="nav__option">
              <span 
                className={
                  windowSize.width < 900 ? 
                    `${show ? 
                      "nav__optionLogo" 
                      : 
                      "nav__optionLogo__black"
                    }` 
                    : 
                    "nav__optionLogo"
                }
              >
                HOME
              </span>
            </div>
          </div>
        </Link>

        <div className="nav__section">
          <Links
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav__option">
              <span className={`nav__optionLine ${show && "nav__optionLine__scroll"}`}>ABOUT</span>
            </div>
          </Links>
          <Links
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav__option">
              <span className={`nav__optionLine ${show && "nav__optionLine__scroll"}`}>PRICING</span>
            </div>
          </Links>
          <Links
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav__option">
              <span className={`nav__optionLine ${show && "nav__optionLine__scroll"}`}>CONTACT</span>
            </div>
          </Links>
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