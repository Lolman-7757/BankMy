import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@nextui-org/react'

import './Shartnama.css'

function Shartnama() {

    const [shartnamalar, setShartnamalar] = useState([]);

    useEffect(() => {
        setShartnamalar(
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
                <div className='shartnamaHeader'>
                    <p className='shartnamaTitle'>Shartnama</p>
                </div>
                    <div className='shartnamaSearch'>
                    <Link to='/addshartnama' className='shartnamaLink'>Add new shartnama</Link>     
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
                            <p className='headerTable-title'>Shartnama raqami</p>
                            <p className='headerTable-title'>Mahsulot nomi</p>
                        </div>
                        <ul className='tableInfo'>
                            {
                                shartnamalar.map((item,index)=>{
                                    return <li>
                                        <p className='liName li'><span>{index + 1}.</span>{item.name}</p>
                                        <p className='li'>{item.raqam}</p>
                                        <p className='li'>{item.mahsulot}</p>
                                        <div className='userButtons'>
                                            <button>Edit <i className='bx bx-edit-alt'></i></button>
                                            <button>Delete <i className='bx bx-trash'></i></button>
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

export default Shartnama