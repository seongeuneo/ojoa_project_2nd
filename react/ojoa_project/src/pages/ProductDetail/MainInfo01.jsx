import React from "react";
import "./ProductDetail.css";

function MainInfo() {
    return (
        <div className="MainInfo">
            {/* <!-- main product detail --> */}
            {/* <!-- product detail dt 로 요약 --> */}

            <div class="product_view">
                <h2>빈티지페브릭 의자</h2>
                <table>
                    <caption>
                        <details class="hide">
                            <summary>상품정보</summary>
                            판매가&#44; 상품코드&#44; 옵션 및 결제금액 안내
                        </details>
                    </caption>

                    <tbody>
                        <tr>
                            <th>판매가</th>
                            <td class="price">199&#44;000</td>
                        </tr>
                        <tr>
                            <th>상품코드</th>
                            <td>C004843</td>
                        </tr>
                        <tr>
                            <th>제조사/공급사</th>
                            <td>OJOA &#47; 오조아생활연구소</td>
                        </tr>
                        <tr>
                            <th>구매수량</th>
                            <td>
                                <div class="pd_length">
                                    <input type="number" min="1" value="1" />
                                    <a href="#a">증가</a>
                                    <a href="#a">감소</a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>사용가능쿠폰</th>
                            <td>0개</td>
                        </tr>
                        <tr>
                            <th>옵션선택</th>
                            <td>
                                <select>
                                    <option>기본&#40;	&#43;0	&#41;</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>배송비</th>
                            <td>무료배송</td>
                        </tr>
                        <tr>
                            <th>결제금액</th>
                            <td class="total"><strong>199&#44;000</strong>원</td>
                        </tr>
                    </tbody>
                </table>

                <div class="pd_img">
                    <img src="../images/chair0.jpg" alt="" />
                    <ul>
                        <li class="on"><a href="./product_detail_img2.html"><img src="../images/chair0_2.jpg" alt="" /></a></li>
                        <li><a href="./product_detail_img3.html"><img src="../images/chair0_3.jpg" alt="" /></a></li>
                        <li><a href="./product_detail_img4.html"><img src="../images/chair0_4.jpg" alt="" /></a></li>
                    </ul>
                </div>

                <div class="pd_btns">
                    <a href="#a" class="pd_btn1">장바구니</a>
                    <a href="../login/login.html" class="pd_btn2">구매하기</a>
                </div>
            </div>
        </div>





    )
};

export default MainInfo;