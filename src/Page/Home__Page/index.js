import React, { useState, useEffect } from 'react';
import "./index.css";
import Nav from "../../component/Nav";
import Banner from "../../component/Banner";
import Product from "../../component/Product";
import Grid from '@material-ui/core/Grid';
import Contact from "../../component/Contact";

function Home() {
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
    <div className="Home">
      <Nav/>
      <Banner/>
      <div className="Home__Pricing">
        <div className="Home__Pricing__Section">
          <h1 className="Home__Pricing__Title">PRICING</h1>
        </div>
      </div>
      <div className="Home__PriceProduct__Grid">
        <Grid 
          container 
          spacing={3} 
          direction={windowSize.width < 700 && "column"}
          justify="center"
          // alignItems="stretch"
        >
          <Grid item xs={windowSize.width < 800 ? 12 : 4}>
            <Product type='start'/>
          </Grid>
          <Grid item xs={windowSize.width < 800 ? 12 : 4}>
            <Product type='premium'/>
          </Grid>
          <Grid item xs={windowSize.width < 800 ? 12 : 4}>
            <Product type='advanced'/>
          </Grid>
        </Grid>
      </div>
      <div className="Home__Contact__Grid">
        <Grid 
          container 
          spacing={3} 
          direction={windowSize.width < 700 && "column"}
          justify="center"
          // alignItems="stretch"
        >
          <Grid item xs={windowSize.width < 800 ? 12 : 4}>
            <Contact type='reachus'/>
          </Grid>
          <Grid item xs={windowSize.width < 800 ? 12 : 4}>
            <Contact type='general'/>
          </Grid>
          <Grid item xs={windowSize.width < 800 ? 12 : 4}>
            <Contact type='mailus'/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home
