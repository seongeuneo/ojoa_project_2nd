import "../MyPage/MyPage.css";
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import React from "react";

const AsyncBankBook = () => {

    const handleLinkClick = () => {
        alert('해당 페이지는 현재 준비중 입니다.');
    };

    return (
        <div className="container">
            <div className="myshop_asyncbankbook">
                <div className="sub_title">
                    <h2 id="h2_p">MY <span>PAGE</span></h2>
                    <p id="h2_p">마이페이지</p>
                </div>
                <ul>
                    <li>
                        <strong className="title">가용적립금</strong>
                        <strong className="data">10,000원</strong>
                        <Link to='/MyPAge/Mileage'><button className="btnNormal">조회</button></Link>
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
                        <button onClick={handleLinkClick} className="btnNormal" >조회</button>
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

