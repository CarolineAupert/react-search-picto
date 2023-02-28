import { React } from 'react';

function PictoResultItem(props) {

    let handlePictoClick = () => {
        props.openPictoDetailModal(props.picto);
    }

    return (
        <div onClick={handlePictoClick}>
            <img src={props.picto.location} width="200" height="200"/>
        </div>
    );
}

export default PictoResultItem;