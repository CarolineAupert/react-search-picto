import { React, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import './SearchResults.css';

// The area where the results will be shown, as well as other messages (infos, errors, etc).
function SearchZone() {

    const [searchValue, setSearchValue] = useState("");
    const [hasSearchBegun, setHasSearchBegun] = useState(false);

    // Format the serach value (remove extra spaces and put to lower case)
    const formatSearchValue = (value) => {
        return value && value.trim().split(/ +/).join(' ').toLowerCase();
    }

    // The actions to do when the serach is on.
    const handleSearchPicto = (tag) => {
        const formattedTag = formatSearchValue(tag);
        if (formattedTag) {
            setSearchValue(formattedTag);
        }
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