
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Styles
import './Maqsad.css'
// Components
import { Input } from '@nextui-org/react'
import Pagination from '../../Components/Pagination/Pagination'

function Maqsad() {
    const [ maqsadlar, setMaqsadlar ] = useState([])


    const [ currentPage, setCurrentPage ] = useState(1);
    const [ maqsadsPerPage, setMaqsadsPerPage ] = useState(10)

    const lastMaqsadIndex = currentPage * maqsadsPerPage;
    const firstMaqsadIndex = lastMaqsadIndex - maqsadsPerPage;
    const currentMaqsad = maqsadlar.slice(firstMaqsadIndex,lastMaqsadIndex)

    useEffect(() => {
        setMaqsadlar(
            [
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
                {name:'ReneTrade',code:123456789},
            ]
        )
    },[]);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <section className='filial'>
            <h1 className='filial_title'>Maqsadlar</h1>
            <div className='filial_header'>
                <Link to='/maqsad/addmaqsad'>
                    Maqsad Qoshish
                    <i className='bx bx-plus-circle'></i>
                </Link>
                <Input
                    rounded
                    bordered
                    placeholder="Maqsad nomi..."
                    color="secondary"
                    width='300px'
                    className='filial_search'
                    contentRight={
                        <i className='bx bx-search-alt-2'></i>
                    }
                />
            </div>
            <div className='filial_table_block'>
            <ul className='maqsad_table'>
                <li className='maqsad_table_header'>
                    <div>Maqsad nomi</div>
                    <div>Maqsad kodi</div>
                </li>
                {
                    currentMaqsad.map((item,index)=>{
                        return <li key={index}>
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
                itemsPerPage={maqsadsPerPage}
                totalItems={maqsadlar.length}
                paginate={paginate}
            />
            </div>
        </section>
    )
}

export default Maqsad