import { React, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function SearchBar(props) {

    const [inputValue, setInputValue] = useState("");
    
    let searchPicto = (tag) => {
        props.onSearchPicto(tag);
        props.setHasSearchBegun(true);
    }

    let handleChange = (e) => {
        setInputValue(e.target.value);
    }

    let handleClickReset = () => {
        setInputValue("");
    }

    let handleClickSearch = (e) => {
        e.preventDefault();
        searchPicto(inputValue);
    }

    let handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchPicto(inputValue);
        }
    }

    return (
        <form className="search-picto-form">
            <label>
                Rechercher un picto
                <input type="text" value={inputValue} placeholder="Exemple : tester" onChange={handleChange} onKeyDown={handleKeyDown} />
            </label>
            {inputValue &&
                <button onClick={handleClickReset}>
                    <IoClose></IoClose>
                </button>
            }
            <button onClick={handleClickSearch}>
                <FaSearch></FaSearch>
            </button>

        </form>
    );
}

export default SearchBar;