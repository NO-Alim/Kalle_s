import React from 'react'

const Pagination = ({ postPerPage, totalPosts,paginate,currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            <ul>
                {pageNumbers.map((item,ind) => (
                    <li key={item} className={`${item === currentPage ? 'active' : null}`}>
                        <span onClick={() => paginate(item)}>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
