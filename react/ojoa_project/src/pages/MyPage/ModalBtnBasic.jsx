import { useEffect, useRef } from 'react';
import './ModalBtn.css';

function ModalBtnBasic({ setModalOpen }) {

    // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
    const closeModal = () => {
        setModalOpen(false);
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };

        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응

        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    }, [setModalOpen]);

return (
    // 모달창을 useRef로 잡아준다.
    <div ref={modalRef} className="ModalBtn_container">
        <img onClick={closeModal} className="madal_close_rotate" src="./images/search_X.png" alt="search_x" />
        <p>[가용적립금 페이지] <br /><br /> 준비중 입니다.</p>
    </div>
);
}
export default ModalBtnBasic;