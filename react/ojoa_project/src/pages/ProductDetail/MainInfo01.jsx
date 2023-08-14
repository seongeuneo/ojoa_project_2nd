import React from "react";
import "./ProductDetail.css";
import { useState, useRef } from "react";


function MainInfo() {


    //======================================
    // 수량 변경한 만큼 가격에 계산
    const [count, setCount] = useState(1);

    const onDecrease = () => {
        if (count >= 2) {
            setCount(count - 1);
        }
    }
    const onIncrease = () => {
        if (count >= 1) {

            setCount(count + 1);
        }
    }

    const sum = count * 199000;
    //======================================
    // 대표 썸네일 이미지 클릭시 변경

    const [mainImg, setMainImg] = useState("../images/vintagefabricC1.jpg");

    const imgChange = (e) => {
        setMainImg(e)
    };
    //======================================




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
                            <td class="price">199&#44;000원</td>
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
                                    <button onClick={onDecrease}>-</button>
                                    <input type="number" min="1" value={count} />
                                    <button onClick={onIncrease}>+</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>사용가능쿠폰</th>
                            <td>
                                <select>
                                    <option>-</option>
                                    {/* <option>신규가입쿠폰 5%</option> */}
                                </select>
                            </td>
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
                            <td class="total"><strong>{sum}</strong>원</td>
                        </tr>
                    </tbody>
                </table>

                <div class="pd_img">
                    <img src={mainImg} alt="" id="mainImg" />
                    <ul>
                        <li><img onClick={() => imgChange("../images/vintagefabricC1.jpg")} src="../images/vintagefabricC1.jpg" alt="" id="thumb1" /></li>
                        <li><img onClick={() => imgChange("../images/vintagefabricC2.jpg")} src="../images/vintagefabricC2.jpg" alt="" id="thumb2" /></li>
                        <li><img onClick={() => imgChange("../images/vintagefabricC3.jpg")} src="../images/vintagefabricC3.jpg" alt="" id="thumb3" /></li>
                        <li><img onClick={() => imgChange("../images/vintagefabricC4.jpg")} src="../images/vintagefabricC4.jpg" alt="" id="thumb4" /></li>
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