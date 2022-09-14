const LOCAL_STORAGE = 'cocktail-favourites'

const addToLocalStorage = (drinksToAdd) => {
    const drinks = JSON.stringify(drinksToAdd)
    localStorage.setItem(LOCAL_STORAGE, drinks)
}

const getFromLocalStorage = () => {
    const drinks = localStorage.getItem(LOCAL_STORAGE)
    return JSON.parse(drinks)
}


// id: "15178"
// ingredients: (4) ['Yukon Jack', 'Cherry brandy', 'Southern Comfort', 'Sweet and sour']
// isFavouriteDrink: false
// method: "Mix all ingredients and Shake well. Sweet at first, with a BITE at the end..."
// name: "Texas Rattlesnake"
// url: "https://www.thecocktaildb.com/images/media/drink/rtohqp1504889750.jpg"

export {addToLocalStorage, getFromLocalStorage};