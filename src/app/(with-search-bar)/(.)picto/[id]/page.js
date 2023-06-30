import PictoDetailModal from "@/components/picto/PictoDetailModal";

const PictoModal = ({ params }) => {
    return (
        <PictoDetailModal pictoId={params.id}></PictoDetailModal>
    )
}

export default PictoModal;