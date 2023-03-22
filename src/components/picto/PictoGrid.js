import { React } from 'react';
import PictoItem from './PictoItem';
import './PictoGrid.css';
import { Outlet, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Display the pictos.
function PictoGrid({ pictos }) {

    const navigate = useNavigate();

    // The actions to open the modal with the picto.
    const openPictoDetailModal = (picto) => {
        navigate(`picto/${picto.pictoId}`);
    }

    return (
        <div className='pictos-grid'>
            <Outlet context={[pictos]} />
            <div className="pictos-items">
                {pictos && pictos.map((picto) => <PictoItem key={picto.pictoId} picto={picto} openPictoDetailModal={openPictoDetailModal} />)}
            </div >
        </div>
    );

}

PictoGrid.propTypes = {
    pictos: PropTypes.arrayOf(
        PropTypes.exact({
            pictoId: PropTypes.number.isRequired,
            location: PropTypes.string.isRequired,
            creationDate: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    )
}

export default PictoGrid;