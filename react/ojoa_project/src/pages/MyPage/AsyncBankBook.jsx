import "../MyPage/MyPage.css";
import { Link } from 'react-router-dom';

const AsyncBankBook = () => {

    return (
        <div className="container">
            <div className="myshop_asyncbankbook">
                <div>
                    <h2 id="h2_p">MY <span>PAGE</span></h2>
                    <p id="h2_p">마이페이지</p>
                    <p />
                </div>
                <ul>
                    <li>
                        <strong className="title">가용적립금</strong>
                        <strong className="data">10,000원</strong>
                        <Link to="#" className="btnNormal">조회</Link>
                    </li>
                    <li>
                        <strong className="title">총적립금</strong>
                        <strong className="data">35,640원</strong>
                    </li>
                    <li>
                        <strong className="title">사용적립금</strong>
                        <strong className="data">25,640원</strong>
                    </li>
                    <li>
                        <strong className="title">예치금</strong>
                        <strong className="data">300,000원</strong>
                        <Link to="#" className="btnNormal">조회</Link>
                    </li>
                    <li>
                        <strong className="title">총주문</strong>
                        <strong className="data">3,564,000원 (8회)</strong>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default AsyncBankBook;

