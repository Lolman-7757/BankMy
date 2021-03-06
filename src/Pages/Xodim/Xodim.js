import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Input } from '@nextui-org/react'
import Pagination from '../../Components/Pagination/Pagination'

// Styles
import './Xodim.css'

function Xodim() {
    const [ xodimlar, setXodimlar ] = useState([])


    const [ currentPage, setCurrentPage ] = useState(1);
    const [ xodimsPerPage, setXodimsPerPage ] = useState(10)

    const lastXodimIndex = currentPage * xodimsPerPage;
    const firstXodimIndex = lastXodimIndex - xodimsPerPage;
    const currentXodim = xodimlar.slice(firstXodimIndex,lastXodimIndex)

    useEffect(() => {
        setXodimlar(
            [
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789},
                {branch:'Amaliyot', section:'Ishonchnoma',name:'Surname',job:'bankir',code:123456789}
            ]
        )
    },[]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className='xodim'>
            <h1 className='filial_title'>Xodimlar</h1>
            <div className='filial_header'>
                <Link to='/xodim/addxodim'>
                    Xodim Qoshish
                    <i className='bx bx-plus-circle'></i>
                </Link>
                <Input
                    rounded
                    bordered
                    placeholder="Xodim nomi..."
                    color="secondary"
                    width='300px'
                    className='filial_search'
                    contentRight={
                        <i className='bx bx-search-alt-2'></i>
                    }
                />
            </div>
            <div className='xodim_table_block'>
            <ul className='xodim_table'>
                <li className='xodim_table_header'>
                    <p>Fillial</p>
                    <p>Bo'lim</p>
                    <p>Ismi</p>
                    <p>Paroli</p>
                    <p></p>
                </li>
                {
                    currentXodim.map((item,index)=>{
                        return <li key={index} className='xodim_table_product client_row' >
                            <div className=''>{item.branch}</div>
                            <div className=''>{item.section}</div>
                            <div className=''>{item.name}</div>
                            <div className=''>{item.code}</div>
                            <div className=''>
                                <button><i className='bx bx-trash'></i></button>
                                <button><i className='bx bx-edit-alt'></i></button>
                                {/* <button><i className='bx bx-trash'></i></button> */}
                            </div>
                        </li>
                    })
                }
            </ul>
            <Pagination
                itemsPerPage={xodimsPerPage}
                totalItems={xodimlar.length}
                paginate={paginate}
            />

            </div>
        </section>
    )
}

export default Xodim