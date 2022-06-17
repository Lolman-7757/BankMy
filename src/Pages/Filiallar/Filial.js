
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Styles
import './Filial.css'
// Components
import { Input } from '@nextui-org/react'
import Pagination from '../../Components/Pagination/Pagination'

function Filial() {
    const [ filiallar, setFiliallar ] = useState([])


    const [ currentPage, setCurrentPage ] = useState(1);
    const [ filialsPerPage, setFilialsPerPage ] = useState(10)

    const lastFilialIndex = currentPage * filialsPerPage;
    const firstFilialIndex = lastFilialIndex - filialsPerPage;
    const currentFilial = filiallar.slice(firstFilialIndex,lastFilialIndex)

    useEffect(() => {
        setFiliallar(
            [
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
                {short_name:'Amaliyot boshqarmasi', contract:'Ishonchnoma',committee:'Kredit Kom',phone:'991234567',limit_credit:316},
            ]
        )
    },[]);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <section className='filial'>
            <h1 className='filial_title'>Filiallar</h1>
            <div className='filial_header'>
                <Link to='/filials/addfilial'>
                    Filial Qoshish
                    <i className='bx bx-plus-circle'></i>
                </Link>
                <Input
                    rounded
                    bordered
                    placeholder="Filial nomi..."
                    color="secondary"
                    width='300px'
                    className='filial_search'
                    contentRight={
                        <i className='bx bx-search-alt-2'></i>
                    }
                />
            </div>
            <div className='filial_table_block'>
            <ul className='filial_table'>
                <li className='filial_table_header'>
                    <div>Qisqa nomi</div>
                    <div>Shartnoma</div>
                    <div>Qo`mita</div>
                    <div>Raqam</div>
                    <div>Kredit Cheklash</div>
                    <div>Harakat</div>
                </li>
                {
                    currentFilial.map((item,index)=>{
                        return <li key={index}>
                            <div className=''>{item.short_name}</div>
                            <div className=''>{item.contract}</div>
                            <div className=''>{item.committee}</div>
                            <div className=''>{item.phone}</div>
                            <div className=''>{item.limit_credit}</div>
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
                itemsPerPage={filialsPerPage}
                totalItems={filiallar.length}
                paginate={paginate}
            />
            </div>
        </section>
    )
}

export default Filial