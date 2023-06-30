'use client'

import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import "./SearchZone.css";

// The area where the results will be shown, as well as other messages (infos, errors, etc).
function SearchZone({ children }) {

    const router = useRouter();

    // Format the search value (remove extra spaces and put to lower case)
    const formatSearchValue = (value) => {
        return value && value.trim().split(/ +/).join(' ').toLowerCase();
    }

    // The actions to do when the search is on.
    const handleSearchPicto = (tag) => {
         const formattedTag = formatSearchValue(tag);
         if (formattedTag) {
              router.push(`/pictos/${formattedTag}`);
         }
    }

    return (
        <>
            <SearchBar onSearchPicto={handleSearchPicto} />
            <div className='search-results'>
                {children}
            </div>
        </>
    );
}

export default SearchZone;