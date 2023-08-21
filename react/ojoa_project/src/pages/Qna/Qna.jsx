// import React from 'react';
import './Qna.css';
import QnaThumbNail from './QnaThumbNail';
import QnaFilter from './QnaFilter';
import QnaListItem from './QnaListItem';
import QnaTitleList from './QnaTitleList';
import Modal from 'react-modal';
import { ModalProvider } from './QnaModal/ModalContext';
import QnaWriteBtn from './QnaWriteBtn';
import React from "react";
import QnaPost from './QnaPost';

Modal.setAppElement('#root');

function reducer(state, action) {
    switch (action.type) {
        case "INIT": {
            return action.dataList;
        }
        case "Create": {
            const newState = [action.newItem, ...state];
            localStorage.setItem("todo", JSON.stringify(newState));
            return newState;
        }
        default: return state;
    }; //switch
} //reducer

// 1) Context 생성
// => 불필요한 랜더링을 방지하여 최적화 하기위해 
//    Context 를 역할별로 분리한다.
export const TodoStateContext = React.createContext();
// => todo 의 변경에 영향받는 컴포넌트를 위한 Context 
export const TodoDispatchContext = React.createContext();
// => dispath 함수 onCreate, onUpdate, onDelete 의 변경에
//    영향받는 컴포넌트를 위한 Context

function Qna() {

    return (
        <ModalProvider>
            <div className="Qna">
                <QnaThumbNail />
                <QnaFilter />
                <QnaTitleList />
                <QnaListItem />
                {/* <QnaPost/> */}
                <QnaWriteBtn />
                {/* <QnaPageNationBtn /> */}
            </div>
        </ModalProvider>
    );
}

export default Qna;