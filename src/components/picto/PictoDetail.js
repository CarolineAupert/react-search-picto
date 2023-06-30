import './PictoDetail.css';

// This component represents the details of a PictoDetail. It can be shown in a modal for example.
function PictoDetail({ picto }) {

    // The tags associated to the picto, each one separated by a comma.
    const getTagsList = () => {
        if (picto.tags) {
            return picto.tags.map((tag, index) => {
                return (
                    <span key={tag}>
                        {(index ? ", " : "").concat(tag)}
                    </span>
                )
            })
        }
    }

    return (
        <div className='picto-detail'>
            {picto &&
                <>
                    <img src={picto.location} alt={picto.title} />
                    <div className='picto-infos'>
                        <div>
                            Créé le {picto.creationDate}
                        </div>
                        <div className='picto-tags'>
                            {/* TODO : Prévoir quand il y aura beaucoup de termes ! */}
                            <span><span>Termes associés :</span> {getTagsList()}</span>
                        </div>
                    </div>
                </>
            }

        </div>
    );
}

export default PictoDetail;