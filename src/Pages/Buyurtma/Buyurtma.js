import React,  {useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Input } from '@nextui-org/react'
import { Tabs } from 'antd';
import Pagination from "../../Components/Pagination/Pagination";

import './Buyurtma.css'


const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

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
                {raqam:23,place:'Tashkent',mahsulot_name:'ReneTrade',status:"tashdiqlangan", color:'green'},
                {raqam:233,place:'Nukus',mahsulot_name:'ReneTrade',status:"kutmoqta", color:'yellow'},
                {raqam:13,place:'Andijon',mahsulot_name:'ReneTrade',status:"rad etilgan", color:'red'},
                {raqam:3,place:'Samarqand',mahsulot_name:'ReneTrade',status:"kutmoqta", color:'yellow'},
                {raqam:1,place:'Muynaq',mahsulot_name:'ReneTrade',status:"tashdiqlangan", color:'green'},
                {raqam:5,place:'London',mahsulot_name:'ReneTrade',status:"kutmoqta", color:'yellow'},
                {raqam:26,place:'Fergana',mahsulot_name:'ReneTrade',status:"kutmoqta", color:'yellow'},
                {raqam:213,place:'Tashkent',mahsulot_name:'ReneTrade',status:"tashdiqlangan", color:'green'},
                {raqam:253,place:'Tashkent',mahsulot_name:'ReneTrade',status:"rad etilgan", color:'red'},
                {raqam:236,place:'Tashkent',mahsulot_name:'ReneTrade',status:"kutmoqta", color:'yellow'},
                {raqam:23,place:'Tashkent',mahsulot_name:'ReneTrade',status:"rad etilgan", color:'red'},
                {raqam:23,place:'Tashkent',mahsulot_name:'ReneTrade',status:"rad etilgan", color:'red'},
                {raqam:23,place:'Tashkent',mahsulot_name:'ReneTrade',status:"kutmoqta", color:'yellow'},
                {raqam:23,place:'Tashkent',mahsulot_name:'ReneTrade',status:"tashdiqlangan", color:'green'},
                {raqam:23,place:'Tashkent',mahsulot_name:'ReneTrade',status:"rad etilgan", color:'red'}
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
                label='Foydalanuvchi paroli'
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

            <div className='shartnamaMain'>
                <div className='shartnamaHeader'>
                    <p className='shartnamaTitle'>Buyurtma</p>
                    <button onClick={()=>setModalka('shartnoma_modal open')} className='shartnamaLink'>Buyurtma <i className='bx bx-plus-circle'></i></button>
                </div>
                    <div className='shartnamaSearch'>
                        <div className='sort_main'>
                            <p>Tartiblash:</p>
                        <Tabs defaultActiveKey="1" onChange={onChange} className="sort_main_buttons">
                            <TabPane tab="Barcha" key="1">
                            </TabPane>
                            <TabPane tab="Yangi" key="2">
                            </TabPane>
                            <TabPane tab="Tashdiqlangan" key="3">
                            </TabPane>
                            <TabPane tab="Rad etilgan" key="4">
                            </TabPane>
                        </Tabs>
                        </div>
                        <Input
                            rounded
                            bordered
                            placeholder="Buyurtma raqami..."
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
                            <p className='headerTable-title_buyurtma'>Raqam</p>
                            <p className='headerTable-title_buyurtma'>Joy</p>
                            <p className='headerTable-title_buyurtma'>Mahsulot nomi</p>
                            <p className='headerTable-title_buyurtma'>Status</p>
                        </div>
                        <ul className='tableInfo'>
                            {
                                currentBuyurtma.map((item,index)=>{
                                    return <li key={index}>
                                        {/* <p className='liName li'><span>{index + 1 + (currentList-1)*10}.</span>{item.name}</p> */}
                                        <p className='li_buyurtma'>{item.raqam}</p>
                                        <p className='li_buyurtma'>{item.place}</p>
                                        <p className='li_buyurtma'>{item.mahsulot_name}</p>
                                        <p className='li_buyurtma' id={item.color}>{item.status}</p>
                                        <div className='userButtons_buyurtma'>
                                            <button><Link to='/buyurtma/singleBuyurtma'><i className='bx bx-user'></i></Link></button>
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