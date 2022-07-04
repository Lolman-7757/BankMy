import React, {useState,useEffect} from 'react'
import { Input } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination/Pagination'

import './Mahsulot.css'

function Mahsulot() {

    const [ addForm, setAddForm ] = useState('add_mahsulot_main close')

    function openForm(){
        setAddForm('add_mahsulot_main open')
    }
    function closeForm(){
        setAddForm('add_mahsulot_main close')
    }



    const [ mahsulotlar, setMahsulotlar ] = useState([])

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ mahsulotsPerPage, setMahsulotsPerPage ] = useState(10)

    const lastMahsulotIndex = currentPage * mahsulotsPerPage;
    const firstMahsulotIndex = lastMahsulotIndex - mahsulotsPerPage;
    const currentMahsulot = mahsulotlar.slice(firstMahsulotIndex,lastMahsulotIndex)

    useEffect(() => {
        setMahsulotlar(
            [
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789},
                {name:'Surname', code:123456789}
            ]
        )
    },[]);

    const paginate = pageNumber => setCurrentPage(pageNumber);



  return (
    <>
    {/* Add Modalka */}

    <div className={addForm}>
        <p>Mahsulot qo'shish</p>
        <Input
            rounded
            bordered
            placeholder="Nomi..."
            color="secondary"
            width='100%'
            label="Mahsulot nomi"
            className='margin_bottom'
        />
        <Input
            rounded
            bordered
            placeholder="Kodi..."
            color="secondary"
            width='100%'
            label="Mahsulot kodi"
        />
        <div className='add_mahsulot_buttons'>
            <button onClick={closeForm}>Orqaga</button>
            <button onClick={closeForm}>Qoshish</button>
        </div>
    </div>

        <section className='mahsulot_section'>
            <h1 className='filial_title'>Mahsulotlar</h1>
            <div className='filial_header'>
                <a onClick={openForm}>
                    Mahsulot Qoshish
                    <i className='bx bx-plus-circle'></i>
                </a>
                <Input
                    rounded
                    bordered
                    placeholder="Mahsulot nomi..."
                    color="secondary"
                    width='300px'
                    className='filial_search'
                    contentRight={
                        <i className='bx bx-search-alt-2'></i>
                    }
                />
            </div>

            <div className='mahsulot_table'>
                <div className='mahsulot_table_headers'>
                    <p>Mahsulot nomi</p>
                    <p>Mahsulot kodi</p>
                </div>

                <div className='mahsulot_table_products'>
                    {
                        currentMahsulot.map((item,index)=>{
                            return(
                                <div className='mahsulot_table_product'>
                                    <p>{item.name}</p>
                                    <p>{item.code}</p>
                                    <div className='mahsulot_prosuct_buttons'>
                                        <button><i className='bx bx-trash'></i></button>
                                        <button><i className='bx bx-edit-alt'></i></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Pagination
                itemsPerPage={mahsulotsPerPage}
                totalItems={mahsulotlar.length}
                paginate={paginate}
            />
        </section>
    </>
  )
}

export default Mahsulot