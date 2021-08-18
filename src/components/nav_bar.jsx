import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
const NavBar=()=>{
  return(
    <StyledNav>
      <h1><Link to="/" id="logo">Capture
      </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Me</Link>

        </li>
        <li>
          <Link to="/contactme">2. Contact Me
          </Link>
        </li>
      </ul>

    </StyledNav>
  );
}
const StyledNav=styled.nav`
min-min-height:10 vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 10rem; 
background:#282828;
position:sticky;
top:0;
z-index: 1;
opacity: .7;
a{
  color: white;
  text-decoration: none;
}
ul{
  display:flex;
  list-style: none;
}
#logo{
   font-size: 1.5rem;
   font-weight: lighter;
   font-family: "lobster";
}
li{
  padding-left: 3rem;
}`

export default NavBar;
