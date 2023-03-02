import { React, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { GrPrevious, GrNext } from "react-icons/gr";
import './PictoDetail.css';

function PictoDetail(props) {

    const tagsList = props.picto.tags.map((tag) => <span key={tag}> {tag} </span>);

    const closeOnEscapeKeyDown = (e) => {
        if (e.key === 'Escape') {
            props.handleCloseModal();
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    });

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
        }
    });

    return (
        <>
            <div className='dark-background' onClick={props.handleCloseModal} />
            <div className='centered modal'>
                <div className='modal-header'>
                    <button onClick={props.handleCloseModal} aria-label="Fermer" className='pointer modal-button close-button'>
                        <IoClose></IoClose>
                    </button>
                </div>
                <div className='modal-content'>
                    <div className='picto-nav'>
                        <button onClick={props.handlePrevPicto} aria-label="Picto suivant" className='pointer modal-button prev-button'>
                            <GrPrevious></GrPrevious>
                        </button>

                        <img src={props.picto.location} />
                        <button onClick={props.handleNextPicto} aria-label="Picto précédent" className='pointer modal-button next-button'>
                            <GrNext></GrNext>
                        </button>
                    </div>
                    <div>
                        Créé le {props.picto.creationDate}
                    </div>
                    <div className='picto-tags'>
                        {/* Prévoir quand il y aura beaucoup de termes ! */}
                        <span>Termes associés :&nbsp;</span> {tagsList.map((tag, index) => {return (
                            <span key={tag}>
                                {(index ? "," : "")}{tag}
                            </span>
                        )})}
                    </div>
                </div>

            </div>
        </>


    );
}

export default PictoDetail;