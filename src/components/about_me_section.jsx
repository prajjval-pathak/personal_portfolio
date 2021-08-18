import React from "react";
import home1 from "../img/home1.png";
// import styled from 'styled-components'
import { Description,About,Hide,Image } from "../style";
const AboutMe=()=> {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>Prajjval Pathak</h2>
          </div>
          <Hide>
            <h3>
              (Tech <span>Enthusiast)</span>
            </h3>
          </Hide>
        </div>
        <p>
          Aspiring to be a core tem member of a well reputed organization where
          I can learn new technologies and methodologies and innovate the new
          things which can improve the existing technology
        </p>
        <button>Contact Me</button>
      </Description>
      <Image>
          <img src={home1} alt="yoyo" />
        </Image>
    </About>
  );
};

export default AboutMe;
