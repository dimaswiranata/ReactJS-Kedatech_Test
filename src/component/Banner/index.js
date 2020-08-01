import React, { useState, useEffect } from 'react';
import './index.css';

function Banner() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

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
  
  return (
    <header
      className="banner"
      style={{
        backgroundSize: `cover`,
        backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/dummy-data-6e893.appspot.com/o/banner3.png?alt=media&token=281e440f-883d-40e8-88fd-4b19376eaf8a")`,
        backgroundPosition: `${windowSize.width < 1000 ? "left center" : 'center center'}`, 
      }}
    >
      <div className="banner__section">
        <text className="banner__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis libero finibus, venenatis purus in, lobortis quam.</text>
        <text className="banner__text">Integer libero augue, aliquet at congue vel, vulputate non ante.</text>
      </div>
      <div className="banner__section__two">
        <text className="banner__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</text>
      </div>
    </header>
  )
}

export default Banner
