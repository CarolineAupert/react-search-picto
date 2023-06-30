import Link from 'next/link';
import { React } from 'react';

// Display a picto item (without details).
function PictoItem({ picto }) {

    return (
        <Link className='picto-item'  href={`/picto/${picto.pictoId}`}>
            <img src={picto.location} alt={picto.title} />
        </Link>
    );
}

export default PictoItem;