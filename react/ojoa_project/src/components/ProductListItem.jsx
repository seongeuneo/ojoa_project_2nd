import React from "react";
import "./ProductListItem.css";
import { useState } from "react";

const ProductListItem = ({imgNo, productName, productPriceFormatted, productInfo}) => {

 
    return (

        <div className="ProductListItem">
                    <section className="pl_section">
                        <ul>
                            <li>
                        <ul className="pl_items">
                            <li className="pl_thumb_img">
                                <a href="../product_detail/product_detail.html"><img src={`../images/chair${imgNo}.jpg`} />
                                    <div className="pl_icon">
                                        <a className="pd_cart" href="#a">
                                            <img src={"../images/cart_icon.png"} alt="장바구니" />
                                        </a>
                                        <a className="pd_heart" href="#../public/a">
                                            <img src={"../images/heart_icon.png"} alt="관심상품" />
                                        </a>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <ul className="prodInfo">
                            <li className="pl_a"><a href={"../product_detail/product_detail.html"}>{productName}</a></li>
                            <li className="pl_b"><a href={"../product_detail/product_detail.html"}>{productPriceFormatted}원
                                <span>24%</span></a></li>
                            <li className="pl_c"><a href={"../product_detail/product_detail.html"}>{productInfo}</a></li>
                            <li className="pl_d"><a href={"../product_detail/product_detail.html"}>리뷰 <span>999</span> 평점 *
                                <span>4.8/5</span></a></li>
                        </ul>
                        </li>
                        </ul>
                    </section>
        </div>
    )

}; //ProductList

export default ProductListItem;