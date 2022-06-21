
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
                    <p>Qisqa nomi</p>
                    <p>Mansil</p>
                    <p>Shahar</p>
                </li>
                {
                    currentFilial.map((item,index)=>{
                        return <li key={index} className='filial_table_products'>
                            <p className='filial_table_product'>{item.short_name}</p>
                            <p className='filial_table_product'>{item.contract}</p>
                            <p className='filial_table_product'>{item.committee}</p>
                            <div className='filial_table_product'>
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