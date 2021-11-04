import React from "react";
import projectImg from "../img/project-img.png";

export default function Projects() {
  return (
    <div>
      <div className="projects">
        <div className="page-type green-font">
          <h1>02. Projects</h1>
        </div>
        <div className="project-img">
          <img src={projectImg} alt="" />
        </div>
        <div className="details">
          <div className="project-type green-font">
            <h2>Project Name</h2>
          </div>
          <div className="hide">
            <h3>Syed Abdul Aziz</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            officia adipisci dolore assumenda laborum excepturi libero eligendi
            fugit, maxime ut consectetur tempora repellendus. Non veritatis
            neque qui officia sint, voluptas temporibus odit enim iure quasi
            eius. Quam minima cum ex!
          </p>
        </div>
        <div className="project-img">
          <img src={projectImg} alt="" />
        </div>
        <div className="details">
          <div className="project-type green-font">
            <h2>Project Name</h2>
          </div>
          <div className="hide">
            <h3>Syed Abdul Aziz</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            officia adipisci dolore assumenda laborum excepturi libero eligendi
            fugit, maxime ut consectetur tempora repellendus. Non veritatis
            neque qui officia sint, voluptas temporibus odit enim iure quasi
            eius. Quam minima cum ex!
          </p>
        </div>
      </div>
    </div>
  );
}
