import React, { useCallback, useState, useRef } from "react";
import "./ProductDetail.css";
import ModalBtnBasic from "./Modal/ModalBtnBasic";

const mockReviewList = [
    {
        num: 1,
        title: '친구 선물해줬더니 너무 좋아하네요',
        writer: '어성은',
        createDate: '2021.11.29',
        check: 18
    },
    {
        num: 2,
        title: '100% 만족합니다',
        writer: '유희상',
        createDate: '2021.12.14',
        check: 15
    },
    {
        num: 3,
        title: '살까 말까 고민한 저를 후회합니다',
        writer: '이진기',
        createDate: '2021.12.28',
        check: 9
    },
    {
        num: 4,
        title: '만족',
        writer: '오원희',
        createDate: '2023.03.14',
        check: 1
    },
]; //mockReviewList

// 배열 속성 writer 입력시 성만 따오기
const lastName = (fullName) => {
    if (fullName.length > 0) {
        return fullName.charAt(0);
    };
    return;
};


function OrderReview02() {

    // // 모달창 띄우기
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    const singleReviewLi = mockReviewList.map((content) => {
        return (
            <tr>
                <th>{content.num}</th>
                <td>{content.title}</td>
                <td>{lastName(content.writer)}&#42;&#42;</td>
                <td>{content.createDate}</td>
                <td>{content.check}</td>
            </tr>
        );
    });


    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="OrderReview02">
            {/* <!-- main product detail --> */}
            <div class="container">
                {/* <!-- product detail dt 로 요약 --> */}

                <table class="review">

                    <tbody>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>조회</th>
                        </tr>
                        {singleReviewLi}
                        <tr>
                            <th colspan="5">
                                <a onClick={showModal}>상품후기쓰기 </a>
                                {modalOpen && <ModalBtnBasic setModalOpen={setModalOpen} />}
                                {/* <a onClick={openModal}>상품후기쓰기  */}
                                {/* <ReviewModal Open={isModalOpen} onClose={closeModal} /></a> */}
                                <a> 내가쓴글조회하기</a>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default OrderReview02;