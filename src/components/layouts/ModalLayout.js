import { React } from 'react';
import Modal from '../utils/Modal';

const ModalLayout = ({children}) => {
    return (
        <Modal>
            {children}
        </Modal>
    );
};

export default ModalLayout;