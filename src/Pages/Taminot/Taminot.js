import React, {useState,useEffect} from 'react'
import { Input } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import Pagination from '../../Components/Pagination/Pagination'

// Styles
import './Taminot.css'


function Taminot() {

    // Pagination
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
                {name:'Antonina Sanderson', raqam:'98',mahsulot:'rene'},
                {name:'Jaiden Rush', raqam:'73',mahsulot:'rene'},
                {name:'Kacie Driscoll', raqam:'46',mahsulot:'rene'},
                {name:'Faraz Marshall', raqam:'12',mahsulot:'rene'},
                {name:'Antonina Sanderson', raqam:'98',mahsulot:'rene'}
            ]
        )
        
    },[]);

    return (
        <section className='taminot'>
            <div className='taminot_header'>
                <div className='taminot_title'>Ta'minot</div>
                <div className='taminot_subheader'>
                    <Link to='/taminot/form' className='taminot_link'>Add New Ta'minot!</Link>
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
            </div>
            
            <div className='shartnamaTablePart'>
                    <div className='shartTable'>
                        <div className='tableHeader'>
                            <p className='headerTable-title'>Name</p>
                            <p className='headerTable-title'>Ta'minot raqami</p>
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
                <Pagination
                    itemsPerPage={perPage}
                    totalItems={buyurtmalar.length}
                    paginate={paginate} 
                >
                </Pagination>

        </section>
    )
}

export default Taminot