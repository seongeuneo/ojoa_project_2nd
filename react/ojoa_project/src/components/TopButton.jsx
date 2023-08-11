import React, { useEffect, useState, Link } from 'react';
import './TopButton.css';

function TopButton() {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const handleShowButton = () => {
            window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
        };

        console.log(window.scrollY);
        window.addEventListener('scroll', handleShowButton);
        return () => {
            window.removeEventListener('scroll', handleShowButton);
        };
    }, []);
    return (
        showButton && (
            <div>
                <button className="scroll" onClick={scrollToTop}><img src="/images/btn_top.gif" alt="TopBtn"/></button>
            </div>
        )
    );
}

export default TopButton;