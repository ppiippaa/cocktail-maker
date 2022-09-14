import styled from "styled-components";
import {themes} from "./Themes";

export const StyledNav = styled.nav`
  width: 100vw;
  margin-bottom: 20px;
  background-color: black;
  
  .border-gradient {
    background: rgb(29,64,220);
    background: linear-gradient(159deg, rgba(29,64,220,1) 0%, rgba(146,70,224,1) 99%);
    height: 10px;
    width: 10px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    color: ${themes.colorCodes.electricBlue};
  }
  
  li {
    display: block;
    letter-spacing: .1rem;
    align-self: flex-start;
  }
  
  
  ul li:first-child {
    order: 2;
    flex-basis: auto;
    margin: 0 auto;
    color: ${themes.colorCodes.lightPurple};
    font-size: 2rem;
    letter-spacing: .3rem;
    font-family: ${themes.fontFamilies.accentFont};
    max-height: 50px;
  }
  
  
  ul li:nth-child(2),
  ul li:nth-child(3) {
    order: 1;
    padding: 1.5rem;
  }

  ul li:nth-child(4),
  ul li:nth-child(5),
  ul li:nth-child(6) {
    order: 3;
    padding: 1.5rem;
  }
  
  ul li:nth-child(6) {
    margin-right: 1rem;
    padding-top: 1.8rem;
  }
  
  .link {
    text-decoration: none;
    color: ${themes.colorCodes.electricBlue}
  }
  
  .link:hover {
      color: ${themes.colorCodes.lightPurple}
  }
  
`
