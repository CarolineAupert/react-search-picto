import { React, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function SearchZone() {

    const [searchValue, setSearchValue] = useState("");
    const [hasSearchBegun, setHasSearchBegun] = useState(false);

    function handleSearchPicto(tag) {
        setSearchValue(tag);
    }

    return (
        <>
            <SearchBar onSearchPicto={handleSearchPicto} setHasSearchBegun={setHasSearchBegun}/>
            {hasSearchBegun && <SearchResults searchValue={searchValue} hasSearchBegun={hasSearchBegun} />}
        </>
    );
}

export default SearchZone;