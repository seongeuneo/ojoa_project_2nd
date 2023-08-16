import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { NavLink, Routes, Route, useParams } from "react-router-dom"
import DetailInfo01 from './DetailInfo01';
import OrderReview02 from './OrderReview02';
import ProdQna03 from './ProdQna03';
import PurGuide04 from './PurGuide04';
import ProdMain from './ProdMain';



function ProductDetail() {



    return (
        <div className="ProductDetail">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><NavLink to="/">홈</NavLink></li>
                    <li><NavLink to="/ProductList">&gt; &nbsp;&nbsp;의자</NavLink></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;현재 위치</li>
                </ol>
            </div>
            {/* <!-- main product detail --> */}
            {/* <!-- product detail dt 로 요약 --> */}

            <ProdMain />
            <div className="PdIndex00">
                <div class="pd_section">
                    <a><NavLink to="./pages/ProductDetail/DetailInfo01"><strong>상품상세정보</strong></NavLink></a>
                    <a><NavLink to="./pages/ProductDetail/orderReview02"><strong>상품구매후기</strong></NavLink></a>
                    <a><NavLink to="./pages/ProductDetail/prodQna03"><strong>상품 Q&amp;A</strong></NavLink></a>
                    <a><NavLink to="./pages/ProductDetail/purGuide04"><strong>상품구매안내</strong></NavLink></a>
                </div>
            </div>

            <Routes>
                <Route path="/pages/ProductDetail/DetailInfo01" element={<DetailInfo01 />} />
                <Route path="/pages/ProductDetail/OrderReview02" element={<OrderReview02 />} />
                <Route path="/pages/ProductDetail/ProdQna03" element={<ProdQna03 />} />
                <Route path="/pages/ProductDetail/PurGuide04" element={<PurGuide04 />} />
            </Routes>




        </div >





    )
};

export default ProductDetail;