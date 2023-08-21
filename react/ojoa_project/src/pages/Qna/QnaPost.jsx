import React, { Fragment } from "react";
import "./Qna.css";

function QnaPost() {

    return (
        <React.Fragment>
            <table className='qna_titlelist_container'>
                <tbody>
                    <tr className='board_st'>
                        <td className='board_st'>존</td>
                        <td className='board_st'>나</td>
                        <td className='board_st'>짜</td>
                        <td className='board_st'>증</td>
                        <td className='board_st'>
                            <div className='title_button'>나
                            </div>
                        </td>
                        <td className='board_st'>네</td>
                        <td className='board_st'>!</td>
                    </tr>
                    <tr className='board_st'>
                        <td colSpan="6" className='notification_row'>존나짜증나네 대박!
                        </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default QnaPost;