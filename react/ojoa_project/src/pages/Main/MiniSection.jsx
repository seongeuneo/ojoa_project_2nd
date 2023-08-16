import '../../pages/Main/Main.css';
import React from 'react';

const MiniSection = () => {

    return (
        // main_col -> MiniSection
        <div className="MiniSection">

            <div className="mcol1">
                <div className="colsection">
                    <a href="./product_detail/product_detail.html">
                        <div className="img_top">2022 F/W BEST</div>
                        <img className="colsec_img" src={"./images/sofa.jpg"} alt="소가죽소파" />

                        <div className="colsec_info">
                            <div className="colsec_mini">[Ojoa 단독입점]<br/>
                                                        2022 SEASON BEST</div>
                            <div className="colsec_name">천연 소가죽 소파</div>
                            <div className="colsec_price">123,456 원<sup>5%</sup></div>
                        </div>
                    </a>
                    {/* <input type="checkbox" id="heart1" />
                    <label for="heart1"><i className="fa-regular fa-heart"></i></label> */}
                </div>

                {/* <-- 두번째 항목  --> */}

                <div className="colsection">
                    <a href="./product_detail/product_detail.html">
                        <div className="img_top">브랜드 기획전</div>
                        <img className="colsec_img" src={"./images/brownchair.jpg"} alt="거실의자" />

                        <div className="colsec_info">
                            <div className="colsec_mini">BROWN TOM X Ojoa<br/>
                                                    Sepcial Colaboration</div>
                            <div className="colsec_name">브라운 거실의자</div>
                            <div className="colsec_price">123,456 원<sup>5%</sup></div>
                        </div>
                    </a>
                    {/* <input type="checkbox" id="heart2" />
                    <label for="heart2"><i className="fa-regular fa-heart"></i></label> */}
                </div>
            </div>

            {/* <-- 세번째 항목  --> */}

            <div className="mcol2">
                <div className="colsection">
                    <a href="./product_detail/product_detail.html">
                        <div className="img_top">Ojoa's BEST ITEM</div>
                        <img className="colsec_img" src={"./images/bed.jpg"} alt="원목침대" />

                        <div className="colsec_info">
                            <div className="colsec_mini">[ACE BED] 입점상품 <br/>
                                                        BRANDNEW ITEM</div>
                            <div className="colsec_name">노르웨이원목 침대</div>
                            <div className="colsec_price">123,456 원 <sup>10%</sup></div>
                        </div>
                    </a>
                    {/* <input type="checkbox" id="heart3" />
                    <label for="heart3"><i className="fa-regular fa-heart"></i></label> */}
                </div>

                {/* <-- 네번째 항목  --> */}

                <div className="colsection">
                    <a href="./product_detail/product_detail.html">
                        <div className="img_top">SPECIAL ITEM</div>
                        <img className="colsec_img" src={"./images/light.jpg"} alt="거실조명" />

                        <div className="colsec_info">
                            <div className="colsec_mini">[ROYAL FAMILY] <br/>
                                                        ENGLAND DESIGN BEST</div>
                            <div className="colsec_name">왕실 스탠 조명</div>
                            <div className="colsec_price">123,456 원<sup>7%</sup></div>
                        </div>
                    </a>
                    {/* <input type="checkbox" id="heart4" />
                    <label for="heart4"><i className="fa-regular fa-heart"></i></label> */}
                </div>
            </div>


            {/* <-- 다섯번째 항목  --> */}

            <div className="mcol3">
                <div className="colsection">
                    <a href="./product_detail/product_detail.html">
                        <div className="img_top">해외 직배송</div>
                        <img className="colsec_img" src={"./images/ktable.jpg"} alt="아일랜드식탁" />

                        <div className="colsec_info">
                            <div className="colsec_mini">[L.IKEA X Ojoa] 해외 직구<br/>
                                                                SUMMER COLLECTION</div>
                            <div className="colsec_name">고급 아일랜드 식탁</div>
                            <div className="colsec_price">123,456 원<sup>20%</sup></div>
                        </div>
                    </a>
                    {/* <input type="checkbox" id="heart5" />
                    <label for="heart5"><i className="fa-regular fa-heart"></i></label> */}
                </div>

                {/* <-- 여섯번째 항목  --> */}

                <div className="colsection">
                    <a href="./product_detail/product_detail.html">
                        <div className="img_top">CLASSIC ITEM</div>
                        <img className="colsec_img" src={"./images/kchair.jpg"} alt="바의자" />

                        <div className="colsec_info">
                            <div className="colsec_mini">[BLACK LABEL]<br/>
                                                        MODERN BAR ITEM </div>
                            <div className="colsec_name">클래식 스탠드 의자</div>
                            <div className="colsec_price">123,456 원<sup>10%</sup></div>
                        </div>
                    </a>
                    {/* <input type="checkbox" id="heart6" />
                    <label for="heart6"><i className="fa-regular fa-heart"></i></label> */}
                </div>
            </div>
        </div>

    );
};

export default MiniSection;