import "./ProductList.css";


const ProductList = () => {

    return (
        <div className="ProductList">
            <section className="pl_section pl_section1">
                <ul className="pl_items">

                    <li className="pl_thumb_img">
                        <a href="../product_detail/product_detail.html"><img src={"../images/chair0.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="../product_detail/product_detail.html">빈티지페브릭 의자</a></li>
                    <li className="pl_b"><a href="../product_detail/product_detail.html">199,000원
                        <span>24%</span></a></li>
                    <li className="pl_c"><a href="../product_detail/product_detail.html">상세페이지 있음</a></li>
                    <li className="pl_d"><a href="../product_detail/product_detail.html">리뷰 <span>999</span> 평점 *
                        <span>4.8/5</span></a></li>

                </ul>

                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair1.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">보송보송 의자</a></li>
                    <li className="pl_b"><a href="#a">390,000원 <span>24%</span></a></li>
                    <li className="pl_c"><a href="#a">무릉도원</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>2</span> 평점 * <span>4.5/5</span></a></li>
                </ul>

                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair4.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">노란 의자</a></li>
                    <li className="pl_b"><a href="#a">1,200,000원 <span>11%</span></a></li>
                    <li className="pl_c"><a href="#a">머슥터드</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>6</span> 평점 * <span>3.8/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair5.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">입술 의자</a></li>
                    <li className="pl_b"><a href="#a">120,000원 <span>8%</span></a></li>
                    <li className="pl_c"><a href="#a">썰면 두접시</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>1</span> 평점 * <span>3.5/5</span></a></li>
                </ul>
            </section>

            {/* -- 두번째줄 -- */}
            <section className="pl_section pl_section2">
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair6.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">이끼 의자</a></li>
                    <li className="pl_b"><a href="#a">690,000원 <span>13%</span></a></li>
                    <li className="pl_c"><a href="#a">녹즙 녹즙</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>3</span> 평점 * <span>3.4/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair7.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">브라운 의자</a></li>
                    <li className="pl_b"><a href="#a">1,200,000원 <span>26%</span></a></li>
                    <li className="pl_c"><a href="#a">구름 위에 앉은 듯한 착석감</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>9</span> 평점 * <span>4.6/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair8.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">핑크 의자</a></li>
                    <li className="pl_b"><a href="#a">90,000원 <span>95%</span></a></li>
                    <li className="pl_c"><a href="#a">마감세일 합니다</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>99</span> 평점 * <span>3.8/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a">
                            <img src={"../images/chair9.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">편한 의자</a></li>
                    <li className="pl_b"><a href="#a">120,000원 <span>5%</span></a></li>
                    <li className="pl_c"><a href="#a">인체공학적으로 편한 의자</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>129</span> 평점 * <span>4.2/5</span></a>
                    </li>
                </ul>

            </section>


            {/* -- 세번째줄 -- */}
            <section className="pl_section pl_section3">
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair10.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">오 의자</a></li>
                    <li className="pl_b"><a href="#a">20,000원 <span>95%</span></a></li>
                    <li className="pl_c"><a href="#a">MD 강추</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>19</span> 평점 * <span>3.8/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair11.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">조 의자</a></li>
                    <li className="pl_b"><a href="#a">389,000원 <span>12%</span></a></li>
                    <li className="pl_c"><a href="#a">오조아 베스트셀러</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>9999</span> 평점 * <span>4.4/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair12.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">아 의자</a></li>
                    <li className="pl_b"><a href="#a">99,000원 <span>11%</span></a></li>
                    <li className="pl_c"><a href="#a">50차 재입고</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>3</span> 평점 * <span>4.6/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair3.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">푸바오 의자</a></li>
                    <li className="pl_b"><a href="#a">90,000원 <span>14%</span></a></li>
                    <li className="pl_c"><a href="#a">판다가 오백마리</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>10</span> 평점 * <span>4.9/5</span></a></li>
                </ul>
            </section>

            {/* -- 마지막줄 -- */}
            <section className="pl_section pl_section4">
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair13.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">진기의 철의 왕좌</a></li>
                    <li className="pl_b"><a href="#a">999,999,999원</a></li>
                    <li className="pl_c"><a href="#a">MD 소장품</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>1</span> 평점 * <span>3.6/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair14.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">희상 의자</a></li>
                    <li className="pl_b"><a href="#a">550,000원 <span>3%</span></a></li>
                    <li className="pl_c"><a href="#a">미니멀한 디자인</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>12</span> 평점 * <span>4.1/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair15.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">원희 의자</a></li>
                    <li className="pl_b"><a href="#a">420,000원</a></li>
                    <li className="pl_c"><a href="#a">마미손</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>29</span> 평점 * <span>2.8/5</span></a></li>
                </ul>
                <ul className="pl_items">
                    <li className="pl_thumb_img">
                        <a href="#a"><img src={"../images/chair16.jpg"} />
                            <div className="pl_icon">
                                <a className="pd_cart" href="#a">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart" href="#a">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>
                    <li className="pl_a"><a href="#a">성은 의자</a></li>
                    <li className="pl_b"><a href="#a">350,000원</a></li>
                    <li className="pl_c"><a href="#a">바게트같지만 아님</a></li>
                    <li className="pl_d"><a href="#a">리뷰 <span>19</span> 평점 * <span>3.9/5</span></a></li>
                </ul>
            </section>
        </div>

    );
};

export default ProductList;