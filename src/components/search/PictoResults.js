import PictoGrid from '../picto/PictoGrid';


// Displays default pictos when the app is started.
function PictoResults({pictos, noDataMessage}) {
  
    if (!pictos || pictos.length === 0) {
        return <div className='center' data-testid="results-no-picto">{noDataMessage}</div>
    } else {
        return (
            <div data-testid='default-results'>
                <PictoGrid pictos={pictos} />
            </div>
        );
    }
}

export default PictoResults;