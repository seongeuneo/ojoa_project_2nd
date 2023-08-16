import '../../pages/Cart/Cart.css';

const CartHeader = () => {

    return (
        //cart_list -> CartHeader 로 이름 바꿈 
        <div className="CartHeader">

            <div className="cart_title_wrap">

                <div className="cart_title">
                    <button class="favor_btn">전체선택</button>
                    <span>상품정보</span>
                    <span>판매가</span>
                    <span>수량 옵션</span>
                    <span>배송비</span>
                    <span>합계</span>
                </div>
            </div>

        </div>

    );
};

export default CartHeader;

// th ->span 으로 다 바꿔줌
// tr -> 삭제