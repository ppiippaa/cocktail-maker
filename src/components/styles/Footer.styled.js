import styled from "styled-components";
import {themes} from "./Themes";

export const FooterStyled = styled.footer `
  color: ${themes.colorCodes.lightPurple};
  font-family: ${themes.fontFamilies.generalFont};
  width: 100vw;
  min-height: 50px;
  margin: 30px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  h5 {
    font-size: 1rem;
  }
  
`