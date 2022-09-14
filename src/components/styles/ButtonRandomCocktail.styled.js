import styled from 'styled-components';
import {themes} from "./Themes";


export const StyledButtonRandomCocktail = styled.div`
    button {
      border-radius: 10px;
      font-family: ${themes.fontFamilies.generalFont}, sans-serif;
      background-color: ${themes.colorCodes.electricBlue};
      margin-top: 15px;
      padding: 8px 10px 8px 10px;
      text-transform: uppercase;
      max-width: 90%;
      font-weight: bold;
    }

    button:hover {
      cursor: pointer;
    }
`