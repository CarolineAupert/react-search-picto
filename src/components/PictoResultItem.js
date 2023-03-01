import { React } from 'react';

function PictoResultItem(props) {

    let handlePictoClick = () => {
        props.openPictoDetailModal(props.picto);
    }

    return (
        <div className='picto-item pointer' onClick={handlePictoClick}>
            <img src={props.picto.location}/>
        </div>
    );
}

export default PictoResultItem;