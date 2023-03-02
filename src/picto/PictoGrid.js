import { React, useState } from 'react';
import PictoDetail from './PictoDetail';
import PictoItem from './PictoItem';
import Modal from '../utils/Modal';

function PictoGrid(props) {

    const [showPictoModal, setShowPictoModal] = useState(false);
    const [pictoToShow, setPictoToShow] = useState(null);
    const [pictoShownIndex, setPictoShownIndex] = useState(null);

    const getCurrentIndex = (currentPicto) => {
        return props.pictos.findIndex(picto => {
            return picto.pictoId === currentPicto.pictoId;
        })
    }

    const getPictoByIndex = (index) => {
        return props.pictos[index];
    }

    const getNextPictoIndex = () => {
        if (pictoShownIndex === props.pictos.length - 1) {
            return 0;
        }
        return pictoShownIndex + 1;
    }

    const getPrevPictoIndex = () => {
        if (pictoShownIndex === 0) {
            return props.pictos.length - 1;
        }
        return pictoShownIndex - 1;
    }

    let openPictoDetailModal = (picto) => {
        setShowPictoModal(true);
        setPictoToShow(picto);
        const pictoShownIndex = getCurrentIndex(picto);
        setPictoShownIndex(pictoShownIndex);
    }

    let closePictoDetailModal = () => {
        setShowPictoModal(false);
        setPictoToShow(null);
    }

    let goToPrevPicto = () => {
        const nextIndex = getNextPictoIndex();
        setPictoToShow(getPictoByIndex(nextIndex));
        setPictoShownIndex(nextIndex);
    }

    let goToNextPicto = () => {
        const prevIndex = getPrevPictoIndex();
        setPictoToShow(getPictoByIndex(prevIndex));
        setPictoShownIndex(prevIndex);
    }

    return (
        <div className='pictos-grid'>
            {showPictoModal && 
            
            <Modal handleCloseModal={closePictoDetailModal} handlePrevItem={goToPrevPicto} handleNextItem={goToNextPicto}>
                <PictoDetail picto={pictoToShow}  />
            </Modal>
            // <PictoDetail picto={pictoToShow} handleCloseModal={closePictoDetailModal} handlePrevPicto={goToPrevPicto} handleNextPicto={goToNextPicto} />
            }
            <div className="pictos-items">
                {props.pictos.map((picto) => <PictoItem key={picto.pictoId} picto={picto} openPictoDetailModal={openPictoDetailModal} />)}
            </div >
        </div>
    );

}

export default PictoGrid;