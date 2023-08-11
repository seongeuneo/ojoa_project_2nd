import React from "react";
import "./ProductDetail.css";
import MainInfo01 from "./MainInfo01";
import DetailInfo02 from "./DetailInfo02";
import OrderReview03 from "./OrderReview03";
import ProdQna04 from "./ProdQna04";
import PurGuide05 from "./PurGuide05";

function ProductDetail() {
    return (
        <div className="ProductDetail">
            <MainInfo01 />
            <div>
                <DetailInfo02 />
                <OrderReview03 />
                <ProdQna04 />
                <PurGuide05 />
            </div>
        </div>
    )
};

export default ProductDetail;