import './Qna.css';
import React from "react";

// const mockTodoList01 = [
//     {
//         num: '공지',
//         itemInfo: '-',
//         category: '-',
//         title: '리뷰작성 포인트 적립안내',
//         titleIcon: '[16]',
//         writer: 'ojoa',
//         date: '2023.06.23'
//     },
//     {
//         num: '공지',
//         itemInfo: '-',
//         category: '-',
//         title: 'ojoa 온라인몰 배송관련 안내',
//         titleIcon: '[10]',
//         writer: 'ojoa',
//         date: '2023.05.23'
//     },
// ]; // mockTodoList

function QnaTitleList() {

    return (
        <div className="qna_titlelist_container">
            <div class="qna_board">
                <div class="qna_borar_list1">
                    <div class="qna_board_name">번호</div>
                    <div class="board_st">공지</div>
                    <div class="board_st">공지</div>
                </div>

                <div class="qna_board_list2">
                    <div class="qna_board_name">상품정보</div>
                    <div>-</div>
                    <div>-</div>
                </div>

                <div class="qna_board_list3">
                    <div class="qna_board_name">카테고리</div>
                    <div></div>
                    <div></div>
                </div>

                <div class="qna_board_list4">
                    <div class="qna_board_name">제목</div>
                    <div class="board_st"><a href="#">리뷰작성 포인트 적립안내</a>
                        <img src="../images/new_icon.png" alt="new" />
                        <span class="txtnum">[16]</span>
                    </div>
                    <div class="board_st"><a href="#">오조아 온라인몰 배송관련 안내</a>
                        <img src="../images/hit_icon.png" />
                        <span class="txtnum">[10]</span>
                    </div>
                </div>

                <div class="qna_board_list5">
                    <div class="qna_board_name">작성자</div>
                    <div>ojoa</div>
                    <div>ojoa</div>
                </div>

                <div class="qna_board_list6">
                    <div class="qna_board_name">작성일</div>
                    <div>2023/6/23</div>
                    <div>2023/5/23</div>
                </div>
            </div>
        </div>
    )
}

export default QnaTitleList;