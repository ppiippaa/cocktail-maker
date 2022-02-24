import styled from "styled-components";
import {themes} from "./Themes";

export const StyledNav = styled.nav`
  width: 100vw;
  background-color: black;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    // color: ${themes.colorCodes.electricBlue};
  }
  
  li {
    display: block;
    color: ${themes.colorCodes.electricBlue};
  }
  
   
  
  ul li:first-child {
    order: 2;
    flex-basis: auto;
    margin: 0 auto;
    color: ${themes.colorCodes.red};
    font-size: 1.2rem;
    
  }
  
  ul li:nth-child(2),
  ul li:nth-child(3) {
    order: 1;
    padding: 1rem;
  }

  ul li:nth-child(4),
  ul li:nth-child(5),
  ul li:nth-child(6) {
    order: 3;
    padding: 1rem;
  }
  
  .link,
  a {
    text-decoration: none;
    color: ${themes.colorCodes.electricBlue}
  }
  
  .navLink:hover,
  .socialIcon:hover {
      color: ${themes.colorCodes.red}
  }

  li:hover {
    color: ${themes.colorCodes.red};

  }
  
`
