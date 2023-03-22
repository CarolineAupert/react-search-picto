import { React, useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Modal from '../utils/Modal';
import PictoDetail from './PictoDetail';

// This component represents the details of a PictoDetail. It can be shown in a modal for example.
function PictoDetailModal() {

    // From the router
    const { pictoId } = useParams();
    const [pictos] = useOutletContext();
    const navigate = useNavigate();

    const [picto, setPicto] = useState({});


    // Initialize picto
    useEffect(() => {
        // Retrieve the picto from its id
        const getPictoById = () => {
            return pictos && pictos.find(picto => picto.pictoId === +pictoId);
        }

        // Retrieve the wanted picto
        const currentPicto = getPictoById();
        
        // If no existing picto, reset the navigation
        if (!currentPicto) {
            navigate("..");
        }

        setPicto(currentPicto);

    }, [pictos, picto, pictoId, navigate])



    // Retrieve the picto from its index
    const getPictoByIndexFromId = () => {
        return pictos && pictos.findIndex(picto => picto.pictoId === +pictoId);
    }

    // Retrieve the next picto in the array. If it's the last, then go back to the first.
    const getNextPictoId = (currentIndex) => {
        let nextIndex = 0;
        if (currentIndex !== pictos.length - 1) {
            nextIndex = currentIndex + 1;
        }
        return pictos[nextIndex].pictoId;
    }

    // Retrieve the previous picto in the array. If it's the first, then go back to the last.
    const getPrevPictoId = (currentIndex) => {
        let previousIndex = pictos.length - 1;
        if (currentIndex !== 0) {
            previousIndex = currentIndex - 1;
        }
        return pictos[previousIndex].pictoId;
    }

    // The actions to close the modal with the picto.
    const closePictoDetailModal = () => {
        navigate("..");
    }

    // The actions to select the previous picto in the array.
    const goToNextPicto = () => {
        const currentIndex = getPictoByIndexFromId();
        const nextPictoId = getNextPictoId(currentIndex);
        navigate(`../picto/${nextPictoId}`);
    }

    // The actions to select the next picto in the array.
    const goToPrevPicto = () => {
        const currentIndex = getPictoByIndexFromId();
        const prevPictoId = getPrevPictoId(currentIndex);
        navigate(`../picto/${prevPictoId}`);
    }

    return (
        <>
            {picto &&
                <Modal handleCloseModal={closePictoDetailModal} handlePrevItem={goToPrevPicto} handleNextItem={goToNextPicto}>
                    <PictoDetail picto={picto} />
                </Modal>
            }
        </>
    );
}

export default PictoDetailModal;