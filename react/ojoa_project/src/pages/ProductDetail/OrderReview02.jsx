import React from "react";
import "./ProductDetail.css";

function OrderReview02() {
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
                        <tr>
                            <th><a href="#a">4</a></th>
                            <td><a href="#a">만족</a></td>
                            <td><a href="#a">오&#42;&#42;</a></td>
                            <td><a href="#a">2023&#45;03&#45;14</a></td>
                            <td><a href="#a">48</a></td>
                        </tr>
                        <tr>
                            <th><a href="#a">3</a></th>
                            <td><a href="#a">이걸 살까 말까 고민한 저를 후회합니다</a></td>
                            <td><a href="#a">이&#42;&#42;</a></td>
                            <td><a href="#a">2021&#45;12&#45;28</a></td>
                            <td><a href="#a">269</a></td>
                        </tr>
                        <tr>
                            <th><a href="#a">2</a></th>
                            <td><a href="#a">100% 만족합니다</a></td>
                            <td><a href="#a">유&#42;&#42;</a></td>
                            <td><a href="#a">2021&#45;12&#45;14</a></td>
                            <td><a href="#a">244</a></td>
                        </tr>
                        <tr>
                            <th><a href="#a">1</a></th>
                            <td><a href="#a">친구 선물해 줬더니 너무 좋아하네요</a></td>
                            <td><a href="#a">어&#42;&#42;</a></td>
                            <td><a href="#a">202&#45;11&#45;29</a></td>
                            <td><a href="#a">265</a></td>
                        </tr>
                        <tr>
                            <th colspan="5">
                                <a href="#a">상품후기쓰기</a>
                                <a href="#a">내가쓴글조회하기</a>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default OrderReview02;