import { React, useEffect, useState } from 'react';
import { PictoApi } from '../../api/services/PictoApi';
import PictoGrid from '../picto/PictoGrid';


// Displays the results of the search or messages such as errors.
function SearchResults(props) {

    const [pictos, setPictos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Calls the search webservice when the search is triggered.
    useEffect(() => {

        if (props.hasSearchBegun) {
            PictoApi.indexByTag(props.searchValue).then((result) => {
                setError(null);
                setIsLoaded(true);
                setPictos(result.data);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
        };

        return () => {
            setIsLoaded(false);
            setError(null);
        }
    }, [props.hasSearchBegun, props.searchValue])


    if (error) {
        return <div className='center'>Une erreur est survenue, veuillez réessayer. Si l'erreur persiste, veuillez contacter l'amdinistrateur du site.</div>;
    } else if (!isLoaded) {
        return <div className='center'>Chargement…</div>;
    } else if (pictos.length === 0) {
        return <div className='center'>Nous n'avons trouvé aucun picto pour le terme : {props.searchValue}</div>
    } else {
        return (
            <div>
                <h2> Pictos trouvés pour le terme : {props.searchValue} </h2>
                <PictoGrid pictos={pictos} />
            </div>
        );
    }
}

export default SearchResults;