import ModalLayout from "@/components/layouts/ModalLayout";

export default function PictoModalLayout(props) {

    return (
        <ModalLayout>
            {props.children}
        </ModalLayout> 
    )
}
