import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Input } from '@nextui-org/react'
import Pagination from '../../Components/Pagination/Pagination'

import './Foydalan.css'

function Foydalan() {

    const [ foydalanuvchilar, setFoydalanuvchilar ] = useState([])

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ foydalanuvchiesPerPage, setFoydalanuvchiesPerPage ] = useState(10)

    const lastFoydalanuvchiIndex = currentPage * foydalanuvchiesPerPage;
    const firstFoydalanuvchiIndex = lastFoydalanuvchiIndex - foydalanuvchiesPerPage;
    const currentFoydalanuvchi = foydalanuvchilar.slice(firstFoydalanuvchiIndex, lastFoydalanuvchiIndex)

    useEffect(() => {
        setFoydalanuvchilar(
            [
                {name:'Atabek', email:'email@gmail.com',status:'admin'},
                {name:'Aliya', email:'email@gmail.com',status:'operator'},
                {name:'Guljahan', email:'email@gmail.com',status:'admin'},
                {name:'Askar', email:'email@gmail.com',status:'admin'},
                {name:'Aynura', email:'email@gmail.com',status:'operator'},
                {name:'Irina', email:'email@gmail.com',status:'monitor'},
                {name:'Barno', email:'email@gmail.com',status:'monitor'},
                {name:'Asadbek', email:'email@gmail.com',status:'operator'},
                {name:'Kamal', email:'email@gmail.com',status:'admin'},
                {name:'Berdax', email:'email@gmail.com',status:'monitor'},
                {name:'Begzada', email:'email@gmail.com',status:'admin'},
                {name:'Kumar', email:'email@gmail.com',status:'operator'},
                {name:'Iskander', email:'email@gmail.com',status:'admin'},
                {name:'Aydos', email:'email@gmail.com',status:'monitor'},
                {name:'Lutfulloxon', email:'email@gmail.com',status:'operator'}
            ]
        )
    },[]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className='foydalan_main'>
        <h1 className='filial_title'>Foydalanuvchilar</h1>
        <div className='filial_header'>
            <Link to='/foydalanuvchi/addfoydalanuvchi'>
                Foydalanuvchi Qoshish
                <i className='bx bx-plus-circle'></i>
            </Link>
            <Input
                rounded
                bordered
                placeholder="Foydalanuvchi nomi..."
                color="secondary"
                width='300px'
                className='filial_search'
                contentRight={
                    <i className='bx bx-search-alt-2'></i>
                }
            />
        </div>

        <div className='foydalan_table'>
            <div className='foydalan_table_headers'>
                <p>Foydalanuvchi ismi</p>
                <p>Foydalanuvchi email</p>
                <p>Foydalanuvchi role</p>
            </div>

            <div className='foydalan_table_products'>
                {
                    currentFoydalanuvchi.map((item,index)=>{
                        return(
                            <div className='foydalan_table_product client_row'>
                                <p className='foydalan_table_product_title'>{item.name}</p>
                                <p className='foydalan_table_product_title'>{item.email}</p>
                                <p className='foydalan_table_product_title'>{item.status}</p>
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
            itemsPerPage={foydalanuvchiesPerPage}
            totalItems={foydalanuvchilar.length}
            paginate={paginate}
        />

    </section>
  )
}

export default Foydalan