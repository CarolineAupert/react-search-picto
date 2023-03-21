import { React, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import './Modal.css';
import { GrPrevious, GrNext } from "react-icons/gr";

// A component representing a modal with navigation.
function Modal(props) {

    // Manage keydowns.
    const handleKeyDown = (e) => {
        switch (e.key) {
            case "Left":
                props.handlePrevItem();
                break;
            case "Right":
                props.handleNextItem();
                break;
            case "ArrowLeft":
                props.handlePrevItem();
                break;
            case "ArrowRight":
                props.handleNextItem();
                break;
            case "Escape":
                props.handleCloseModal();
                break;
            default: return;
        }
    }

    // When the modal is open, the scrolling is disabled.
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        }
    });

    // When the modal is open, listens to keydowns.
    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.removeEventListener('keydown', handleKeyDown);
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