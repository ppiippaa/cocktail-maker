import React from 'react';
import {StyledSearchForm} from "./styles/SearchForm.styled";

const SearchName = ({nameChange, submitNameSearch, clearNameInput}) => {
    return (
        <StyledSearchForm>
            <form onSubmit={submitNameSearch}>
                <h4>Search Cocktail Name</h4>
                <input
                    type="text"
                    onChange={nameChange}
                    required
                />
                <button type='submit' onClick={clearNameInput}>search</button>
            </form>
        </StyledSearchForm>
    );
}

export default SearchName;