import React from "react";
import home1 from "../img/hero-img.png";
import styled from "styled-components";

export default function HeroSection() {
  return (
    <Hero>
      <Description>
        <div className="title font-face-gm">
          <Hide>
            <h2>Hello,</h2>
          </Hide>
          <Hide>
            <h1>I'm Syed</h1>
          </Hide>
          <Hide>
            <h1>Abdul Aziz.</h1>
          </Hide>
          <Hide>
            <h2 className="gray">I build things for the web.</h2>
          </Hide>
          <button>About Me</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt=" My Image" />
      </Image>
    </Hero>
  );
}

// Styled components
const Hero = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
  background: #051019;
`;

const Description = styled.div`
  flex: 3;
  padding-right: 5rem;
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  button {
    margin-top: 2rem;
  }
`;

const Image = styled.div`
  flex: 2;
  overflow: hidden;
  img {
    height: 80vh;
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
