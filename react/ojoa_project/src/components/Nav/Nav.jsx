import '../Nav/Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className="Nav">
                <ul><li><Link to='/Login'>Home &gt; Login</Link></li></ul>
                <ul><li><Link to='/Mypage'>Home &gt; Mypage</Link></li></ul>
                <ul><li><Link to='/Order'>Home &gt; Order</Link></li></ul>
                <ul><li><Link to='/Cart'>Home &gt; Cart</Link></li></ul>
                <ul><li><Link to='/Qna'>Home &gt; Qna</Link></li></ul>
                <ul><li><Link to='/Store'>Home &gt; Store</Link></li></ul>
            </div>
        </nav>
    );
}

export default Nav;
