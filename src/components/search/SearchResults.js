import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PictoApi } from '../../api/services/PictoApi';
import PictoGrid from '../picto/PictoGrid';


// Displays the results of the search or messages such as errors.
function SearchResults() {

    const [pictos, setPictos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // Param retrieve from the router
    const { searchValue } = useParams();

    // Calls the search webservice when the search is triggered.
    useEffect(() => {
        if (searchValue) {
            PictoApi.indexByQuery(searchValue).then((result) => {
                setError(null);
                setIsLoaded(true);
                setPictos(result.data);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })

            return () => {
                setIsLoaded(false);
                setError(null);
            }
        }
    }, [searchValue])


    if (error) {
        return <div className='center' data-testid="results-error">Une erreur est survenue, veuillez réessayer. Si l'erreur persiste, veuillez contacter l'amdinistrateur du site.</div>;
    } else if (!isLoaded) {
        return <div className='center' data-testid="results-loading">Chargement…</div>;
    } else if (!pictos || pictos.length === 0) {
        return <div className='center' data-testid="results-no-picto">Nous n'avons trouvé aucun picto pour le terme : {searchValue}</div>
    } else {
        return (
            <div>
                <h2> Pictos trouvés pour le terme : {searchValue} </h2>
                <PictoGrid pictos={pictos} />
            </div>
        );
    }
}

export default SearchResults;