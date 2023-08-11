import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

const Navigation = (props, context) => {
    return (
        <div className="Nav">
            <div className="inner">
                <Link to="/">Home</Link>
                <Link to="../Login">Login</Link>
                <Link to="../Mypage">Mypage</Link>
                <Link to="../Qna">Qna</Link>
                <Link to="../Store">Store</Link>
            </div>
        </div>
    );
};
export default Navigation;
