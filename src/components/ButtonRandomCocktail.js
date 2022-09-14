import React from 'react';
import {StyledButtonRandomCocktail} from "./styles/ButtonRandomCocktail.styled";

const ButtonRandomCocktail = ({randomCocktail}) => {
    return (
        <StyledButtonRandomCocktail>
            <button onClick={randomCocktail}>random cocktail</button>
        </StyledButtonRandomCocktail>
    );
}

export default ButtonRandomCocktail;