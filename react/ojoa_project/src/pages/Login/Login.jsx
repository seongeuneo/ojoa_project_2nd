import '../Login/Login.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <main className="login_page">
                <div className="login_container">
                    <form auction="">
                        <div className="login_content">
                            <div className="login">
                                <fieldset className="login_fieldset">
                                    <legend>회원로그인</legend>
                                    <label className="id">
                                        <span><img src="../images/account.png" alt="아이디" /></span>
                                        <input type="text" name="userID" placeholder="아이디" minLength="3" />
                                    </label>
                                    <label className="password">
                                        <span><img src="../images/password.png" alt="비밀번호" /></span>
                                        <input type="password" name="userPSW" placeholder="비밀번호" minLength="3" />
                                    </label>
                                    <div className="login_btn">
                                        <Link to="../my_page/my_page.html">로그인</Link>
                                    </div>
                                    <div className="security">
                                        <img src="../images/ico_access.gif" alt="보안접속" />
                                        "보안접속"
                                    </div>
                                    <div className="login_forget">
                                        <label>
                                            <input type="checkbox" />아이디 기억하기
                                        </label>
                                    </div>
                                    <div className="login_find">
                                        <ul>
                                            <li>
                                                <Link to="#">아이디찾기</Link>
                                            </li>
                                            <li>&nbsp;|&nbsp;</li>
                                            <li>
                                                <Link to="#">비밀번호찾기</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cboth"></div>
                                    <div className="login_sns">
                                        <p className="sns">
                                            <Link to="#" target="_blank"><img src="../images/btn_naver_login.gif" alt='네이버로그인' /></Link>
                                        </p>
                                        <p className="sns">
                                            <Link to="#" target="_blank"><img src="../images/btn_facebook_login.gif" alt='페이스북로그인' /></Link>
                                        </p>
                                        <p className="sns">
                                            <Link to="#" target="_blank"><img src="../images/btn_kakao_login.gif" alt='카카오톡로그인' /></Link>
                                        </p>
                                    </div>
                                    <div className="cboth"></div>
                                </fieldset>
                            </div>
                            <div className="login_join">
                                <div className="login_join_area">
                                    <div className="login_join_title">회원가입</div>
                                    "아직 회원이 아니십니까?"
                                    <br />
                                    "회원을 위한 다양한 혜택이 준비되어 있습니다."
                                </div>
                                <div className="login_join_btn">
                                    <Link to="../join/join.html">회원가입</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <hr className="layout" />
        </div>
    ); //return
} //Login

export default Login;