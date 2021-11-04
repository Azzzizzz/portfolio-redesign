import React from "react";
import home1 from "../img/hero-img.png";

export default function HeroSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Hello,</h2>
          </div>
          <div className="hide">
            <h1>I'm Syed</h1>
          </div>
          <div className="hide">
            <h1>Abdul Aziz</h1>
          </div>
          <div className="hide">
            <h2>I build things for the web.</h2>
          </div>
          <button>About Me</button>
        </div>
      </div>
      <div className="image">
        <img src={home1} alt=" My Image" />
      </div>
    </div>
  );
}
