import { React, useState } from 'react';
import PictoDetail from './PictoDetail';
import PictoItem from './PictoItem';
import Modal from '../utils/Modal';
import './PictoGrid.css';

// Display the pictos.
function PictoGrid(props) {

    const [showPictoModal, setShowPictoModal] = useState(false);
    const [currentPicto, seCurrentPicto] = useState(null);
    const [currentPictoIndex, setCurrentPictoIndex] = useState(null);

    // Retrieve the index of the current picto.
    const getCurrentIndex = (currentPicto) => {
        if (props.pictos) {
            return props.pictos.findIndex(picto => {
                return picto.pictoId === currentPicto.pictoId;
            })
        }
        return 0;
    }

    // Retrieve the picto from its index
    const getPictoByIndex = (index) => {
        return props.pictos ? props.pictos[index] : 0;
    }

    // Retrieve the next picto in the array. If it's the last, then go back to the first.
    const getNextPictoIndex = () => {
        if (props.pictos && currentPictoIndex === props.pictos.length - 1) {
            return 0;
        }
        return currentPictoIndex + 1;
    }

    // Retrieve the previous picto in the array. If it's the first, then go back to the last.
    const getPrevPictoIndex = () => {
        if (currentPictoIndex === 0) {
            return props.pictos.length - 1;
        }
        return currentPictoIndex - 1;
    }

    // The actions to open the modal with the picto.
    const openPictoDetailModal = (picto) => {
        setShowPictoModal(true);
        seCurrentPicto(picto);
        setCurrentPictoIndex(getCurrentIndex(picto));
    }

    // The actions to close the modal with the picto.
    const closePictoDetailModal = () => {
        setShowPictoModal(false);
        seCurrentPicto(null);
    }

    // The actions to select the previous picto in the array.
    const goToPrevPicto = () => {
        const nextIndex = getNextPictoIndex();
        seCurrentPicto(getPictoByIndex(nextIndex));
        setCurrentPictoIndex(nextIndex);
    }

    // The actions to select the next picto in the array.
    const goToNextPicto = () => {
        const prevIndex = getPrevPictoIndex();
        seCurrentPicto(getPictoByIndex(prevIndex));
        setCurrentPictoIndex(prevIndex);
    }

    return (
        <div className='pictos-grid'>
            {showPictoModal &&
                <Modal handleCloseModal={closePictoDetailModal} handlePrevItem={goToPrevPicto} handleNextItem={goToNextPicto}>
                    <PictoDetail picto={currentPicto} />
                </Modal>
            }
            <div className="pictos-items">
                {props.pictos.map((picto) => <PictoItem key={picto.pictoId} picto={picto} openPictoDetailModal={openPictoDetailModal} />)}
            </div >
        </div>
    );

}

export default PictoGrid;