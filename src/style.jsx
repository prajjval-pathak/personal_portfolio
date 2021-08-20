import styled  from "styled-components";
import { motion } from "framer-motion";
export const About=styled.div`
min-height:90vh;
align-items: center;
display: flex;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
@media (max-width: 1100px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description=styled.div`
flex:1;
padding-right:5rem;
h2{
  font-weight: lighter;
}
h3{
  font-weight:lighter;
}
@media (max-width: 1100px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`
export const Image=styled.div`
flex:1;
overflow: hidden;
img{
  width:100%;
  height:80vh;
  object-fit: cover;
}
`
export const Hide=styled(motion.div)`
overflow:hidden;
`
