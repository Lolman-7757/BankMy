import React,  {useState, useEffect, useRef } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Input } from '@nextui-org/react'
import Pagination from "../../Components/Pagination/Pagination";

import './Buyurtma.css'

function Buyurtma() {

    // Modalka
    const [modalka,setModalka] = useState('shartnoma_modal close');
    const [modalCode, setModalCode] = useState('');
    let navigate = useNavigate();
    function navigateAdd(){
        navigate("/buyurtma/form", { replace: true })
    }

    const [buyurtmalar, setBuyurtmalar] = useState([]);

    const [currentList,setCurrentList] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const lastBuyurtmaIndex = currentList * perPage;
    const firstBuyurtmaIndex = lastBuyurtmaIndex - perPage;
    const currentBuyurtma = buyurtmalar.slice(firstBuyurtmaIndex,lastBuyurtmaIndex)

    const paginate = pageNumber => setCurrentList(pageNumber)


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
                {name:'Antonina Sanderson', raqam:'98',mahsulot:'rene'},
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

        {/* Modalka */}
        <div className={modalka}>
            <Input
                rounded
                bordered
                width='300px'
                color='secondary'
                label='User code'
                placeholder='12345'
                clearable
                onChange={(e)=>setModalCode(e.target.value)}
            ></Input>
            <div>
                <button 
                    onClick={navigateAdd}
                    className='shartnoma_modal_button'>Submit</button>
                <button onClick={()=>setModalka('shartnoma_modal close')} className='shartnoma_modal_button'>Back</button>
            </div>
        </div>

            <div className='shartnamaMain'>
                <div className='shartnamaHeader'>
                    <p className='shartnamaTitle'>Buyurtma</p>
                </div>
                    <div className='shartnamaSearch'>
                    <button onClick={()=>setModalka('shartnoma_modal open')} className='shartnamaLink'>Add new buyurtma</button>     
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
                                currentBuyurtma.map((item,index)=>{
                                    return <li key={index}>
                                        <p className='liName li'><span>{index + 1 + (currentList-1)*10}.</span>{item.name}</p>
                                        <p className='li'>{item.raqam}</p>
                                        <p className='li'>{item.mahsulot}</p>
                                        <div className='userButtons'>
                                            <button><Link to='/buyurtma/singleBuyurtma'><i className='bx bx-user'></i></Link></button>
                                            <button><i className='bx bx-edit-alt'></i></button>
                                            <button><i className='bx bx-trash'></i></button>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <Pagination
                    itemsPerPage={perPage}
                    totalItems={buyurtmalar.length}
                    paginate={paginate} 
                >
                </Pagination>
            </div>
        </div>
  )
}

export default Buyurtma