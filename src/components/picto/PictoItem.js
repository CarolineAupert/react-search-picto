import { React } from 'react';

// Display a picto item (without details).
function PictoItem(props) {

    // The action to do chen a picto item is clicked (=> open the modal).
    const handlePictoClick = () => {
        props.openPictoDetailModal(props.picto);
    }

    return (
        <div className='picto-item pointer' onClick={handlePictoClick}>
            <img src={props.picto.location} alt={props.picto.title}/>
        </div>
    );
}

export default PictoItem;