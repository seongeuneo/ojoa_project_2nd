import React from "react";
import "./QnaModal.css";
import mockList from "../../../data/ItemsData";

function QnaModal({ closeModal }) {

    const handleButtonClick = () => {
        alert('\n [Q & A] 문의 등록 기능은 현재 준비중 입니다.');
    };

    return (
        <div id="QnaModal_Background">
            <div className="qnaModal_container2">
                <img onClick={closeModal} className="qnaModal_close_rotate" src="./images/search_X.png" alt="search_x" />
            </div>

            {/* 내부 글쓰기 */}
            <div className="path">
                <div>
                    <div className='qna_writeArea'>
                        <h2>Q & A</h2>
                    </div>
                    <select name="board_category" id="board_category1">
                        <option value="1">전체</option>
                        <option value="2">상품문의</option>
                        <option value="3">배송문의</option>
                        <option value="4">주문/결제</option>
                        <option value="5">취소문의</option>
                        <option value="6">반품/교환</option>
                        <option value="7">환불문의</option>
                        <option value="8">재입고문의</option>
                        <option value="9">기타문의</option>
                        <option value="10"></option>
                    </select>
                    <select name="board_category" id="board_category2">
                        <option>제품목록</option>
                        {mockList.map((item) => (
                            <React.Fragment key={item.id}>
                                <option value={item.imgNo}>{item.productName}</option>
                            </React.Fragment>
                        ))}
                    </select>
                    <form className="qna_write_info" method="post">
                        <table className="qna_board_table">
                            <tbody>
                                <tr>
                                    <th scope="row"><label>작성자</label></th>
                                    <td className="qna_writeid"><input type="text" placeholder="작성자명을 입력하세요." /></td>
                                </tr>

                                {/* <tr>
                                    <th scope="row"><label for="qna_bPassword">비밀번호</label></th>
                                    <td className="qna_writepassword"><input type="text" /></td>
                                </tr> */}

                                <tr>
                                    <th scope="row"><label>제  목</label></th>
                                    <td className="qna_writetitle"><input type="text" placeholder="제목을 입력하세요." /></td>
                                </tr>

                                <tr>
                                    <th scope="row"><label>내  용</label></th>
                                    <td className="qna_writecontent">
                                        <input type="text" name="bContent" id="qna_bContent" placeholder="문의 하실 내용을 입력하세요." />
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                        <div className="qna_btnSet">
                            <p onClick={handleButtonClick} className="qna_writesubmit_btn" >등록하기</p>

                        </div>
                            {/* <QnaListItem qnaList={qnaList} /> */}

                    </form >
                </div>
            </div >

        </div >
    )
};

export default QnaModal;