
const PictoPage = ({ params }) => {

    const pictoId = params.id;

    // Retrieve picto from axios et afficher pictodetail
    return (
        <>
            Page
            {pictoId}
        </>
    )
}

export default PictoPage;