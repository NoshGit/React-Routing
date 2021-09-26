import React, { useEffect } from 'react';
import './pagination.css'

function Pagination(props) {
    const {currentPage, itemsPerPage, total, numberClicked, match} = props;

    useEffect(()=>{
        console.log(`currentPage=${currentPage}, itemsPerPage=${itemsPerPage}, total=${total}`, match);
    },[currentPage, itemsPerPage, total])

    const handleClick = (e) => {
        numberClicked(e.currentTarget.id);
    }

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {        
      pageNumbers.push(i);
    }
    
    const renderPageNumbers = pageNumbers.map(number => {
        const activeClass = Number(currentPage) === number? 'active' : '';
        return (
            <li
                key={number}
                id={number}
                onClick={handleClick}
                className={`${activeClass} pagination-btn`}

            >
                <span>{number}</span>
            </li>
        )
    });

    return (
        <ul className="pagination-links">
            {renderPageNumbers}
        </ul>
    )
}

export default React.memo(Pagination);
