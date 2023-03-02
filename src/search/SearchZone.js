import { React, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './SearchResults.css';

function SearchZone() {

    const [searchValue, setSearchValue] = useState("");
    const [hasSearchBegun, setHasSearchBegun] = useState(false);

    function handleSearchPicto(tag) {
        setSearchValue(tag);
    }

    return (
        <>
            <SearchBar onSearchPicto={handleSearchPicto} setHasSearchBegun={setHasSearchBegun} />
            <div className='search-results'>
                {hasSearchBegun && <SearchResults searchValue={searchValue} hasSearchBegun={hasSearchBegun} />}
            </div>
        </>
    );
}

export default SearchZone;