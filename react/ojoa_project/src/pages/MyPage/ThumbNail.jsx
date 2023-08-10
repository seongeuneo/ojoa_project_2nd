import "../MyPage/MyPage.css";
import React from 'react';

const ThumbNail = () => {

    return (
        <div className="container">
            <div className="base-box">
                <p className="thumbnail">
                    <img src="../images/img_member_default.gif" alt="썸네일" /></p>
                <div className="description">
                    <span>저희 쇼핑몰을 이용해 주셔서 감사합니다. <span><strong>켄드릭 라마</strong></span> 님은 <strong>[<span>킹쿤타
                        회원</span>]</strong> 회원이십니다.</span>
                </div>
            </div>
        </div>
    );
};
export default ThumbNail;