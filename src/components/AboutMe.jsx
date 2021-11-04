import React from "react";
import aboutImg from "../img/about-img.png";

export default function AboutMe() {
  return (
    <div>
      <div className="about-me">
        <div className="page-type green-font">
          <h2>02 About Me</h2>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="My Image" />
        </div>
        <div className="hide">
          <h1>Full Stack Developer</h1>
        </div>
        <p>
          Hello! My name is Syed Abdul Aziz and I enjoy creating things that
          live on the internet. My interest in web development started back in
          2012 when I decided to try editing custom Tumblr themes — turns out
          hacking together a custom reblog button taught me a lot about HTML &
          CSS!
        </p>
        <div className="hide green-font">
          <h1>Skills</h1>
        </div>
        <ul>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
        </ul>
        <ul className="display-inline">
          <li>HTML/CSS</li>
          <li>HTML/CSS</li>
          <li>HTML/CSS</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </div>
  );
}
