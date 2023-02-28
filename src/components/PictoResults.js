import { React, useState } from 'react';
import PictoDetail from './PictoDetail';
import PictoResultItem from './PictoResultItem';

function PictoResults(props) {

    const [showPictoModal, setShowPictoModal] = useState(false);
    const [pictoToShow, setPictoToShow] = useState(null);


    let openPictoDetailModal = (picto) => {
        console.log(picto);
        setShowPictoModal(true);
        setPictoToShow(picto);
    }

    let closePictoDetailModal = () => {
        setShowPictoModal(false);
        setPictoToShow(null);
    }
    return (
        <div>
            {showPictoModal && <PictoDetail picto={pictoToShow} handleCloseModal={closePictoDetailModal} />}
            <div className="pictos-box">

                {props.pictos.map((picto) => <PictoResultItem key={picto.pictoId} picto={picto} openPictoDetailModal={openPictoDetailModal} />)}

            </div >
        </div>
    );

}

export default PictoResults;