import React, { useEffect } from 'react';
import '../../pages/Store/Store.css';
import Stores from '../../pages/Store/Stores';

function Store() {

    useEffect(() => {
        // 페이지 이동 시 스크롤을 상위로 올리기
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="Store">
            <Stores />
        </div>
    );
};

export default Store;