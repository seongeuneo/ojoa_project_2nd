import './Qna.css';
import React from "react";


// const mockTodoList02 = [
//     {
//         num: 1,
//         itemImg: '',
//         itemInfo: '[이끼의자]',
//         category: '상품문의',
//         title: '정말 이끼가 자랐어요..',
//         qnapost: '오원희 내용샘플',
//         titleIcon: '[1]',
//         writer: '오원희',
//         // createDate: new Date().getTime()
//     },
//     {
//         num: 2,
//         itemimg: '',
//         itemInfo: '[진기의 철의왕좌]',
//         category: '상품문의',
//         title: '앉아도 찔리진 않을까요?',
//         qnapost: '어성은 내용샘플',
//         titleIcon: '[1]',
//         writer: '어성은',

//     },
// ]; // mockTodoList

function QnaListItem() {

    return (
        <div className="qna_listitem_container">
            <div class="qna_board">
                <div class="qna_borar_list1">
                    <div class="board_st">1</div>
                    <div class="board_st">2</div>
                </div>

                <div class="qna_board_list2">
                    <div><img src="../images/chair6.jpg" /><span>[이끼 의자]</span></div>
                    <div><img src="../images/chair13.jpg" /><span>[진기의 철의왕좌]</span></div>
                </div>

                <div class="qna_board_list3">
                    <div>상품문의</div>
                    <div>상품문의</div>
                </div>

                <div class="qna_board_list4">
                    <div class="board_st">리뷰작성 포인트 적립안내
                        <img src="../images/new_icon.png" alt="new" />
                        <span class="txtnum">[16]</span>
                    </div>
                    <div class="board_st">오조아 온라인몰 배송관련 안내
                        <img src="../images/hit_icon.png" />
                        <span class="txtnum">[10]</span>
                    </div>
                </div>

                <div class="qna_board_list5">
                    <div>오***</div>
                    <div>조***</div>
                </div>

                <div class="qna_board_list6">
                    <div>2023/6/23</div>
                    <div>2023/5/23</div>
                </div>
            </div>
        </div>
    )
}

export default QnaListItem;