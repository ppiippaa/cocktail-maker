import React, {useContext} from 'react';
import DisplayCocktail from "./DisplayCocktail";
import {DrinksContext} from "../state/DrinksContext";
import {Link} from "react-router-dom";
import {FavouriteDrinksContext} from "../state/FavouriteDrinksContext";
import {getFromLocalStorage} from "../utils/helpers/localStorage";

// read from faves context
const FavouriteDrinks = () => {
    const {favourites, setFavourites} = useContext(FavouriteDrinksContext)
    const localStorageFavourites = getFromLocalStorage() || []
    console.log(localStorageFavourites)


        return (
            <>
                <Link to='/'>Back to Search</Link>
               <h2>Favourite Cocktails</h2>
                {
                    localStorageFavourites.map(drink => <DisplayCocktail drink={drink} key={drink.id}/>)
                }

            </>
        )
};

export default FavouriteDrinks;