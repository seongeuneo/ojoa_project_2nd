import './Qna.css';
import React from 'react';
import { Link } from 'react-router-dom';

const QnaFilter = () => {

    return (
        <div className='qna_filter_container'>
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
                    <option value="10"></option>
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
                        <input type="text" /><Link to="#" class="qna_board_find_btn">찾기</Link>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};
export default QnaFilter;