import { React, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import '../css/SearchBar.css';

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
        <div className='search-bar'>
            <h1 className='center'> Trouvez le picto qu'il vous faut !</h1>
            <form className="search-form center cf" role="search">
                <input type="text" aria-label="Taper un picto à chercher" value={inputValue} placeholder="Exemple : tester" onChange={handleChange} onKeyDown={handleKeyDown} />
                {inputValue &&
                    <button className='clear-button pointer' onClick={handleClickReset} ari-label="Effacer">
                        <IoClose></IoClose>
                    </button>
                }
                <button className='search-button pointer' onClick={handleClickSearch} aria-label="Chercher">
                    <FaSearch></FaSearch>
                </button>

            </form>
        </div>
    );
}

export default SearchBar;