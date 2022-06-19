import { Avatar } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';

// Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { AiOutlineBell,AiFillDatabase,AiFillFileText,AiOutlineFileAdd,AiFillFolderOpen,AiFillFile,AiOutlineBook,AiOutlineUsergroupAdd,AiOutlineAim } from 'react-icons/ai'
import { BsBuilding } from 'react-icons/bs'

// Styles
import './Main.css'

// Components
import Logo from '../../assets/images/Logo';
import { Tabs } from 'antd';

// Pages
import Client from '../Client/Client';
import Home from '../Home/Home';
import Login from '../Login/Login'
import Addshartnama from '../Shartnoma/Addshartnama';
import Shartnama from '../Shartnoma/Shartnama';
import Buyurtma from '../Buyurtma/Buyurtma';
import CLientForm from '../Client/CLientForm';
import GroupForm from '../Client/GroupForm';
import BuyurtmaForm from '../Buyurtma/BuyurtmaForm';
import Taminot from '../Taminot/Taminot';
import TaminotForm from '../Taminot/TaminotForm';
import SingleBuyurtnama from '../Buyurtma/SingleBuyurtnama';
import B1Form from '../../PDF/B1Form';
import Av1Form from '../../PDF/Av1Form';
import KL1 from '../KL1/KL1';
import Filial from '../Filiallar/Filial';
import AddFilial from '../Filiallar/AddFilial';
import Xodim from '../Xodim/Xodim';
import AddXodim from '../Xodim/AddXodim';
import Section from '../Section/Section';
import Mahsulot from '../Mahsulot/Mahsulot';
import Maqsad from '../Maqsad/Maqsad';
import AddMaqsad from '../Maqsad/AddMaqsad';

const { TabPane } = Tabs;

const onChange = (key) => {
};


function Main() {
    const [ headerDropDown,setHeaderDropDown ] = useState(false);
    const catalogRef = useRef(null)
    // header DropDown Hendle Script
    useEffect(() => {
        document.addEventListener('mousedown', hendleOutSide)
    
        return () => {
            document.removeEventListener('mousedown', hendleOutSide)
        }
    }, [])

    const hendleOutSide = (e) => {
        const { current: wrap } = catalogRef;
        if (wrap && !wrap.contains(e.target)) {
            setHeaderDropDown(false)
        }
    }
    return (
        <section className='main'>
            <BrowserRouter>
            <nav>
                <Link to='/'><Logo width={175}/></Link>
                <Tabs defaultActiveKey="1" onChange={onChange} className="nav-list">
                    <TabPane 
                    tab={
                        <Link to='/' className='nav-item'>
                            <div className='nav-item_icon'>
                                <HomeOutlinedIcon/>
                            </div>
                            <span>Statistika</span>
                        </Link>} 
                    key="1"/>
                    <TabPane 
                    tab={
                        <Link to='/client' className='nav-item'>
                            <div className='nav-item_icon'>
                                <PersonOutlineOutlinedIcon/>
                            </div>
                            <span>Klientlar</span>
                        </Link>
                    } 
                    key="2"/>
                    <TabPane 
                    tab={
                        <Link to='/buyurtma' className='nav-item'>
                        <div className='nav-item_icon'>
                            <AiFillFileText/>
                        </div>
                        <span>Buyurtma</span>
                    </Link>
                    } 
                    key="3"/>
                    <TabPane 
                    tab={
                        <Link to='/taminot' className='nav-item'>
                        <div className='nav-item_icon'>
                            <AiFillFolderOpen/>
                        </div>
                        <span>Ta'minot</span>
                    </Link>
                    } 
                    key="4"/>
                    <TabPane 
                    tab={
                        <Link to='/shartnama' className='nav-item'>
                        <div className='nav-item_icon'>
                            <AiFillFile/>
                        </div>
                        <span>Shartnoma</span>
                    </Link>
                    } 
                    key="5"/>
                    <TabPane 
                    tab={
                        <Link to='/kl1' className='nav-item'>
                        <div className='nav-item_icon'>
                            <AiOutlineBook/>
                        </div>
                        <span>KL1</span>
                    </Link>
                    } 
                    key="6"/>
                    <TabPane 
                    tab={
                        <Link to='/filials' className='nav-item'>
                        <div className='nav-item_icon'>
                            <BsBuilding/>
                        </div>
                        <span>Filiallar</span>
                    </Link>
                    } 
                    key="7"/>
                    <TabPane 
                    tab={
                        <Link to='/xodim' className='nav-item'>
                        <div className='nav-item_icon'>
                            <AiOutlineUsergroupAdd/>
                        </div>
                        <span>Xodimlar</span>
                    </Link>
                    } 
                    key="8"/>
                    <TabPane 
                        tab={
                            <Link to='/mahsulot' className='nav-item'>
                            <div className='nav-item_icon'>
                                <AiOutlineFileAdd/>
                            </div>
                            <span>Mahsulotlar</span>
                        </Link>
                        } 
                    key="9"/>
                    <TabPane 
                        tab={
                            <Link to='/maqsad' className='nav-item'>
                            <div className='nav-item_icon'>
                                <AiOutlineAim/>
                            </div>
                            <span>Maqsadlar</span>
                        </Link>
                        } 
                    key="10"/>
                    <TabPane 
                        tab={
                            <Link to='/section' className='nav-item'>
                            <div className='nav-item_icon'>
                                <AiFillDatabase/>
                            </div>
                            <span>Bo'limlar</span>
                        </Link>
                        } 
                    key="11"/>
                </Tabs>
            </nav>
            
            <main>
                <header>
                    <AiOutlineBell className='email'/>
                    <div className='header_last'>
                        <div className='header_info'>
                            <h2>John Doe</h2>
                            <p>admin</p>
                        </div>
                        <Avatar
                        onClick={()=>{setHeaderDropDown(!headerDropDown)}}
                        className='header_avatar'
                        alt="John Doe" 
                        sx={{ width: 50, height: 50 }}
                        src='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-1/static/media/avatar-s-11.1d46cc62.jpg'/>
                        <ul className={headerDropDown?'header_dropdown header_dropdown_active':'header_dropdown'} ref={catalogRef}>
                            <Link to='/login' className='header_dropdown_item'>
                                <div className='header_dropdown_icon'>
                                    <PowerSettingsNewOutlinedIcon onClick={()=>{setHeaderDropDown(false)}}/>
                                </div>
                                <p>Log Out</p>
                            </Link>
                        </ul>
                    </div>
                </header>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/client' element={<Client/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/client/single_form' element={<CLientForm/>}/>
                        <Route path='/client/group_form' element={<GroupForm/>}/>
                        <Route path='/addshartnama' element={<Addshartnama/>}/>
                        <Route path='/shartnama' element={<Shartnama/>}/>
                        <Route path='/buyurtma' element={<Buyurtma/>}/>
                        <Route path='/buyurtma/form' element={<BuyurtmaForm/>}/>
                        <Route path='/buyurtma/singleBuyurtma' element={<SingleBuyurtnama/>}/>
                        <Route path='/buyurtma/singleBuyurtma/b1' element={<B1Form/>}/>
                        <Route path='/buyurtma/singleBuyurtma/av1' element={<Av1Form/>}/>
                        <Route path='/taminot' element={<Taminot/>}/>
                        <Route path='/taminot/form' element={<TaminotForm/>}/>
                        <Route path='/kl1' element={<KL1/>}/>
                        <Route path='/filials' element={<Filial/>}/>
                        <Route path='/filials/addfilial' element={<AddFilial/>}/>
                        <Route path='/xodim' element={<Xodim/>}/>
                        <Route path='/xodim/addxodim' element={<AddXodim/>}/>
                        <Route path='/mahsulot' element={<Mahsulot/>}/>
                        <Route path='/section' element={<Section/>}/>
                        <Route path='/maqsad' element={<Maqsad/>}/>
                        <Route path='/maqsad/addmaqsad' element={<AddMaqsad/>}/>
                    </Routes>
                </div>
            </main>
            </BrowserRouter>
        </section>
    )
}

export default Main