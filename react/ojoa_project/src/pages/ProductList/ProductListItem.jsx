import React from "react";
import "./ProductListItem.css";
import { NavLink } from "react-router-dom";

const ProductListItem = ({imgNo, productName, productPriceFormatted, productPromotion, productInfo, productReview, productGrade}) => {
    


        return (
            <div className="ProductListItem">
                <section className="pl_section">
                    <ul className="prodItems">
                        <li className="pl_thumb_img">
                            <a><NavLink to="/ProductDetail"><img src={`../images/chair${imgNo}.jpg`} /></NavLink>

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

                        <li className="pl_a"><a><NavLink to="/ProductDetail">{productName}</NavLink></a></li>
                        <li className="pl_b"><a><NavLink to="/ProductDetail">{productPriceFormatted}원
                            <span> {productPromotion}%</span></NavLink></a></li> 
                        <li className="pl_c"><a><NavLink to="/ProductDetail">{productInfo}</NavLink></a></li>
                        <li className="pl_d"><a><NavLink to="/ProductDetail">리뷰 <span>{productReview}</span> 평점 *
                            <span>{productGrade}/5</span></NavLink></a></li>
                    </ul>
                </section>
            </div>
        )
    

}; //ProductList

export default ProductListItem;