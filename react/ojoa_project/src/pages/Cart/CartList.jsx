import '../../pages/Cart/Cart.css';

const CartList = () => {
    return (

        // list_detail -> CartList 로 바꿈 
        <div className="CartList">

            <table className="list_detail">

                <tr>
                    <td><input type="checkbox"
                        // id={cart.id}
                        // onChange={(e) => {
                        //     handleCheckList(e.currentTarget.checked, `${cart.id}`);
                        // }}
                        // checked={checkLists.includes(`${cart.id}`) ? true : false}
                    /></td>
                    <td><img class="cart_img" src={"../images/sofa.jpg"} alt="이미지1" /></td>

                    <td>
                        <div class="cart_mininame">[Ojoa 단독입점]<br />
                            2023 BEST SEASON</div>
                        <a class="cart_mainname" a href="#">여기에고유상품이름</a>
                    </td>

                    <td class="cart_saleprice">
                        <sup>15%&#8595;</sup><span>116,62원</span>
                        <div class="cart_li_price">상품개당가격</div>
                    </td>

                    <td>

                        <div className="cart_product_count">
                            <img className="minus"
                                src={"../images/minus.png"}
                                alt="minus"
                                // onClick={() => {
                                //     handleQuantity("minus", cart.id, cart.quantity - 1);
                                // }}
                            />

                            <div className="count">
                                <span>5</span>
                            </div>

                            <img className="plus"
                                src={"../images/cartplus.png"}
                                alt="plus"
                                // onClick={() => handleQuantity("plus", cart.id, cart.quantity + 1)}
                            />
                        </div>


                    </td>

                    <td>무료배송</td>
                    <td class="final_price">여기엔 갯수별가격
                        <div className="product_remove">
                            <img src={"/images/cancel.png"} alt="delete"/>
                        </div>
                    </td>
                </tr>

            </table>
        </div>

    );

};

export default CartList;