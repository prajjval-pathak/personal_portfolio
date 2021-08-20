import React from "react";
import AboutMe from "../components/about_me_section";
import Skills from "../components/skills";
import { motion } from "framer-motion";
 import { PageAnimation } from "../animation";

const AboutMePage = () => {
  return (
    <motion.div variants={PageAnimation} exit="exit" initial="hidden" animate="show">
  <AboutMe/>
  <Skills/>
 </motion.div>
  );}
export default AboutMePage;
