import "../MyPage/MyPage.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalBtnBasic from "./ModalBtnBasic";
import './ModalBtn.css';
import React from "react";

const AsyncBankBook = () => {

    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="container">
            <div className="myshop_asyncbankbook">
                <div>
                    <h2 id="h2_p">MY <span>PAGE</span></h2>
                    <p id="h2_p">마이페이지</p>
                </div>
                <ul>
                    <li>
                        <strong className="title">가용적립금</strong>
                        <strong className="data">10,000원</strong>
                        {/* <button className="btnNormal">조회</button> */}
                        <button onClick={showModal} className="btnNormal" >조회</button>
                        {modalOpen && <ModalBtnBasic setModalOpen={setModalOpen} />}
                    </li>
                    <li>
                        <strong className="title">총적립금</strong>
                        <strong className="data">35,640원</strong>
                    </li>
                    <li>
                        <strong className="title">사용적립금</strong>
                        <strong className="data">25,640원</strong>
                    </li>
                    <li>
                        <strong className="title">예치금</strong>
                        <strong className="data">300,000원</strong>
                        <Link to="/qaweasd" className="btnNormal">조회</Link>
                    </li>
                    <li>
                        <strong className="title">총주문</strong>
                        <strong className="data">3,564,000원 (8회)</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default AsyncBankBook;

