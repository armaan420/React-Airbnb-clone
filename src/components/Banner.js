import { Button } from "@material-ui/core";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Go Near, Travel!</h1>
        <h5>Live Anywhere, plan and experience a unique getaway!</h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
