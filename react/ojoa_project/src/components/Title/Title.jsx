import '../Title/Title.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Title = () => {

    return (
        <div className="Title">
            <ul>
                <li className="txt_01"><Link to='./login'>Login</Link></li>
                <li className="txt_02"><Link to='./login'>Ojoa 로그인페이지입니다.</Link></li>
            </ul>
        </div>
    );
};

const Title1 = () => {

    return (
        <div className="Title">
            <ul>
                <li className="txt_01"><Link to='./mypage'>Mypage</Link></li>
                <li className="txt_02"><Link to='./mypage'>포인트적립 및 배송확인 등</Link></li>
            </ul>
        </div>
    );
};
export default Title;

            // <ul>
            //     <li className="txt_01"><Link to='./mypage'>Mypage</Link></li>
            //     <li className="txt_02"><Link to='./mypage'>포인트적립 및 배송확인 등</Link></li>
            // </ul>
            // <ul>
            //     <li className="txt_01"><Link to='./order'>Order</Link></li>
            //     <li className="txt_02"><Link to='./order'>주문내역조회</Link></li>
            // </ul>
            // <ul>
            //     <li className="txt_01"><Link to='./cart'>Cart</Link></li>
            //     <li className="txt_02"><Link to='./cart'>장바구니에 담긴 상품</Link></li>
            // </ul>
            // <ul>
            //     <li className="txt_01"><Link to='./qna'>QnA</Link></li>
            //     <li className="txt_02"><Link to='./qna'>Ojoa 문의게시판입니다.</Link></li>
            // </ul>

