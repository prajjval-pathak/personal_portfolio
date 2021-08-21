import React from "react";
//Animations
 import { PageAnimation, TitleAnim } from "../animation";
import styled from "styled-components";
import { motion } from "framer-motion";


const ContactUs = () => {
  return (
    <ContactStyle  
    exit="exit"
    variants={PageAnimation}
    initial="hidden"
    animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={TitleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <a variants={TitleAnim} href="mailto:prajjvalpathak@gmail.com"> Send me an e-mail </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <a
              href="https://wa.me/
            18827849718"
            >
              {" "}
              Send me a whatsapp message{" "}
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={TitleAnim}>
            <Circle />
            <a href="https://www.linkedin.com/in/prajjval-pathak-292658190">
              {" "}
              Linkdin{" "}
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};


const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #fdfdfd;
  min-height: 80vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #faf8f8;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #6e6d6d;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  a {
    color: #e2e2e2;
    text-decoration: none;
    font-weight: lighter;
    font-size: 3rem;
    margin: 2rem;
  }
`;

export default ContactUs;
