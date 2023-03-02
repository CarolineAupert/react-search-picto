import axios from 'axios';
import { React, useEffect, useState } from 'react';
import PictoGrid from '../picto/PictoGrid';

// Displays the results of the search or messages such as errors.
function SearchResults(props) {

    const [pictos, setPictos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Calls the search webservice when the serach is triggered.
    useEffect(() => {

        if (props.hasSearchBegun) {
            const apiUrl = `http://localhost:8080/pictos?tag=${props.searchValue}`;
            axios.get(apiUrl)
                .then((result) => {
                    setIsLoaded(true);
                    setPictos(result.data);
                },
                    // Remarque : il faut gérer les erreurs ici plutôt que dans
                    // un bloc catch() afin que nous n’avalions pas les exceptions
                    // dues à de véritables bugs dans les composants.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    })
        }

        return () => {
            setIsLoaded(false);
            setError(null);
        }
    }, [props.hasSearchBegun, props.searchValue])


    if (error) {
        return <div className='center'>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div className='center'>Chargement…</div>;
    } else if (pictos.length === 0) {
        return <div className='center'>Nous n'avons trouvé aucun picto pour le terme : {props.searchValue}.</div>
    } else {
        return (
            <div>
                <h2> Pictos trouvé pour le terme : {props.searchValue} </h2>
                <PictoGrid pictos={pictos}/>
            </div>
        );
    }
}

export default SearchResults;