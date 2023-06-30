import { React } from 'react';
import SearchZone from '../search/SearchZone';

const SearchZoneLayout = ({ children }) => {
    return (
        <SearchZone>
            {children}
        </SearchZone>
    );
};

export default SearchZoneLayout;