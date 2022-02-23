const transformDrinkData = (drink) => {

    const name = drink['strDrink']

    const url = drink['strDrinkThumb']

    const method = drink['strInstructions'] || ''

    const id = drink['idDrink']


    const ingredients =  Object.entries(drink)
        .filter(([key, value]) => key.includes('strIngredient') && value && value?.length)
        .map(([ key, value]) => value)


    return {name, url, method, ingredients, id}

}

export default transformDrinkData

