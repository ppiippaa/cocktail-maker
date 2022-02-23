import React from 'react';
import SearchButton from "./SearchButton";


const SearchIngredient = ({ingredientChange, submitIngredientSearch}) => {
    return (
        <>

            <form onSubmit={submitIngredientSearch}>
                <h4>Search by Ingredient</h4>
                <input
                    type="text"
                    onChange={ingredientChange}
                    required
                />
                {/*<SearchButton />*/}
                <button type='submit'>search</button>
            </form>
        </>
    );
}
export default SearchIngredient;