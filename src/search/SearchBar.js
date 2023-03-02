import { React, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import './SearchBar.css';

// This component represents the search bar.
function SearchBar(props) {

    const [inputValue, setInputValue] = useState("");

    // The actions to do when the search is on.
    const searchPicto = (tag) => {
        props.onSearchPicto(tag);
        props.setHasSearchBegun(true);
    }

    // Handle the change in th einput form (=> displays the clear button).
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // Handle when the clear button is clicked (=> clears the input).
    const handleClickReset = () => {
        setInputValue("");
    }

    // Handle when the search button is clicked (=> does the search).
    const handleClickSearch = (e) => {
        e.preventDefault();
        searchPicto(inputValue);
    }

    // Handle the event when the "Enter" key is pressed (=> does the search).
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchPicto(inputValue);
        }
    }

    return (
        <div className='search-bar'>
            <h1 className='center'> Trouvez le picto qu'il vous faut !</h1>
            <form className="search-form center cf" role="search">
                <input type="text" aria-label="Taper un picto à chercher" value={inputValue} placeholder="Exemple : tester" onChange={handleChange} onKeyDown={handleKeyDown} />
                {inputValue &&
                    <button className='form-clear-button pointer' onClick={handleClickReset} ari-label="Effacer">
                        <IoClose></IoClose>
                    </button>
                }
                <button className='form-search-button pointer' onClick={handleClickSearch} aria-label="Chercher">
                    <FaSearch></FaSearch>
                </button>

            </form>
        </div>
    );
}

export default SearchBar;