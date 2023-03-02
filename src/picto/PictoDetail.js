import { React } from 'react';
import './PictoDetail.css';

function PictoDetail(props) {

    const tagsList = props.picto.tags.map((tag) => <span key={tag}> {tag} </span>);

    return (
        <div className='picto-detail'>
            <img src={props.picto.location} />
            <div>
                Créé le {props.picto.creationDate}
            </div>
            <div className='picto-tags'>
                {/* Prévoir quand il y aura beaucoup de termes ! */}
                <span>Termes associés :&nbsp;</span> {tagsList.map((tag, index) => {
                    return (
                        <span key={tag}>
                            {(index ? "," : "")}{tag}
                        </span>
                    )
                })}
            </div>
        </div>
    );
}

export default PictoDetail;