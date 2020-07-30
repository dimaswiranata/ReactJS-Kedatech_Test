import React from 'react';
import "./index.css";
import Nav from "../../component/Nav";
import Banner from "../../component/Banner";
import Pricing from "../../component/Pricing";
import Grid from '@material-ui/core/Grid';

function index() {
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
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Pricing level="Basic"/>
          </Grid>
          <Grid item xs={4}>
            <Pricing level="Pro"/>
          </Grid>
          <Grid item xs={4}>
            <Pricing level="Premium"/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default index
