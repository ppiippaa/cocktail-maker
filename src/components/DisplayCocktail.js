import React, { useContext, useState, useEffect } from 'react';
import Favourite from '../media/isFavouriteHeart.png'
import NotFavourite from '../media/isNotFavouriteHeart.png'
import axios from "axios";
import transformDrinkData from "../utils/adaptors/getDrinks";
import {addToLocalStorage, getFromLocalStorage} from "../utils/helpers/localStorage";
import {FavouriteDrinksContext} from "../state/FavouriteDrinksContext";
import {StyledDisplayCocktail} from "./styles/DisplayCocktail.styled";


const DisplayCocktail = (props) => {
    const drink = props.drink
    const { name, url, method, ingredients } = drink

    const {favourites, setFavourites} = useContext(FavouriteDrinksContext)

    const [ingredientsToDisplay, setIngredientsToDisplay] = useState(ingredients)

    const [methodToDisplay, setMethodToDisplay] = useState(method)

    useEffect(() => {
        const fetchExtraData = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

            axios
                .get(`${url}${name}`)
                .then(response => {
                    console.log(response.data)
                    const allDrinks = response.data['drinks'].map(drink => transformDrinkData(drink))
                    setIngredientsToDisplay(allDrinks[0].ingredients)
                    setMethodToDisplay(allDrinks[0].method)
                }).catch(error => {
                console.log(`Sorry, we couldn't find ${name}`)
                // return error comp?
            })
        }
        if (!methodToDisplay && !ingredientsToDisplay.length) {
           fetchExtraData()
        }
    }, [])



    const toggleFavourite = (remove) => {
        if (remove) {
            const filteredDrinks = favourites.filter(drink => drink.name !== name)
            setFavourites(filteredDrinks)
            addToLocalStorage(filteredDrinks)
        } else {
           setFavourites([...favourites, drink])
            addToLocalStorage([...favourites, drink])
        }
    }

    const isFavouriteDrink = () => {
        return favourites.find(f => f.name === name) || getFromLocalStorage()?.find(f => f.name === name)
    }


            return (
                <StyledDisplayCocktail>
                    <h3>{name}</h3>
                    <img className='drink-img' src={`${url}/preview`} alt={name}/>
                    <ul>
                        {
                            ingredientsToDisplay.map(ingredient => <li key={ingredient}>{ingredient}</li>)
                        }
                    </ul>
                    <p>{methodToDisplay}</p>
                    <img className='like-img' src={isFavouriteDrink() ? Favourite : NotFavourite} alt={isFavouriteDrink ? 'Icon Drink Favourited' : 'Icon Add to FavouriteDrinks'}
                         height='50px' onClick={() => toggleFavourite(isFavouriteDrink())}/>
                </StyledDisplayCocktail>
            )
    }


export default DisplayCocktail;