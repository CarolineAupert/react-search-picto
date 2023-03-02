import { React } from 'react';
import './PictoDetail.css';

// This component represents the details of a PictoDetail. It can be shown in a modal for example.
function PictoDetail(props) {

    // The tags associated to the picto, each one separated by a comma.
    const tagsList = () => {
        if (props.picto.tags) {
            return props.picto.tags.map((tag, index) => {
                return (
                    <span key={tag}>
                        {(index ? ", " : "")}{tag}
                    </span>
                )
            })
        }
    }

    return (
        <div className='picto-detail'>
            {props.picto &&
                <>
                    <img src={props.picto.location} />
                    <div>
                        Créé le {props.picto.creationDate}
                    </div>
                    <div className='picto-tags'>
                        {/* Prévoir quand il y aura beaucoup de termes ! */}
                        <span>Termes associés :&nbsp;</span> {tagsList()}
                    </div>
                </>
            }

        </div>
    );
}

export default PictoDetail;