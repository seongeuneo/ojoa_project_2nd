import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Header/Header.css';
import Modal from '../Modal/Modal';

function Header() {

    const handleLinkClick = () => {
        alert('해당 페이지는 현재 준비중 입니다.');
    };

    return (
        <>
            <header className='header'>
                <Link to="/qna" className="mtalk"><img src="/images/mtalk_icon.png" alt="mtalk" /></Link>
                <Link to="/qna" className="mchannel"><img src="/images/mchannel_icon.png" alt="mchannel" /></Link>
                <div id="mheader">
                    {/*---------------------------------------------------------*/}
                    {/* header */}
                    <div>
                        {/* 상단 로고 */}
                        <div>
                            <Link to="/"><img className="logo" src="/images/ojoa_logo_b.png" alt="logo" height="100px" /></Link>
                        </div>
                        <div className="search">
                            <Modal />
                        </div>
                        {/* 상단 네비 */}
                        <div className="navBar">
                            <ul>
                                <li><Link to="../Login">LOGIN </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../MyPage">MYPAGE </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Order">ORDER </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Cart">CART </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Qna">QNA </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Store">STORE </Link></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                </div>
            </header>
            {/*---------------------------------------------------------*/}
            {/* category_navi_drop_bar */}
            <div className="sticky" id="category_nav">
                <ul>
                    <li><Link to="#" onClick={handleLinkClick}>BEST</Link></li>
                    <li><Link to="#" onClick={handleLinkClick}>NEW</Link></li>
                    <li><Link to="#" onClick={handleLinkClick}>침대</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>싱글</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>더블</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" onClick={handleLinkClick}>소파</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>2인</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>3인</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" onClick={handleLinkClick}>책장</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>2단</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>3단</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" onClick={handleLinkClick}>옷장</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>2칸</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>3칸</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" onClick={handleLinkClick}>조명</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>스탠드형</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>탈부착형</Link></li>
                        </ul>
                    </li>
                    <li><Link to="./productList">의자(구현)</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>탁상의자</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>주방의자</Link></li>
                        </ul>
                    </li>
                </ul>

            </div>

        </>
    );
};

export default Header;