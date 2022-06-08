import React,  {useState, useEffect, useRef} from 'react'
import { useNavigate } from "react-router-dom";
import { Input } from '@nextui-org/react'
import Pagination from "../../Components/Pagination/Pagination";

import './Shartnama.css'

function Shartnama() {

    // Modalka
    const [modalka,setModalka] = useState('shartnoma_modal close');
    const [modalCode, setModalCode] = useState('');
    let navigate = useNavigate();
    function navigateAdd(){
        navigate("/addshartnama", { replace: true })
    }

    const [shartnamalar, setShartnamalar] = useState([]);
    const [ shartnamaWarn, setShartnamaWarn ] = useState(false)
    const shartnamaRef = useRef(null)


    const [ currentPage, setCurrentPage ] = useState(1);
    const [ shartnamaPerPage, setShartnamasPerPage ] = useState(10)

    const lastShartnamaIndex = currentPage * shartnamaPerPage;
    const firstShartnamaIndex = lastShartnamaIndex - shartnamaPerPage;
    const currentShartnama = shartnamalar.slice(firstShartnamaIndex,lastShartnamaIndex)

    

    // header DropDown Hendle Script
    useEffect(() => {
        document.addEventListener('mousedown', shartnamaHendleOutSide)
    
        return () => {
            document.removeEventListener('mousedown', shartnamaHendleOutSide)
        }
    }, [])

    const shartnamaHendleOutSide = (e) => {
        const { current: wrap } = shartnamaRef;
        if (wrap && !wrap.contains(e.target)) {
            setShartnamaWarn(false)
        }
    }

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

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
                {/* Modalka */}
                <div className={modalka}>
                    <Input
                        rounded
                        bordered
                        width='300px'
                        color='secondary'
                        label='Buyurtma code'
                        placeholder='12345'
                        clearable
                        onChange={(e)=>setModalCode(e.target.value)}
                    ></Input>
                    <div>
                        <button 
                            onClick={navigateAdd}
                            className='shartnoma_modal_button'>Qo'shish</button>
                        <button onClick={()=>setModalka('shartnoma_modal close')} className='shartnoma_modal_button'>Orqaga</button>
                    </div>
                </div>

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
                        <p className='shartnamaTitle'>Shartnoma</p>
                    </div>
                        <div className='shartnamaSearch'>
                        <button onClick={()=>setModalka('shartnoma_modal open')} className='shartnamaLink'>Shartnoma <i className='bx bx-plus-circle'></i></button>     
                        <Input
                            rounded
                            bordered
                            placeholder="shartnoma raqami..."
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
                                <p className='headerTable-title'>Ism</p>
                                <p className='headerTable-title'>Shartnoma raqami</p>
                                <p className='headerTable-title'>Mahsulot nomi</p>
                            </div>
                            <ul className='tableInfo'>
                                {
                                    currentShartnama.map((item,index)=>{
                                        return <li key={index}>
                                            <p className='liName li'>{/*<span>{index + 1 + (currentPage-1)*10}.</span>*/}{item.name}</p>
                                            <p className='li'>{item.raqam}</p>
                                            <p className='li'>{item.mahsulot}</p>
                                            <div className='userButtons'>
                                                <button><i className='bx bx-user'></i></button>
                                                <button><i className='bx bx-edit-alt'></i></button>
                                                {/* <button><i className='bx bx-trash'></i></button> */}
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <Pagination
                        itemsPerPage={shartnamaPerPage}
                        totalItems={shartnamalar.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </>
    )
}

export default Shartnama