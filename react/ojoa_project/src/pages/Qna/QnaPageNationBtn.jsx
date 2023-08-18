import './Qna.css';
import React from 'react';
import { Link } from 'react-router-dom';

const QnaPageNationBtn = () => {

    return (
        <div className="qna_pagenation_btn">
            <Link to="#"><img src="../images/btn_page_prev.gif" alt="이전페이지" /></Link>
            <ul>
                <li><Link to="#" className="qna_other">1</Link></li>
                <li><Link to="#" className="qna_other">2</Link></li>
                <li><Link to="#" className="qna_other">3</Link></li>
                <li><Link to="#" className="qna_other">4</Link></li>
                <li><Link to="#" className="qna_other">5</Link></li>
                <li><Link to="#" className="qna_other">6</Link></li>
                <li><Link to="#" className="qna_other">7</Link></li>
                <li><Link to="#" className="qna_other">8</Link></li>
                <li><Link to="#" className="qna_other">9</Link></li>
                <li><Link to="#" className="qna_other">10</Link></li>
            </ul>
            <Link to="#"><img src="../images/btn_page_next.gif" alt="다음페이지" /></Link>
        </div>
    );
};
export default QnaPageNationBtn;