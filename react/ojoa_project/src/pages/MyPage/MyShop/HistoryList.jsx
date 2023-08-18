import '../MyShop/Mileage.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function HistoryList() {

    useEffect(() => {
        // 페이지 이동 시 스크롤을 상위로 올리기
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='HistoryList'>
            <div id='wrap'>
                <div id='container'>
                    <div id='contents'>
                        <div className="path">
                            <span></span>
                            <ol>
                                <li><Link to="/">홈</Link></li>
                                <li><Link to="/MyPage">&gt; &nbsp;&nbsp;마이쇼핑</Link></li>
                                <li title="현재 위치">&gt; &nbsp;&nbsp;적립금</li>
                            </ol>
                        </div>
                        <div>
                            <div className='headTltleArea'>
                                <h2>적립금</h2>
                                {/* <p>고객님의 사용가능 적립금 금액 입니다.</p> */}
                            </div>
                            <div className='BaseBox'>
                                <ul>
                                    <li>
                                        <strong className='title'>총 적립금 : </strong>
                                        <span className='data'>
                                            <span>&nbsp;35,640원</span>
                                        </span>
                                    </li>
                                    <li>
                                        <strong className='title'>사용가능 적립금 : </strong>
                                        <span className='data'>
                                            <span>&nbsp;10,000원</span>
                                        </span>
                                    </li>
                                    <li>
                                        <strong className='title'>사용된 적립금 : </strong>
                                        <span className='data'>
                                            <span>&nbsp;25,640원</span>
                                        </span>
                                    </li>
                                    <li>
                                        <strong className='title'>미가용 적립금 : </strong>
                                        <span className='data'>
                                            <span>&nbsp;300,000원</span>
                                        </span>
                                    </li>
                                    <li>
                                        <strong className='title'>환불예정 적립금 : </strong>
                                        <span className='data'>
                                            <span>&nbsp;0원</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className='ec-base-tab'>
                                <ul className='menu'>
                                    <li Link to=''><a>적립내역보기</a></li>
                                    <li Link to=''><a>미가용적립내역보기</a></li>
                                    <li Link to=''><a>미가용쿠폰/회원등급적립내역</a></li>
                                </ul>
                            </div>
                            <div className='HistoryList_inside'>
                                <div className='Base_Table_TypeList'>
                                    <table border="1" summary>
                                        <caption></caption>
                                        <colgroup>
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                        </colgroup>
                                        <thead><tr>
                                            <th scope="col">주문날짜</th>
                                            <th scope="col">적립금</th>
                                            <th scope="col">관련 주문</th>
                                            <th scope="col">내용</th>
                                        </tr>
                                        </thead>
                                        <tbody className=" center">
                                            <tr className="ec-base-table">
                                                <td>2023-06-07</td>
                                                <td className="right">1,000원</td>
                                                <td></td>
                                                <td className="left">신규회원 적립금</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <p className="message displaynone">적립금 내역이 없습니다.</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="ec-base-paginate"><a href="/myshop/mileage/historyList.html?page=1" className="first"><img src="../../../images/btn_page_first.gif" alt="첫 페이지" /></a>
                            <a href="/myshop/mileage/historyList.html?page=1"><img src="../../../images/btn_page_prev.gif" alt="이전 페이지" /></a>
                            <ol>
                                <li className="record"><p href="" className="this">1</p></li>
                            </ol>
                            <a href="/myshop/mileage/historyList.html?page=1"><img src="../../../images/btn_page_next.gif" alt="다음 페이지" /></a>
                            <a href="/myshop/mileage/historyList.html?page=1" className="last"><img src="../../../images/btn_page_last.gif" alt="마지막 페이지" /></a>
                        </div>
                        <div className="ec-base-help "><h3>적립금 안내</h3>
                            <div className="inner">
                                <ol className="historyinfo"><li className="item1 ">주문으로 발생한 적립금은 배송완료 후 1일 부터 실제 사용 가능한 적립금으로 전환됩니다. 배송완료 시점으로부터 1일 동안은 미가용 적립금으로 분류됩니다. </li>
                                    <li className="item2 ">미가용 적립금은 반품, 구매취소 등을 대비한 임시 적립금으로 사용가능 적립금으로 전환되기까지 상품구매에 사용하실 수 없습니다.</li>
                                    <li className="item3 ">사용가능 적립금(총적립금 - 사용된적립금 - 미가용적립금)은 상품구매 시 바로 사용가능합니다.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryList;