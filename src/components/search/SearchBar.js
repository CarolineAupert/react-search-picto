import { React, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import './SearchBar.css';

// This component represents the search bar.
function SearchBar({ onSearchPicto }) {

    const [inputValue, setInputValue] = useState("");

    // The actions to do when the search is on.
    const searchPicto = (tag) => {
        onSearchPicto(tag);
    }

    // Handle the change in the input form (=> displays the clear button).
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // Handle when the clear button is clicked (=> clears the input).
    const handleClickReset = () => {
        setInputValue("");
    }

    // Handle when the search button is clicked (=> does the search).
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.blur();
        searchPicto(inputValue);
    }

    return (
        <div className='search-bar'>
            <h1 className='center'> Trouvez le picto qu'il vous faut !</h1>
            <form className="search-form center cf" role="search" onSubmit={handleSubmit}>
                <input type="text" aria-label="Taper un picto à chercher" value={inputValue} placeholder="Exemple : tester" onChange={handleChange} data-testid="search-input" />
                {inputValue &&
                    <button className='form-clear-button pointer' type="reset" onClick={handleClickReset} aria-label="Effacer" data-testid="clear-button">
                        <MdClear></MdClear>
                    </button>
                }
                <button className='form-search-button pointer' type="submit" aria-label="Chercher" data-testid="search-button">
                    <FaSearch></FaSearch>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;