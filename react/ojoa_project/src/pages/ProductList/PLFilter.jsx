import React from "react";
import "./PLFilter.css";

function PLFilter({numOfList}) {

    


    return (
        <div className="PLFilter">
            <div class="product_function">
                <p class="product_count">등록제품 : {numOfList} 개</p>
                <ul class="product_compare">
                    <li><a href="#">신상품</a></li>
                    <li><a href="#">상품명</a></li>
                    <li><a href="#">낮은가격</a></li>
                    <li><a href="#">높은가격</a></li>
                    <li><a href="#">제조사</a></li>
                    <li><a href="#">사용후기</a></li>
                </ul>
            </div>
        </div>
    )
};

export default PLFilter;