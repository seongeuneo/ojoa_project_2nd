import React from 'react';
import '../../pages/Cart/Cart.css';
import CartHeader from '../../pages/Cart/CartHeader';
import CartList from '../../pages/Cart/CartList';
import CartTotal from '../../pages/Cart/CartTotal';
import { Link } from "react-router-dom"

// class="cart_total" -> className="Cart" 이걸로 바꿈 => css 수정시 참고

const Cart = () => {

    return (
        <div className="Cart">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치"> &gt; &nbsp; Cart</li>
                </ol>
            </div>
            <div className="title">
                <h2>CART</h2>
                <div className="txt_01">장바구니에 담긴 상품</div>
            </div>
            <CartHeader />
            <CartList />
            <CartTotal />
        </div>
    );
};
export default Cart;

