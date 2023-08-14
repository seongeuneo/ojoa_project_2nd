import { useState } from 'react';
import ModalBasic from './ModalBasic';

// 모달을 노출하는 페이지
function Modal() {
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <img onClick={showModal} src="/images/btn_search.png" alt="search" />
            {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </div>
    );
}

export default Modal;