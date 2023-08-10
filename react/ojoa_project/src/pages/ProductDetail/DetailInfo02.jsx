import React from "react";
import "./ProductDetail.css";

function DetailInfo02() {
    return (
        <div className="DetailInfo02">
            {/* <!-- main product detail --> */}
            <div class="container">
                {/* <!-- product detail dt 로 요약 --> */}
                <div id="pd_section1"></div>
                <br />
                <br />
                <div class="pd_section">
                    <a href="#pd_section1"><strong>상품상세정보</strong></a>
                    <a href="#pd_section2"><strong>상품구매후기</strong></a>
                    <a href="#pd_section3"><strong>상품 Q&amp;A</strong></a>
                    <a href="#pd_section4"><strong>상품구매안내</strong></a>
                </div>

                {/* <!-- 상품상세정보 --> */}

                <div class="pd_part1">
                    {/* <img src="../images/pl_long_img.jpg" alt="" /> */}
                </div>
            </div>

        </div>
    )
};

export default DetailInfo02;