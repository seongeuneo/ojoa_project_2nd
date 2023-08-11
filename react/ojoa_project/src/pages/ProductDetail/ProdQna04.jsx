import React from "react";
import "./ProductDetail.css";

function ProdQna04() {
    return (
        <div className="ProdQna04">
            {/* <!-- main product detail --> */}
            <div class="container">
                {/* <!-- product detail dt 로 요약 --> */}

                <div id="pd_section3"></div>
                <br />
                <br />
                <div class="pd_section">
                    <a href="#pd_section1"><strong>상품상세정보</strong></a>
                    <a href="#pd_section2"><strong>상품구매후기</strong></a>
                    <a href="#pd_section3"><strong>상품 Q&amp;A</strong></a>
                    <a href="#pd_section4"><strong>상품구매안내</strong></a>
                </div>

                <table class="pd_qna">

                    <tbody>
                        <tr>
                            <td>게시물이 없습니다</td>
                        </tr>
                        <tr>
                            <th>
                                <a href="#a">상품문의하기</a>
                                <a href="#a">모두보기</a>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
};

export default ProdQna04;