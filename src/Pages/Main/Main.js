import { Avatar } from '@mui/material';
import React, { useState } from 'react';

// Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

// MUI
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom';
import Logo from '../../assets/images/Logo';

// Pages
import Client from '../Client/Client';
import Home from '../Home/Home'

import CLientForm from '../Client/CLientForm';
import GroupForm from '../Client/GroupForm';
import './Main.css'

function Main() {
    const [ headerDropDown,setHeaderDropDown ] = useState(false)
    return (
        <section className='main'>
            <BrowserRouter>
            <nav>
                <Logo/>
                <ul className='nav-list'>
                    <Link to='/' className='nav-item nav-item_active'>
                        <div className='nav-item_icon'>
                            <HomeOutlinedIcon/>
                        </div>
                        <span>Dashboard</span>
                    </Link>
                    <Link to='/client' className='nav-item'>
                        <div className='nav-item_icon'>
                            <PersonOutlineOutlinedIcon/>
                        </div>
                        <span>Clients</span>
                    </Link>
                    <Link to='/client' className='nav-item'>
                        <div className='nav-item_icon'>
                            <PersonOutlineOutlinedIcon/>
                        </div>
                        <span>Shartnama</span>
                    </Link>
                    <Link to='/client' className='nav-item'>
                        <div className='nav-item_icon'>
                            <PersonOutlineOutlinedIcon/>
                        </div>
                        <span>Taminat</span>
                    </Link>
                </ul>
            </nav>
            <main>
                <header>
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
                    <ul className={headerDropDown?'header_dropdown header_dropdown_active':'header_dropdown'}>
                        <Link to='/login' className='header_dropdown_item'>
                            <div className='header_dropdown_icon'>
                                <PowerSettingsNewOutlinedIcon/>
                            </div>
                            <p>Log Out</p>
                        </Link>
                    </ul>
                </header>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/client' element={<Client/>}/>
                        <Route path='/client/single_form' element={<CLientForm/>}/>
                        <Route path='/client/group_form' element={<GroupForm/>}/>
                    </Routes>
                </div>
            </main>
            </BrowserRouter>
        </section>
    )
}

export default Main