import '../Qna/Qna.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Qna() {
    return (
        <div className="qna_wrap">
            <div className="qna_content">
                
                {/* <!-- 검색하기 --> */}
                <div className="qna_board_sort">
                    <select name="board_category">
                        <option value="1">전체</option>
                        <option value="2">상품문의</option>
                        <option value="3">배송문의</option>
                        <option value="4">주문/결제</option>
                        <option value="5">취소문의</option>
                        <option value="6">반품/교환</option>
                        <option value="7">환불문의</option>
                        <option value="8">재입고문의</option>
                        <option value="9">기타문의</option>
                    </select>
                    <form className="qna_board_find">
                        <fieldset>
                            <legend>게시물 검색</legend>
                            <select name="search_date" id="search_date">
                                <option value="period">기간</option>
                                <option value="all">전체</option>
                                <option value="week">일주일</option>
                                <option value="month">한달</option>
                                <option value="month3">세달</option>
                            </select>
                            <select name="search_key" id="search_key">
                                <option value="subject">제목</option>
                                <option value="content">내용</option>
                                <option value="writer_name">글쓴이</option>
                                <option value="mamber_id">아이디</option>
                                <option value="nick_name">별명</option>
                                <option value="product">상품정보</option>
                            </select>
                            <input type="text" />
                            <Link to="#" className="qna_board_find_btn">찾기</Link>
                        </fieldset>
                    </form>
                </div>
                <hr />
                {/* <!-- 게시판 --> */}
                <div className="qna_board">
                    
                    <div className="qna_borar_list1">
                    <div class="qna_board_name">번호</div>
                            <div class="board_st">공지</div>
                            <div class="board_st">공지</div>
                            <div>5023</div>
                            <div>5022</div>
                            <div>5021</div>
                            <div>5020</div>
                            <div>5019</div>
                            <div>5018</div>
                            <div>5017</div>
                            <div>5016</div>
                            <div>5015</div>
                            <div>5014</div>
                    </div>

                    <div className="qna_board_list2">
                    <div className="qna_board_name">상품정보</div>
                            <div>-</div>
                            <div>-</div>
                            <div><img src="../images/chair6.jpg"/><span>[이끼 의자]</span></div>
                            <div><img src="../images/chair13.jpg"/><span>[진기의 철의왕좌]</span></div>
                            <div><img src="../images/chair14.jpg"/><span>[희상 의자]</span></div>
                            <div><img src="../images/chair15.jpg"/><span>[원희 의자]</span></div>
                            <div><img src="../images/chair16.jpg"/><span>[성은 의자]</span></div>
                            <div></div>
                            <div><img src="../images/chair11.jpg"/><span>[조 의자]</span></div>
                            <div></div>
                            <div><img src="../images/chair3.jpg"/><span>[푸바오 의자]</span></div>
                            <div></div>
                    </div>

                    <div className="qna_board_list3">
                    <div className="qna_board_name">카테고리</div>
                            <div></div>
                            <div></div>
                            <div>상품문의</div>
                            <div>상품문의</div>
                            <div>기타문의</div>
                            <div>상품문의</div>
                            <div>기타문의</div>
                            <div>주문/결제</div>
                            <div>배송문의</div>
                            <div>재입고문의</div>
                            <div>상품문의</div>
                            <div>배송문의</div>
                    </div>

                    <div className="qna_board_list4">
                    <div className="qna_board_name">제목</div>
                            <div className="board_st"><Link to="#">리뷰작성 포인트 적립안내</Link>
                                <img src="../images/new_icon.png" alt="new"/>
                                <span className="txtnum">[16]</span>
                            </div>
                            <div class="board_st"><a href="#">오조아 온라인몰 배송관련 안내</a>
                                <img src="../images/hit_icon.png"/>
                                <span className="txtnum">[10]</span>
                            </div>
                            <div><Link to="#">정말 이끼가 자랐는데요...</Link>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">앉아도 안찔리나요?</Link>
                                <img src="../images/lock_icon.png"/>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">재입고 예정 문의드립니다.</Link>
                                <img src="../images/lock_icon.png"/>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">손가락은 꺾이나요?</Link>
                                <img src="../images/lock_icon.png"/>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">아무리봐도 바게트같은데....</Link>
                                <img src="../images/lock_icon.png"/>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">현금영수증 관련 문의</Link>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">언제 배송되나요??</Link>
                                <img src="../images/lock_icon.png"/>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">재입고 일정은 어떻게 되나요?</Link>
                                <img src="../images/lock_icon.png"/>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">푸바오 한마리 개별 구매 가능한가요?</Link>
                                <img src="../images/lock_icon.png"/>
                                <span className="txtnum">[1]</span>
                            </div>
                            <div><Link to="#">해외배송가능?</Link>
                                <span className="txtnum">[1]</span>
                            </div>
                    </div>

                    <div className="qna_board_list5">
                    <div className="qna_board_name">작성자</div>
                            <div>ojoa</div>
                            <div>ojoa</div>
                            <div>오***</div>
                            <div>조***</div>
                            <div>아***</div>
                            <div>아***</div>
                            <div>주***</div>
                            <div>조***</div>
                            <div>아***</div>
                            <div>유***</div>
                            <div>그***</div>
                            <div>츄***</div>
                    </div>

                    <div className="qna_board_list6">
                    <div className="qna_board_name">작성일</div>
                            <div>2023/6/23</div>
                            <div>2023/5/23</div>
                            <div>2023/6/22</div>
                            <div>2023/6/22</div>
                            <div>2023/6/22</div>
                            <div>2023/6/22</div>
                            <div>2023/6/22</div>
                            <div>2023/6/22</div>
                            <div>2023/6/21</div>
                            <div>2023/6/21</div>
                            <div>2023/6/20</div>
                            <div>2023/6/20</div>
                    </div>

                </div>
                {/* <!-- 글쓰기 버튼 --> */}
                <div className="qna_board_write"><span><Link to="#">글쓰기</Link></span></div>

                {/* <!-- 하단 페이지 숫자 클릭 --> */}
                <div className="qna_number_btn">
                <Link to="#"><img src="../images/btn_page_prev.gif" alt="이전페이지"/></Link>
                        <ol>
                            <li><a href="#" class="qna_other">1</a></li>
                            <li><a href="#" class="qna_other">2</a></li>
                            <li><a href="#" class="qna_other">3</a></li>
                            <li><a href="#" class="qna_other">4</a></li>
                            <li><a href="#" class="qna_other">5</a></li>
                            <li><a href="#" class="qna_other">6</a></li>
                            <li><a href="#" class="qna_other">7</a></li>
                            <li><a href="#" class="qna_other">8</a></li>
                            <li><a href="#" class="qna_other">9</a></li>
                            <li><a href="#" class="qna_other">10</a></li>
                        </ol>
                        <Link to="#"><img src="../images/btn_page_next.gif" alt="다음페이지"/></Link>

                </div>
            </div>
        </div>
    ); //return
} //Qna

export default Qna;