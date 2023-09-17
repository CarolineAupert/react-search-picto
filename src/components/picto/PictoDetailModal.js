'use client'

import { PictoApi } from '../api/PictoApi';
import PictoDetail from './PictoDetail';

// This component represents the details of a Picto in a Modal
async function PictoDetailModal({ pictoId }) {
  
    const picto = pictoId && await PictoApi.getById(pictoId);

    /*
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

    // The actions to select the previous picto in the array.
    const goToNextPicto = () => {
        const currentIndex = getPictoByIndexFromId();
        const nextPictoId = getNextPictoId(currentIndex);
        router.push(`/picto/${nextPictoId}`);
    }

    // The actions to select the next picto in the array.
    const goToPrevPicto = () => {
        const currentIndex = getPictoByIndexFromId();
        const prevPictoId = getPrevPictoId(currentIndex);
        router.push(`/picto/${prevPictoId}`);
    }*/

    return (
        <>
            {picto && <PictoDetail picto={picto} />}
        </>
    );
}

export default PictoDetailModal;