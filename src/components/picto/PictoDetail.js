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
                    <img src={props.picto.location} alt={props.picto.title} />
                    <div className='picto-infos'>
                        <div>
                            Créé le {props.picto.creationDate}
                        </div>
                        <div className='picto-tags'>
                            {/* TODO : Prévoir quand il y aura beaucoup de termes ! */}
                            <span><span>Termes associés :</span> {tagsList()}</span>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}

export default PictoDetail;