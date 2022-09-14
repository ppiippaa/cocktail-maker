import styled from 'styled-components';
import {themes} from "./Themes";

export const StyledSearchForm = styled.div`
  color: var(--lightGrey);
  margin-bottom: 10px;

  h4 {
    font-weight: bold;
    letter-spacing: .1rem;
  }
  
  input {
    border-radius: 10px;
    height: 1.8rem;
    width: 200px;
    font-size: 16px;
    padding: 8px;
    background: rgb(236,237,241);
    background: linear-gradient(159deg, rgba(236,237,241,1) 0%, rgba(173,172,176,1) 99%);
  }
  
  button {
    margin-top: 10px;
    font-family: ${themes.fontFamilies.generalFont};
    border-radius: 10px;
    padding: 5px 10px;
    background-color: ${themes.colorCodes.lightPurple};
    font-size: 14px;
  }
  

`