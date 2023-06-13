import { React, useEffect, useState } from 'react';
import { PictoApi } from '../../api/services/PictoApi';
import PictoGrid from '../picto/PictoGrid';


// Displays default pictos when the app is started.
function DefaultResults() {

    const nbNewPictosToShow = 20;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [lastPictos, setLastPictos] = useState([]);

  // Fetch new pictos.
  useEffect(() => {
    PictoApi.indexByLast(nbNewPictosToShow).then((result) => {
        setIsLoaded(true);
        setError(null);
        setLastPictos(result.data);
    },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })

    return () => {
        setError(null);
        setIsLoaded(false);
    }

}, [nbNewPictosToShow])


    if (error) {
        return <div className='center' data-testid="results-error">Une erreur est survenue, veuillez réessayer. Si l'erreur persiste, veuillez contacter l'amdinistrateur du site.</div>;
    } else if (!isLoaded) {
        return <div className='center' data-testid="results-loading">Chargement…</div>;
    } else if (!lastPictos || lastPictos.length === 0) {
        return <div className='center' data-testid="results-no-picto">Aucun picto ajouté récemment.</div>
    } else {
        return (
            <div data-testid='default-results'>
                <h2>Derniers pictos ajoutés</h2>
                <PictoGrid pictos={lastPictos} />
            </div>
        );
    }
}

export default DefaultResults;