import PropTypes from 'prop-types';
import './PictoGrid.css';
import PictoItem from './PictoItem';

// Display the pictos.
function PictoGrid({ pictos }) {
    return (
        <div className='pictos-grid'>
            <div className="pictos-items">
                {pictos && pictos.map((picto) => <PictoItem key={picto.pictoId} picto={picto} />)}
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