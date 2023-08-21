import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import "./QnaModal.css";
import mockList from "../../../data/ItemsData";
import { TodoDispatchContext } from "../Qna";

function QnaModal({ setModalOpe }) {

    const closeModal = () => {
        setModalOpe(false);
    };

    const { onCreate } = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    // => new 일정 처리할  onChangeContent 이벤트 핸들러 
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }; //onChangeContent

    // => new 일정을 onCreate(content) 함수를 이용해
    //    부모의 state 변수인 배열 todo 에 저장 
    const inputRef = useRef();
    const onSubmit = (e) => {
        // ** 기능 업그레이드 1
        // => 입력값 무결성 확인
        //    content 값이 비어있으면 input 에 focus 가 머물게 하여
        //    빈 Data 입력방지 기능
        // if (content === "") {
        if (!content) { // content 가 비어있으면 
            e.preventDefault();
            inputRef.current.focus();
            return;
        } else {
            onCreate(content); // 부모(App)로부터 전달받은 함수
        }
        setContent("");
    }; //onSubmit

    const onKeyDown = (e) => {
        if (e.keyCode === 13) { onSubmit(); }
    }; //onKeyDown







    const handleButtonClick = () => {
        alert('\n [Q & A] 문의 등록 기능은 현재 준비중 입니다.');
    };

    return (
        // 모달창을 useRef로 잡아준다.
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