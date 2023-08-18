import '../../pages/NotFound/NotFound.css'
import React, { useEffect } from 'react';

const NotFound = () => {

    useEffect(() => {
        // 페이지 이동 시 스크롤을 상위로 올리기
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className='NotFound'>
            <div className='error'>
                <h1>404 Error</h1>
                <h4>Ooops, page not found</h4>
            </div>
        </div>
    );
};

export default NotFound;