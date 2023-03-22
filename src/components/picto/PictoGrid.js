import { React } from 'react';
import PictoItem from './PictoItem';
import './PictoGrid.css';
import { Outlet, useNavigate } from 'react-router-dom';

// Display the pictos.
function PictoGrid(props) {

    const navigate = useNavigate();

    // The actions to open the modal with the picto.
    const openPictoDetailModal = (picto) => {
        navigate(`picto/${picto.pictoId}`);
    }

    return (
        <div className='pictos-grid'>
            <Outlet context={[props.pictos]} />
            <div className="pictos-items">
                {props.pictos.map((picto) => <PictoItem key={picto.pictoId} picto={picto} openPictoDetailModal={openPictoDetailModal} />)}
            </div >
        </div>
    );

}

export default PictoGrid;