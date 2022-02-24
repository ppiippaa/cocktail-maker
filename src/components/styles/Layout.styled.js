import styled from 'styled-components';
import {themes} from "./Themes";

export const StyledLayout = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Charmonman&family=Montserrat&display=swap');
  
  background-color: ${themes.colorCodes.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  font-family: ${themes.fontFamilies.generalFont} ;
  
`