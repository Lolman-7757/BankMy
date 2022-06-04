import React from 'react';
import './Pagination.css';

function Pagination({ itemsPerPage, totalItems, paginate }) {
    
    const pageNumber = [];

    for(let i=1; i<=Math.ceil(totalItems/itemsPerPage);i++){
        pageNumber.push(i)
    }

    return(

        <ul className='pagination'>
            {
                pageNumber?.map((item,index)=>(
                    <li className='pagination_item' key={index} onClick={()=>paginate(item)}>{item}</li>
                ))
            }
        </ul>
    )
}

export default Pagination