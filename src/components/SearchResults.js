import axios from 'axios';
import { React, useEffect, useState } from 'react';
import PictoDetail from './PictoDetail';
import PictoResultItem from './PictoResultItem'

function SearchResults(props) {

    const [pictos, setPictos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showPictoModal, setShowPictoModal] = useState(false);
    const [pictoToShow, setPictoToShow] = useState(null);

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

    let openPictoDetailModal = (picto) => {
        console.log(picto);
        setShowPictoModal(true);
        setPictoToShow(picto);
    }

    let closePictoDetailModal = () => {
        setShowPictoModal(false);
        setPictoToShow(null);
    }

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement…</div>;
    } else if (pictos.length === 0) {
        return <div>Aucun picto trouvé pour le tag {props.searchValue}</div>
    } else {
        return (
            <div>
                {showPictoModal && <PictoDetail picto={pictoToShow} handleCloseModal={closePictoDetailModal}/>}
                <table>
                    <tbody>
                        <tr>
                            {pictos.map((picto) => <PictoResultItem key={picto.pictoId} picto={picto} openPictoDetailModal={openPictoDetailModal} />)}
                        </tr >
                    </tbody>
                </table >
            </div>
        );
    }
}

export default SearchResults;