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
      
  // nav {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-items: center;
  //   height: 5.5rem;
  //   width: 100vw;
  //   background-color: ${themes.colorCodes.dark};
  // }
  //
  //
  // nav h1 {
  //   margin: 20px;
  //   font-family: ${themes.fontFamilies.accentFont};
  //   font-size: 2.5rem;
  //   letter-spacing: 3px;
  // }
  //
  // .socialIcon {
  //   margin: 0 20px;
  //   cursor: pointer;
  // }
  //
  // .socialIcon:hover {
  //   color: ${themes.colorCodes.lightPurple}
  // }
  //
  // footer {
  //   height: 3rem;
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-evenly;
  //   align-items: center;
  //   width: 100vw;
  //   background-color: ${themes.colorCodes.dark};
  // }
`