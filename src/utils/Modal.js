import { React, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import './Modal.css';
import { GrPrevious, GrNext } from "react-icons/gr";

function Modal(props) {

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
                    <div className='nav-item'>
                        <button onClick={props.handlePrevItem} aria-label="Suivant" className='pointer modal-button prev-button'>
                            <GrPrevious></GrPrevious>
                        </button>
                        {props.children}
                        <button onClick={props.handleNextItem} aria-label="Précédent" className='pointer modal-button next-button'>
                            <GrNext></GrNext>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;