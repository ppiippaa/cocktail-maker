import React, {createContext, useState} from 'react';
import {getFromLocalStorage} from "../utils/helpers/localStorage";


const FavouriteDrinksContext = createContext()

const FavouriteDrinksProviderWrapper = ({children}) => {
    const [favourites, setFavourites] = useState(getFromLocalStorage() || [])

    return <FavouriteDrinksContext.Provider value={{favourites, setFavourites}}>{children}</FavouriteDrinksContext.Provider>
}

export {FavouriteDrinksContext, FavouriteDrinksProviderWrapper}