import React, { useState } from "react";
import "./ProductDetail.css";
import { NavLink, Routes, Route, useParams, Link } from "react-router-dom"
import DetailInfo01 from './DetailInfo01';
import OrderReview02 from './OrderReview02';
import ProdQna03 from './ProdQna03';
import PurGuide04 from './PurGuide04';
import mockList from '../../components/MockList/Chairs'
import Modal from 'react-modal';
import AddCart from './Modal/AddCart';




function ProductDetail({ handleCart }) {

    // 상품목록리스트에서 id 값에 따라 상품 상세 반영하기
    const { mockList_id } = useParams();
    const test = mockList.filter((content) => content.id === parseInt(mockList_id));
    const { id, imgNo, productName, productPriceFormatted, productPromotion, productInfo, productReview, productGrade } = test[0]
    //======================================
    // 수량 변경한 만큼 가격에 계산
    // const [count, setCount] = useState(1);



    const [count, setCount] = useState(1);
    const [mainImg, setMainImg] = useState(`../images/chair${imgNo}.jpg`);

    const onDecrease = () => {
        if (count >= 2) {
            setCount(count - 1);
        }
    };

    const onIncrease = () => {
        if (count >= 1) {
            setCount(count + 1);
        }
    };

    const sellPrice = productPriceFormatted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const sum = count * productPriceFormatted;
    const result = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const imgChange = (e) => {
        setMainImg(e);
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: id,
            imgNo: imgNo,
            productName: productName,
            productPriceFormatted: productPriceFormatted,
            productPromotion: productPromotion,
            productInfo: productInfo,
            productReview: productReview,
            productGrade: productGrade,
            quantity: count,
        };
        handleCart(cartItem);
    };


    // // 장바구니 추가 모달창 띄우기
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);


    function handleCartAndOpenModal() {
        handleAddToCart();
        openModal();
    }

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

            <div className="product_view">
                <h2>{productName}</h2>
                <table>
                    <caption>
                        <details className="hide">
                            <summary>상품정보</summary>
                            판매가&#44; 상품코드&#44; 옵션 및 결제금액 안내
                        </details>
                    </caption>

                    <tbody>
                        <tr>
                            <th>판매가</th>
                            <td className="price">{sellPrice}원</td>
                        </tr>
                        <tr>
                            <th>상품코드</th>
                            <td>0000{id}</td>
                        </tr>
                        <tr>
                            <th>제조사/공급사</th>
                            <td>OJOA &#47; 오조아생활연구소</td>
                        </tr>
                        <tr>
                            <th>구매수량</th>
                            <td>
                                <div className="pd_length">
                                    <button onClick={onDecrease}>-</button>
                                    <input type="number" min="1" value={count} />
                                    <button onClick={onIncrease}>+</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>사용가능쿠폰</th>
                            <td>
                                <select>
                                    <option>-</option>
                                    {/* <option>신규가입쿠폰 5%</option> */}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>옵션선택</th>
                            <td>
                                <select>
                                    <option>기본&#40; &#43;0  &#41;</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>배송비</th>
                            <td>무료배송</td>
                        </tr>
                        <tr>
                            <th>결제금액</th>
                            <td className="total"><strong>{result}</strong>원</td>
                        </tr>
                    </tbody>
                </table>

                <div className="pd_img">
                    <img src={mainImg} alt="" id="mainImg" />
                    <ul>
                        <li><img onClick={() => imgChange("/images/vintagefabricC1.jpg")} src="/images/vintagefabricC1.jpg" alt="" id="thumb1" /></li>
                        <li><img onClick={() => imgChange("/images/vintagefabricC2.jpg")} src="/images/vintagefabricC2.jpg" alt="" id="thumb2" /></li>
                        <li><img onClick={() => imgChange("/images/vintagefabricC3.jpg")} src="/images/vintagefabricC3.jpg" alt="" id="thumb3" /></li>
                        <li><img onClick={() => imgChange("/images/vintagefabricC4.jpg")} src="/images/vintagefabricC4.jpg" alt="" id="thumb4" /></li>
                    </ul>
                </div>

                <div className="pd_btns">
                    <a onClick={handleCartAndOpenModal} className="pd_btn1">장바구니</a>
                    <Modal className="ModalContent" handleCart={handleCart} isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <AddCart closeModal={closeModal} />
                    </Modal>
                    <Link to='../Cart/Cart' className="pd_btn2" onClick={() => handleAddToCart()}>구매하기</Link>
                </div>
            </div>
            <div className="PdIndex00">
                <div className="pd_section">
                    <a><NavLink to="./pages/ProductDetail/DetailInfo01"><strong>상품상세정보</strong></NavLink></a>
                    <a><NavLink to="./pages/ProductDetail/OrderReview02"><strong>상품구매후기</strong></NavLink></a>
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