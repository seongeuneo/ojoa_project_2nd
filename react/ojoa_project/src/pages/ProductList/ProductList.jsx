import React, { useContext, createContext, useReducer, useRef, useState } from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";
import Pagination from "../../components/Pagination/Pagination";
import PLFilter from "./PLFilter";
import { Link } from "react-router-dom";
import mockList from "../../components/MockList/Chairs";




function sortProducts(products, sortKey) {
    switch (sortKey) {
        case "신상품":
            return products.slice().sort((a, b) => b.id - a.id);
        case "상품명":
            return products.slice().sort((a, b) => a.productName.localeCompare(b.productName));
        case "낮은가격":
            return products.slice().sort((a, b) => parseFloat(a.productPriceFormatted.replace(/,/g, "")) - parseFloat(b.productPriceFormatted.replace(/,/g, "")));
        case "높은가격":
            return products.slice().sort((a, b) => parseFloat(b.productPriceFormatted.replace(/,/g, "")) - parseFloat(a.productPriceFormatted.replace(/,/g, "")));
        case "제조사":
            return products.slice().sort((a, b) => a.productInfo.localeCompare(b.productInfo));
        case "사용후기":
            return products.slice().sort((a, b) => parseInt(b.productReview) - parseInt(a.productReview));
        default:
            return products.slice().sort((a, b) => a.id - b.id);
    }
}


function ProductList() {

    const [sortKey, setSortKey] = useState(""); // 초기 정렬 기준: 신상품


    const sortedList = sortProducts(mockList, sortKey);

    const singleLi = sortedList.map((content) => {
        // ... (ProductListItem 렌더링 코드)

        return (
            <li key={content.id}>
                <ProductListItem content={content}>
                    <Link
                        className="productLink"
                        to={`/products/detail/${content.id}`}
                        key={content.id}></Link>
                </ProductListItem>
            </li>
        );
    });


    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;의자</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>CHAIR</h2>
                <div className="txt_01">의자 전체 상품</div>
            </div>
            <PLFilter numOfList={sortedList.length} setSortKey={setSortKey} />
            <ul className="pl_items">{singleLi}</ul>
            <Pagination />
        </div>

    )

};

export default ProductList;