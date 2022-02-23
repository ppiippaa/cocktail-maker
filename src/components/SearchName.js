import React from 'react';
import SearchButton from "./SearchButton";

const SearchName = ({nameChange, submitNameSearch}) => {
    return (
        <>

            <form onSubmit={submitNameSearch}>
                <h4>Search Cocktail Name</h4>
                <input
                    type="text"
                    onChange={nameChange}
                    required
                />
                {/*<SearchButton />*/}
                <button type='submit'>search</button>
            </form>
        </>
    );
}

export default SearchName;