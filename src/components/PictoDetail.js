import { React } from 'react';
import { IoClose } from 'react-icons/io5';

function PictoDetail(props) {

    const tagsList = props.picto.tags.map((tag) => <span key={tag}> {tag} </span>);

    return (
        <div className='picto-detail'>
            <button onClick={props.handleCloseModal} aria-label="Fermer" className='pointer'>
                <IoClose></IoClose>
            </button>
            <div className='center'>
                <img src={props.picto.location} />
            </div>
            <div>
                Créé le {props.picto.creationDate}
            </div>
            <div>
                {tagsList}
            </div>
        </div>



    );
}

export default PictoDetail;