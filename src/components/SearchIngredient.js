import React from 'react';
import {StyledSearchForm} from "./styles/SearchForm.styled";


const SearchIngredient = ({ingredientChange, submitIngredientSearch}) => {


    return (
        <StyledSearchForm>
            <form onSubmit={submitIngredientSearch}>
                <h4>Search Ingredient</h4>
                <input
                    type="text"
                    onChange={ingredientChange}
                    required
                />
                <button type='submit'>search</button>
            </form>
        </StyledSearchForm>
    );
}
export default SearchIngredient;