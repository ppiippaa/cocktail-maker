import styled from "styled-components";
import {themes} from "./Themes";

export const FooterStyled = styled.footer `
  color: ${themes.colorCodes.electricBlue};
  
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  h5 {
    font-size: 1rem;
  }
  
`