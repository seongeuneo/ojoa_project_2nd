import React, { useEffect } from 'react';
import '../../pages/MyPage/MyPage.css';
import ThumbNail from '../../pages/MyPage/ThumbNail';
import AsyncBankBook from '../../pages/MyPage/AsyncBankBook';
import OrderState from '../../pages/MyPage/OrderState';
import MyshopMain from '../../pages/MyPage/MyshopMain';

function MyPage() {

    useEffect(() => {
        // 페이지 이동 시 스크롤을 상위로 올리기
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="MyPage">
            <ThumbNail />
            <AsyncBankBook />
            <OrderState />
            <MyshopMain />
        </div>
    );
};

export default MyPage;