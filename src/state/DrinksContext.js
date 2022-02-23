import React, {createContext, useState} from 'react';


const DrinksContext = createContext()

const DrinksProviderWrapper = ({children}) => {
    const [drinks, setDrinks] = useState([])

    return <DrinksContext.Provider value={{drinks, setDrinks}}>{children}</DrinksContext.Provider>
}

export {DrinksContext, DrinksProviderWrapper}