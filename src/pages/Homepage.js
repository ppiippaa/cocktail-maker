import React, {useContext, useState} from 'react';
import {DrinksContext} from "../state/DrinksContext";
import axios from "axios";
import transformDrinkData from "../utils/adaptors/getDrinks";
import ButtonRandomCocktail from "../components/ButtonRandomCocktail";
import SearchIngredient from "../components/SearchIngredient";
import SearchName from "../components/SearchName";
import ErrorMsg from "./ErrorMsg";
import DisplayCocktail from "../components/DisplayCocktail";
import {StyledCocktailGrid} from "../components/styles/CocktailGrid.styled";
import '../components/styles/Homepage.css';
import homepageImage from '../media/homepageImage.jpg';
import '../components/styles/Homepage.css';


const Homepage = () => {
    // STATE FOR COCKTAIL
    const {drinks, setDrinks} = useContext(DrinksContext)
    // STATE FOR COCKTAIL INGREDIENT SEARCH
    const [searchIngredient, setSearchIngredient] = useState('')
    // STATE FOR COCKTAIL NAME SEARCH
    const [searchName, setSearchName] = useState('')
    // ERROR IN FETCH STATE
    const [fetchError, setFetchError] = useState(null)


    const randomCocktailHandler = async () => {
        const {data} = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        setDrinks([transformDrinkData(data['drinks'][0])])
    }


    // SEARCH BY INGREDIENTS
    const handleIngredientChange = (e) => {
        setSearchIngredient(e.target.value)
    }


    const searchIngredients = (e) => {
        e.preventDefault()
        const ingredient = searchIngredient;
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='


        axios
            .get(`${url}${ingredient}`)
            .then(response => {
                const allDrinks = response.data['drinks'].map(drink => transformDrinkData(drink))
                setDrinks(allDrinks)
                setFetchError(false)

            }).catch(error => {
            console.log(`Sorry, no cocktails containing ${ingredient} were found`)
            setFetchError(true)

        })

    }


    // SEARCH BY COCKTAIL NAME
    const handleNameChange = (e) => {
        setSearchName(e.target.value)
    }

    const searchCocktailName = (e) => {
        e.preventDefault()
        const name = searchName
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

        axios
            .get(`${url}${name}`)
            .then(response => {
                const allDrinks = response.data['drinks'].map(drink => transformDrinkData(drink))
                setDrinks(allDrinks)
                setFetchError(false)
            }).catch(error => {
            console.log(`Sorry, we couldn't find ${searchName}`)
            setFetchError(true)
        })

    }

    const clearNameInput = () => {
        setSearchName('');
    }


    return (
            <div className="main-container">
                <div className='flex-row landing-container'>
                    <div className='logo-container'>
                        <img src={homepageImage} alt="logo" className="logo"/>
                    </div>



                    <div className="controls">
                            <SearchIngredient ingredientChange={handleIngredientChange}
                                              submitIngredientSearch={searchIngredients}

                            />
                            <SearchName nameChange={handleNameChange}
                                        submitNameSearch={searchCocktailName}
                                        clearNameInput={clearNameInput}
                            />
                        <ButtonRandomCocktail randomCocktail={randomCocktailHandler}/>
                    </div>



                </div>
                {
                    fetchError ? <div className='error-container'><ErrorMsg/></div> : (
                        <div className='renderedCocktails'>
                            <StyledCocktailGrid>
                                {
                                    drinks.map(drink =>
                                        <DisplayCocktail
                                            drink={drink}
                                            key={drink.id}
                                            searchCocktailName={searchCocktailName}
                                        />)
                                }
                            </StyledCocktailGrid>
                        </div>
                    )
                }

            </div>

    )


};


export default Homepage;


