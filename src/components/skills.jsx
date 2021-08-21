import React from "react";
import skillc from "../img/nc++.svg";
import skillr from "../img/nreact.svg";
import noder from "../img/nnodejs.svg";
import home2 from "../img/home2.png";
import ml from "../img/machine-learning.png"
import { Description,About,Image } from "../style";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./use_scroll";

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <Skill
    variants={scrollReveal}
    animate={controls}
    initial="hidden"
    ref={element}
    >
      <Description>
        <h2>
          Technical <span> Skills</span>
        </h2>
      <Cards>
        <Card>
          <div className="icon">
            <img src={skillc} alt="c++" />
            <h3> c/c++ </h3>
          </div>
          <p> Intermediate Level knowldedge of coding in c/c++</p>
        </Card>
        <Card>
          <div className="icon">
            <img src={skillr} alt="c++" />
            <h3>ReactJs+ </h3>
          </div>
          <p>
            Have ample knowledge/experience of designing web pages using ReactJs
            Framework
          </p>
        </Card>
        <Card>
          <div className="icon">
            <img src={noder} alt="c++" />
            <h3>NodeJs</h3>
          </div>
          <p>Familiar with javaScript backend framework NodeJs</p>
        </Card>
        <Card>
          <div className="icon">
            <img src={ml} alt="ml" />
            <h3>Machine Learning</h3>
          </div>
          <p>Familiar with Machine learning modules such as pandas numpy matlplotlib seaborn</p>
        </Card>
      </Cards>
      </Description>
      <Images>
        <img src={home2} alt="yoyo" />
      </Images>
    </Skill>
  );
};
const Skill=styled(About)`
  p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
  }
  h2{
    padding-bottom: 5rem;
  }
`;
const Images=styled(Image)`
flex:.3;
  img{
    float:right;
  }
`
const Cards=styled.div`
display:flex;
flex-wrap:wrap;
@media (max-width: 1100px) {
    justify-content: center;}
`
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default Skills;
