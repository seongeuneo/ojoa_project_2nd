import React from "react";
import "./AddCart.css";
import { Link } from "react-router-dom";


function AddCart({ closeModal, handleAddToCart }) {

    const handleAddAndGoToCart = () => {
        handleAddToCart(); // 장바구니에 상품 추가
        closeModal(); // 모달 닫기
    };

    return (
        <div className="AddCart">
            <div className="addAlarm">장바구니에 상품이 추가되었습니다.</div>
            <div className="sf_popup_bottom">
                <button type="button" className="btn later" onClick={closeModal}>계속 쇼핑하기</button>
                <Link to="../Cart/Cart" className="btn write" >
                    장바구니로 이동
                </Link>
            </div>
        </div>
    )
};

export default AddCart;