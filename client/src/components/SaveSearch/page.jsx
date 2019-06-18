/* eslint-disable jsx-a11y/anchor-is-valid */
//Using Pagination -the sequence of numbers assigned to pages in a book or periodical.
//PropTypes - a type script to check your whole application
//Lodash - a Javascript library that delivers consitency performance and other essentials
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li
                        key={page}
                        className={page === currentPage ? "page-item active" : "page-item"}
                    >
                        <a className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;