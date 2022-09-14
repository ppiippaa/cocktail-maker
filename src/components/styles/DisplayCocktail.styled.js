import styled from 'styled-components';
import { themes} from "./Themes";

export const StyledDisplayCocktail = styled.div`
  border-radius: 25px;
  color: white;
  border-left: 1px solid #6E35A9;
  border-top: 1px solid #6E35A9;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: ${themes.fontFamilies.generalFont};
  
  .drink-img {
    border-radius: 10px;
  }
  
  ul {
    list-style-type: square;
  }
  
  ul li {
    padding: .5rem;
  }


`