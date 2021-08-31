import React from "react";
import port from "../img/port.png";
// import styled from 'styled-components'
import { Description,About,Hide,Image } from "../style";
import { TitleAnim, PhotoAnim, Fade } from "../animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Wave from "./wave";
const AboutMe=()=> {
  return (
    <About>
      <Description>
        <motion.div className="title" >
          <div className="hide">
            <motion.h2 variants={TitleAnim}>Prajjval Pathak</motion.h2>
          </div>
          <Hide>
            <motion.h3 variants={TitleAnim}>
              (Tech <span>Enthusiast)</span>
            </motion.h3>
          </Hide>
        </motion.div>
        <motion.p variants={Fade}>
         A fourth year computer-science student of Shri Vaishnav Instiute of technology
         aspiring to be member of a well reputed organization where
         I can learn new technologies and methodologies and innovate the new things which can improve the existing technology
        </motion.p>
        <Link to="/contactme">
        <motion.button variants={Fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image variants={PhotoAnim} >
          <motion.img src={port} alt="yoyo" />
        </Image>
        <Wave />
    </About>
  );
};

export default AboutMe;
