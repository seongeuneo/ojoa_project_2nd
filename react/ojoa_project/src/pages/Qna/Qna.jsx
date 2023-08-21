// import React from 'react';
import './Qna.css';
import QnaThumbNail from './QnaThumbNail';
import QnaFilter from './QnaFilter';
import QnaListItem from './QnaListItem';
import QnaTitleList from './QnaTitleList';
import QnaPageNationBtn from './QnaPageNationBtn';
import Modal from 'react-modal';
import { ModalProvider } from './QnaModal/ModalContext';
import QnaWriteBtn from './QnaWriteBtn';
import React from "react";
import QnaPost from './QnaPost';

Modal.setAppElement('#root');

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
                        <QnaPageNationBtn />
            </div>
        </ModalProvider>
    );
}

export default Qna;