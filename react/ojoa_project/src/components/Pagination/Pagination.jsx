import React from "react";
import "./Pagination.css";

function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Pagination">
      <div className="ec-base-paginate">
        <ol>
          <li>
            <a href="#" className="first" onClick={() => onPageChange(1)}>
              &lt;&lt;
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
            >
              &lt;
            </a>
          </li>
        </ol>
        <ol>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={currentPage === number ? "record" : null}
            >
              <a href="#" onClick={() => onPageChange(number)}>
                {number}
              </a>
            </li>
          ))}
        </ol>
        <ol>
          <li>
            <a
              href="#"
              onClick={() =>
                onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)
              }
            >
              &gt;
            </a>
          </li>
          <li>
            <a href="#" className="last" onClick={() => onPageChange(totalPages)}>
              &gt;&gt;
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Pagination;