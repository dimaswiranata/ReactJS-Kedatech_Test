import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import "./index.css"
import about from '../../assets/image/about.png';

function About({id}) {

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
    <div className="About" id={id}>
      <Grid 
        container 
        spacing={3} 
        direction={windowSize.width < 900 && "column"}
        justify="center"
        >
        <Grid item xs={windowSize.width < 800 ? 6 : 7}>
          <div className="About__Subs">
            <div className="About__Gap"/>
            <div className="About__Desc">
              <text className="About__Desc__Title">About Us</text>
              <text className="About__Desc__Subs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis libero finibus, venenatis purus in, lobortis quam. Integer libero augue, aliquet at congue vel, vulputate non ante. Nulla ut libero elit. Sed elementum, est ut viverra sodales, leo felis interdum quam.</text>
              <text className="About__Desc__SubTwo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis libero finibus, venenatis purus in, lobortis quam. Integer libero augue, aliquet at congue vel, vulputate non ante. </text>
              <div>
                <button className="About__Button__One">READ MORE</button>
                <button className="About__Button__Two">OUR SERVICES</button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={windowSize.width < 800 ? 6 : 5}>
          <img
            className="About__Image"
            src={about}
            alt="about"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
