import React, { useState } from "react";
import './Qna.css';
import mockList from '../../data/ItemsData';
// import QnaPost from "./QnaPost";

const mockListQna = [
    {
        id: 0,
        imgNo: 4,
        num: 1,
        category: '상품문의',
        title: '상품 문의 입니다.',
        notification: '배송까지 얼마나 걸릴까요. 새벽배송 해줘요?',
        titleIcon: '[1]',
        writer: '강백호',
        date: '2023.06.13'
    },
    {
        id: 1,
        imgNo: 12,
        num: 2,
        category: '상품문의',
        title: '배송비 질문입니다.',
        notification: '왕좌의 게임에 나오는 철의 왕좌 같은데요. 추가 배송비가 있는지 궁금합니다. 정품 맞나요?',
        titleIcon: '[1]',
        writer: '정대만',
        date: '2023.08.05'
    },
]; // mockListQna

// 배열 속성 writer 입력시 성만 따오기
const lastName = (fullName) => {
    if (fullName.length > 0) {
        return fullName.charAt(0);
    };
    return;
};

function QnaListItem() {

    const [expandedId, setExpandedId] = useState(null);

    const handleTitleClick = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    return (
        <table className='qna_ListItem_container'>

            {mockListQna.map((item) => (
                <React.Fragment key={item.id}>
                    <tbody>
                        <tr className='qna_Lboard_st'>
                            <td className='qna_board_st1'>{item.num}</td>
                            <td className='qna_board_st2'><img src={`../../images/chair${item.imgNo}.jpg`} alt='상품' />{mockList.find(product => product.id === item.imgNo)?.productName}</td>
                            <td className='qna_board_st3'>{item.category}</td>
                            <td className='qna_board_st4'>
                                <div
                                    className='title_button'
                                    onClick={() => handleTitleClick(item.id)}
                                >
                                    {item.title} {item.titleIcon}
                                </div>
                            </td>
                            <td className='qna_board_st5'>{lastName(item.writer)}&#42;&#42;</td>
                            <td className='qna_board_st6'>{item.date}</td>
                        </tr>
                        {expandedId === item.id && (
                            <tr className='qna_board_st7'>
                                <td colSpan="6" className='notification_row'>
                                    {item.notification}
                                </td>
                            </tr>
                        )}
                    </tbody>

                </React.Fragment>
            ))}

        </table >
    )
}

export default QnaListItem;