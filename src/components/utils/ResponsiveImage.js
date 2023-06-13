import { React } from 'react';

// A component representing a responive image.
function ResponsiveImage({image}) {

    return (
        <picture className={image.className} data-testid="picture">
            <img src={image.url} alt={image.alt} />
        </picture>
    );
}

export default ResponsiveImage;