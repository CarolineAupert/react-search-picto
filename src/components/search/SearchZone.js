import { Outlet, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import './SearchResults.css';

// The area where the results will be shown, as well as other messages (infos, errors, etc).
function SearchZone() {

    const navigate = useNavigate();

    // Format the search value (remove extra spaces and put to lower case)
    const formatSearchValue = (value) => {
        return value && value.trim().split(/ +/).join(' ').toLowerCase();
    }

    // The actions to do when the search is on.
    const handleSearchPicto = (tag) => {
        const formattedTag = formatSearchValue(tag);
        if (formattedTag) {
            navigate(`search/${formattedTag}`);
        }
    }

    return (
        <>
            <SearchBar onSearchPicto={handleSearchPicto} />
            <div className='search-results'>
                <Outlet />
            </div>
        </>
    );
}

export default SearchZone;