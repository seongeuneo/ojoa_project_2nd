import '../../pages/Cart/Cart.css';

const Cart = () => {

    return (
// class="cart_total" -> className="Cart" 이걸로 바꿈 => css 수정시 참고        
        <div className="Cart">
                <table className="cart_list">
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th><button className="favor_btn">전체선택</button></th>
                            <th>상품정보</th>
                            <th>판매가</th>
                            <th>수량 옵션</th>
                            <th>배송비</th>
                            <th>합계</th>
                        </tr>
                    </thead>

                    <tbody className="list_detail">
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img className="cart_img" src={"../images/sofa.jpg"} alt="이미지1" /></td>
                            <td>
                                <div className="cart_mininame">[Ojoa 단독입점]</div>
                                <div className="cart_mininame">2023 BEST SEASON</div>
                                <a className="cart_mainname" a href="#">천연 소가죽 소파</a>
                            </td>
                            <td className="cart_li_price">
                                <sup>15%&#8595;</sup><span>116,62원</span>
                                <div className="cart_li_price">12,000,000원</div>
                            </td>
                            <td>
                                <div className="cart_opt">
                                    <input type="number" value="1" min="1" />
                                </div>
                                <button className="opt_orderbtn">주문하기</button>
                            </td>
                            <td>무료배송</td>
                            <td className="final_price">12,000,000 원</td>
                        </tr>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img className="cart_img" src={"../images/light.jpg"} alt="이미지1" /></td>
                            <td>
                                <div className="cart_mininame">[RPYAL FAMILY]</div>
                                <div className="cart_mininame">ENGLAND DESIGN BEST</div>
                                <a className="cart_mainname" a href="#">왕실 스탠 조명</a>
                            </td>
                            <td className="cart_li_price">
                                <sup>3%&#8595;</sup><span>116,62원</span>
                                <div className="cart_li_price">345,000,000원</div>
                            </td>
                            <td>
                                <div className="cart_opt">
                                    <input type="number" value="1" min="1" />
                                </div>
                                <button className="opt_orderbtn">주문하기</button>
                            </td>
                            <td>무료배송</td>
                            <td className="final_price">345,000,000 원</td>
                        </tr>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td><img className="cart_img" src={"../images/ktable.jpg"} alt="이미지1" /></td>
                            <td>
                                <div className="cart_mininame">[L.IKEA X Ojoa] 해외직구</div>
                                <div className="cart_mininame">SUMMER COLLECTION</div>
                                <a className="cart_mainname" a href="#">아일랜드 식탁</a>
                            </td>
                            <td className="cart_li_price">
                                <sup>5%&#8595;</sup><span>116,62원</span>
                                <div className="cart_li_price">678,000,000원</div>
                            </td>
                            <td>
                                <div className="cart_opt">
                                    <input type="number" value="1" min="1" />
                                </div>
                                <button className="opt_orderbtn">주문하기</button>
                            </td>
                            <td>무료배송</td>
                            <td className="final_price">67,800,000 원</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colspan="2">
                                <button className="favor_btn">장바구니 삭제</button>
                            </td>
                            <td></td>
                            <td colspan="4">
                                <div className="total_p">총 합계 금액 : 123,456,789 원</div>
                            </td>
                        </tr>
                    </tfoot>
                </table>

                <div className="cart_info">
                    <ul>
                        <li>Ojoa의 모든 상품은 100,000원 이상 구매시 무료배송 입니다.</li>
                        <li>결제 후 주소, 옵션 등 정보가 변경된 경우 교환이 불가하오니 신중히 구매 부탁드립니다.</li>
                        <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
                    </ul>
                </div>

     {/* <-------------  여기부터 버튼 시작   -----------------> */}
                <div className="final_btns">
                    <div className="button">
                        <p className="btnText">CANCEL</p>
                        <div className="btnTwo">
                            <p className="btnText2">X</p>
                        </div>
                    </div>

                    <div className="button">
                        <p className="btnText">PAY NOW</p>
                        <div className="btnTwo">
                            <p className="btnText2">GO!</p>
                        </div>
                    </div>
                </div>

            </div>
       
    );
};

export default Cart;

