import { React } from 'react';
import { IoClose } from 'react-icons/io5';

function PictoDetail(props) {

    const tagsList = props.picto.tags.map((tag) => <span key={tag}> {tag} </span>);

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <img src={props.picto.location} />
                    </td>
                    <td>
                        <button onClick={props.handleCloseModal}>
                            <IoClose></IoClose>
                        </button>
                        Picto Détail
                        Termes correspondants
                        {tagsList}
                        Créé le {props.picto.creationDate}
                    </td>
                </tr>
            </tbody>


        </table>

    );
}

export default PictoDetail;