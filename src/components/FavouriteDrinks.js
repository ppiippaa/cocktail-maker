import React from 'react';
import DisplayCocktail from "./DisplayCocktail";
import {getFromLocalStorage} from "../utils/helpers/localStorage";
import {StyledCocktailGrid} from "./styles/CocktailGrid.styled";

// read from faves context
const FavouriteDrinks = () => {

    const localStorageFavourites = getFromLocalStorage() || []
    console.log(localStorageFavourites)


        return (
            <>
                <StyledCocktailGrid>
                {
                    localStorageFavourites.map(drink => <DisplayCocktail drink={drink} key={drink.id}/>)
                }
                </StyledCocktailGrid>

            </>
        )
};

export default FavouriteDrinks;