'use client'

import Modal from '../utils/Modal';
import PictoDetail from './PictoDetail';
import { useRouter } from 'next/navigation';

// This component represents the details of a PictoDetail. It can be shown in a modal for example.
function PictoDetailModal({ pictoId }) {

    // From the router
    // TODO retrieve picts
    //const [pictos] = useOutletContext();

    const pictos = [
        {
            pictoId: 15,
            location: "https://images.picto-sketchnote.com/pictos/Equipe-engrenage.jpg",
            creationDate: "04/06/2022",
            title: "Parchemin",
            tags: ["parchemin", "détails", "loi"]
        },
        {
            pictoId: 14,
            location: "https://images.picto-sketchnote.com/pictos/Equipe-clef.jpg",
            creationDate: "04/07/2022",
            title: "loupe",
            tags: ["loupe", "chercher", "grossir"]
        },
        {
            pictoId: 3,
            location: "perso.jpg",
            creationDate: "04/08/2022",
            title: "perso",
            tags: ["perso", "humain", "emotion"]
        },
        {
            pictoId: 4,
            location: "soleil.jpg",
            creationDate: "04/09/2022",
            title: "soleil",
            tags: ["lumiere", "soleil"]
        }
    ]

    const router = useRouter();

    const picto = pictos && pictos.find(picto => picto.pictoId === +pictoId);

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
        router.push("/pictos/travail");
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