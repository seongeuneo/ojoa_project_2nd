import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Header/Header.css';
// import bodyFloating from './pages/bodyFloating';

function Header() {
    return (
        <>
            <header>
                <div id="mheader">
                    {/*---------------------------------------------------------*/}
                    {/* header */}
                    <div>
                        {/* 상단 로고 */}
                        <div>
                            <Link to="/"><img className="logo" src="/images/ojoa_logo_b.png" alt="logo" height="80px" /></Link>
                        </div>
                        {/* 상단 네비 */}
                        <div className="navBar">
                            <ul>
                                <li><Link to="../login">LOGIN </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../MyPage">MYPAGE </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Order">ORDER </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../cart">CART </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Store">STORE </Link></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="search">
                        <input type="text" name="query" defaultValue />
                        <Link to="#"><img src="/images/btn_search.gif" alt="search"/></Link>
                    </div>
                </div>
            </header>
            {/*---------------------------------------------------------*/}
            {/* category_navi_drop_bar */}
            <div className="sticky" id="category_nav">
                <ul>
                    <li><Link to="#">BEST</Link></li>
                    <li><Link to="#">NEW</Link></li>
                    <li><Link to="#">침대</Link>
                        <ul>
                            <li><Link to="#">싱글</Link></li>
                            <li><Link to="#">더블</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">소파</Link>
                        <ul>
                            <li><Link to="#">2인</Link></li>
                            <li><Link to="#">3인</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">책장</Link>
                        <ul>
                            <li><Link to="#">2단</Link></li>
                            <li><Link to="#">3단</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">옷장</Link>
                        <ul>
                            <li><Link to="#">2칸</Link></li>
                            <li><Link to="#">3칸</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">조명</Link>
                        <ul>
                            <li><Link to="#">스탠드형</Link></li>
                            <li><Link to="#">탈부착형</Link></li>
                        </ul>
                    </li>
                    <li><Link to="./ProductList">의자(구현)</Link>
                        <ul>
                            <li><Link to="#">탁상의자</Link></li>
                            <li><Link to="#">주방의자</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default Header;