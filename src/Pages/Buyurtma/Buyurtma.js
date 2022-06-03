import React,  {useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@nextui-org/react'
import Pagination from "../../Components/Pagination/Pagination";

import './Buyurtma.css'

function Buyurtma() {

    const [buyurtmalar, setBuyurtmalar] = useState([]);

    useEffect(() => {
        setBuyurtmalar(
            [
                {name:'Jaiden Rush', raqam:'22',mahsulot:'rene'},
                {name:'Lydia Levy', raqam:'25',mahsulot:'rene'},
                {name:'Dan Cope', raqam:'28',mahsulot:'rene'},
                {name:'Rimsha Charlton', raqam:'12',mahsulot:'rene'},
                {name:'Paul Mann', raqam:'23',mahsulot:'rene'},
                {name:'Tehya Sears', raqam:'54',mahsulot:'rene'},
                {name:'Kacie Driscoll', raqam:'61',mahsulot:'rene'},
                {name:'Violet Payne', raqam:'67',mahsulot:'rene'},
                {name:'Antonina Sanderson', raqam:'87',mahsulot:'rene'},
                {name:'Jaiden Rush', raqam:'73',mahsulot:'rene'},
                {name:'Kacie Driscoll', raqam:'46',mahsulot:'rene'},
                {name:'Faraz Marshall', raqam:'12',mahsulot:'rene'},
                {name:'Antonina Sanderson', raqam:'98',mahsulot:'rene'}
            ]
        )
    },[]);


  return (
    <div className='shart_nama'>
            <div className='shartnamaMain'>

                {/* <div className={shartnamaWarn?'shartnama_warn shartnama_warn_active':'shartnama_warn'}>
                    <div className='shartnama_warn_title'>Warning!</div>
                    <div className='shartnama_warn_text'>Are you sure you want to delete it?</div>
                    <div className='shartnama_warn_buttons'>
                        <button>Yes!</button>
                        <button onClick={()=>setShartnamaWarn(!shartnamaWarn)} ref={shartnamaRef}>No!</button>
                    </div>
                </div> */}

                <div className='shartnamaHeader'>
                    <p className='shartnamaTitle'>Buyurtma</p>
                </div>
                    <div className='shartnamaSearch'>
                    <Link to='/buyurtma/form' className='shartnamaLink'>Add new buyurtma</Link>     
                    <Input
                        rounded
                        bordered
                        placeholder="Search"
                        color="secondary"
                        width='300px'
                        className='search-input'
                        contentRight={
                            <i className='bx bx-search-alt-2'></i>
                        }
                    />
                    </div>
                <div className='shartnamaTablePart'>
                    <div className='shartTable'>
                        <div className='tableHeader'>
                            <p className='headerTable-title'>Name</p>
                            <p className='headerTable-title'>Buyurtma raqami</p>
                            <p className='headerTable-title'>Mahsulot nomi</p>
                        </div>
                        <ul className='tableInfo'>
                            {
                                buyurtmalar.map((item,index)=>{
                                    return <li key={index}>
                                        <p className='liName li'><span>{index + 1}.</span>{item.name}</p>
                                        <p className='li'>{item.raqam}</p>
                                        <p className='li'>{item.mahsulot}</p>
                                        <div className='userButtons'>
                                            <button><i className='bx bx-user'></i></button>
                                            <button><i className='bx bx-edit-alt'></i></button>
                                            <button><i className='bx bx-trash'></i></button>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Buyurtma