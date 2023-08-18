import React from "react";
import "./QnaModal.css";
// import { Link } from 'react-router-dom';
// import { useState } from "react";

function QnaModal({ closeModal }) {


    return (
        <div id="QnaModal_Background">
            <div className="QnaModal_container">
                <div className="path">
                </div>
                <div>
                    <div className='headTltleArea'>
                        <h2>Q & A</h2>
                    </div>

                    <form id="Qna_write_info" action="" method="post">
                        <table>
                            <tr>
                                <td> 글쓰기</td>
                            </tr>
                            <tr>
                                <td>
                                    <table class="qna_table2">
                                        <tr>
                                            <td>작성자</td>
                                            <td><input type='text' /> </td>
                                        </tr>

                                        <tr>
                                            <td>제목</td>
                                            <td><input type='text' /></td>
                                        </tr>

                                        <tr>
                                            <td>내용</td>
                                            <td><textarea name='content' /></td>
                                        </tr>

                                        <tr>
                                            <td>비밀번호</td>
                                            <td><input type='password' /></td>
                                        </tr>
                                    </table>

                                    <center>
                                        <input type="submit" value="작성" />
                                    </center>
                                </td>
                            </tr>
                        </table>


                    </form >
                </div>
            </div >
        </div > //QnaModal_Background
    )
};

export default QnaModal;