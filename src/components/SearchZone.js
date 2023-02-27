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
        <div>
            <SearchBar onSearchPicto={handleSearchPicto} setHasSearchBegun={setHasSearchBegun} />
            {hasSearchBegun && <SearchResults searchValue={searchValue} hasSearchBegun={hasSearchBegun} />}
        </div>
    );
}

export default SearchZone;