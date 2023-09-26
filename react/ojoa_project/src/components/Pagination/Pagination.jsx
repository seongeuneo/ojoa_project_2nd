import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="Pagination">
      {/* <!-- 페이지네이션 --> */}
      <div className="ec-base-paginate">
        <ol>
          <li><a href="/.html?page=1" className="first">&lt;&lt;</a></li>
          <li><a href="/.html?page=1">&lt;</a></li>
          {/* <a href="/.html?page=1" className="first"><img src="../../../images/btn_page_first.gif" alt="첫 페이지" /></a>
                <a href="/.html?page=1"><img src="../../../images/btn_page_prev.gif" alt="이전 페이지" /></a> */}
        </ol>
        <ol>
          <li className="record"><a href="" className="this">1</a></li>
        </ol>
        <ol>
          <li><a href="/.html?page=1">&gt;</a></li>
          <li><a href="/.html?page=1" className="last">&gt;&gt;</a></li>
        </ol>
        {/* <a href="/.html?page=1"><img src="../../../images/btn_page_next.gif" alt="다음 페이지" /></a>
                <a href="/.html?page=1" className="last"><img src="../../../images/btn_page_last.gif" alt="마지막 페이지" /></a> */}
      </div>
    </div>
  )
};

export default Pagination;