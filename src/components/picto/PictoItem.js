import { React } from 'react';

// Display a picto item (without details).
function PictoItem(props) {

    // Handle the event when the "Enter" key is pressed (=> open the modal).
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.openPictoDetailModal(props.picto)
        }
    }

    // The action to do chen a picto item is clicked (=> open the modal).
    const handlePictoClick = () => {
        props.openPictoDetailModal(props.picto);
    }

    return (
        <div tabIndex="0" className='picto-item pointer' onClick={handlePictoClick} onKeyDown={handleKeyDown}>
            <img src={props.picto.location} alt={props.picto.title} />
        </div>
    );
}

export default PictoItem;