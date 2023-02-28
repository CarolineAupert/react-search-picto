import axios from 'axios';
import { React, useEffect, useState } from 'react';
import PictoResults from './PictoResults';

function SearchResults(props) {

    const [pictos, setPictos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        if (props.hasSearchBegun) {
            const apiUrl = `http://localhost:8080/pictos?tag=${props.searchValue}`;
            console.log(apiUrl);
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
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement…</div>;
    } else if (pictos.length === 0) {
        return <div>Aucun picto trouvé pour le tag {props.searchValue}</div>
    } else {
        return (
            <div>
                {props.searchValue}
                <PictoResults pictos={pictos}/>
            </div>
        );
    }
}

export default SearchResults;