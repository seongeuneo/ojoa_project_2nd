import './Info.css';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className="Info">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치"> &gt; &nbsp; Join</li>
                </ol>
            </div>
            <div className="title">
                <h2>JOIN</h2>
                <div className="txt_01">회원가입</div>
            </div>

            <form action="/login/info/agree" name="personalInfo">
                <table className="personal_info">
                    <caption>
                        <h3>회원정보</h3>
                    </caption>

                    <tr>
                        <th>
                            <label for="name"><span>&#42;</span>이름</label>
                        </th>
                        <td>
                            <input type="text" name="name" minlength="2" maxlength="7" id="name" />
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label for="userid"><span>&#42;</span>아이디</label>
                        </th>
                        <td>
                            <input type="text" name="id" maxlength="15" id="userid" />
                            <input className="inside_btn" type="submit" name="overlap" value="중복확인" />
                            <span>아이디 입력 후 '중복확인' 버튼을 눌러주세요</span>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label for="pw"><span>&#42;</span>비밀번호</label>
                        </th>
                        <td>
                            <input type="password" name="pwd" minlength="5" maxlength="15" id="pw" />
                            <span>비밀번호는 5~15자 이내 특수문자의 조합으로 입력이 가능합니다.</span>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label for="pwdcheck"><span>&#42;</span>비밀번호 확인</label>
                        </th>
                        <td>
                            <input type="password" name="pwdcheck" maxlength="15" id="pwdcheck" />
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label for="address"><span>&#42;</span>주소</label>
                        </th>
                        <td>
                            <div className="input_address">
                                <input type="text" name="post_code" maxlength="7" placeholder="우편번호입력" id="address" />
                                <form action="https://www.epost.kr/search.RetrieveIntegrationNewZipCdList.comm"
                                    target="_blank"><input className="inside_btn" type="submit" name="find_postcode"
                                        value="우편번호찾기" /></form>
                            </div>
                            <div>
                                <input type="text" name="address" />
                                <input type="text" name="address_detail" placeholder="상세주소" />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label for="cellphone"><span>&#42;</span>휴대폰 번호</label>
                        </th>
                        <td>
                            <div>
                                <input type="tel" name="first_phone_number" value="010" size="1" readonly />
                                &ndash;
                                <input type="tel" name="second_phone_number" minlength="3" maxlength="4" size="1" id="cellphone" />
                                &ndash;
                                <input type="tel" name="last_phone_number" minlength="4" maxlength="4" size="1" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="emailid">이메일</label>
                        </th>
                        <td>
                            <input type="text" name="emailid" id="emailid" />
                            @
                            <input type="text" name="mail" placeholder="직접 입력" />
                            <select name="email_domain">
                                <option value="self">선택</option>
                                <option value="naver">naver.com</option>
                                <option value="daum">hanmail.net</option>
                                <option value="gmail">gmail.com</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th>마케팅 수신 동의</th>
                        <td>
                            <div className="agree_check">
                                <input type="radio" name="agree" id="agree_1" />
                                <label for="agree_1">이메일</label>
                                <input type="radio" name="agree" id="agree_2" />
                                <label for="agree_2">SMS</label>
                                <input type="radio" name="agree" id="agree_3" checked /><label for="agree_3">수신받지않음</label>
                                <span>마케팅 수신에 동의하실 경우, Ojoa의 소식을 빠르게 받아보실 수 있습니다.</span>
                            </div>
                        </td>
                    </tr>

                </table>

                <div className="input_warn">* 는 필수 입력사항입니다.</div>

            </form>

            <div className="join_btn">
                <input className="out_btn2" type="button" name="cancel" value="취소하기" />
                <Link to="/login/info/agree">
                    <input className="out_btn3" type="submit" name="finish" value="작성완료" />
                </Link>
            </div>

        </div>

    );

};

export default Info;