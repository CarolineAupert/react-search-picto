import { React } from 'react';

// Display a picto item (without details).
function PictoItem({ picto, openPictoDetailModal }) {

    // The action to do chen a picto item is clicked (=> open the modal).
    const handlePictoClick = () => {
        openPictoDetailModal(picto);
    }

    return (
        <button className='picto-item pointer' onClick={handlePictoClick}>
            <img src={picto.location} alt={picto.title} />
        </button>
    );
}

export default PictoItem;