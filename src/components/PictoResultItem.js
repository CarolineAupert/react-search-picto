import { React } from 'react';

function PictoResultItem(props) {

    // Todo voir si on le transforme en component
    const tagsList = props.picto.tags.map((tag) => <span key={tag}> {tag} </span>);

    return (
        <td>
            <img src={props.picto.location} width="200" height="200"/>
                <div>{props.picto.creationDate}</div>
                {tagsList}
        </td>

    );
}

export default PictoResultItem;