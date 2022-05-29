import React from 'react'
import './Pagination.css';

function Pagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(totalItems/itemsPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <ul className='pagination'>
            {
                pageNumbers.map((number,id)=>(
                    <li key={id} className='pagination_item' onClick={() => paginate(number)}>
                            {number}
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination