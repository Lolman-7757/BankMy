import { Avatar } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';

// Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import { BiEnvelope } from 'react-icons/bi'

// MUI
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import Logo from '../../assets/images/Logo';

// Pages
import Client from '../Client/Client';
import Home from '../Home/Home';
import Login from '../Login/Login'
import Addshartnama from '../Shartnama/Addshartnama';
import Shartnama from '../Shartnama/Shartnama';

import CLientForm from '../Client/CLientForm';
import GroupForm from '../Client/GroupForm';
import './Main.css'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
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
                <Link to='/'><Logo/></Link>
                <Tabs defaultActiveKey="1" onChange={onChange} className="nav-list">
                    <TabPane 
                    tab={
                        <Link to='/' className='nav-item'>
                            <div className='nav-item_icon'>
                                <HomeOutlinedIcon/>
                            </div>
                            <span>Dashboard</span>
                        </Link>} 
                    key="1"/>
                    <TabPane 
                    tab={
                        <Link to='/client' className='nav-item'>
                            <div className='nav-item_icon'>
                                <PersonOutlineOutlinedIcon/>
                            </div>
                            <span>Clients</span>
                        </Link>
                    } 
                    key="2"/>
                    <TabPane 
                    tab={
                        <Link to='/shartnama' className='nav-item'>
                        <div className='nav-item_icon'>
                            <PersonOutlineOutlinedIcon/>
                        </div>
                        <span>Shartnama</span>
                    </Link>
                    } 
                    key="3"/>
                </Tabs>
            </nav>
            
            <main>
                <header>
                    <BiEnvelope className='email'/>
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
                        <Route path ='/shartnama' element={<Shartnama/>}/>
                    </Routes>
                </div>
            </main>
            </BrowserRouter>
        </section>
    )
}

export default Main