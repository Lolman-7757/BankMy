import React, { useState } from 'react'

// Page Components
import Shaxshiy from './Parts/Shaxshiy'
import Table from './Parts/Table'
import FirstKl1 from './Parts/FirstKl1'
import Boshqa from './Parts/Boshqa'
import Oilaviy from './Parts/Oilaviy'
import BuyurtmaOylik from './Parts/BuyurtmaOylik'
import Mavsumiy from './Parts/Mavsumiy'
import Biznes from './Parts/Biznes'

// Components
import { Tabs } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars-2';

// Icons
import { AiOutlineUserAdd,AiOutlineClear,AiOutlineRollback } from 'react-icons/ai'

// Styles
import './KL1.css'
import './KL1_tabs.css'


function KL1() {
    // Tabs
    const { TabPane } = Tabs;

    const onChangeTabs = (key) => {
        console.log(key);
    };

    // WARNING MODALKA
    const [resetWarning, setResetWarning] = useState('warning_reset_main close')

    function openReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main open')
    }
    function closeReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main close')
    }

    // Mavsumiy Part
    const [mavsumiyWindow, setMavsumiyWindow] = useState('close')

    function MavsumiyPage(){
        if(mavsumiyWindow == 'open'){
            return(
                <TabPane tab="Daromad/Xarajat(mavsumiy)" key="4">
                    <Mavsumiy/>
                </TabPane>
            )
        }else{
            <></>
        }
    }

    // Biznes Part
    const [biznesWindow, setBiznesWindow] = useState('close')

    function BiznesPage(){
        if(biznesWindow == 'open'){
            return(
                <TabPane tab="Daromad/Xarajat(biznes)" key="5">
                    <Biznes/>
                </TabPane>
            )
        }else{
            <></>
        }
    }

    return (
        <>
        {/* Reset Warning */}
        <div className={resetWarning}>
            <p>Haqiqatan ham ma'lumontlarni qayta tiklamoqchimisiz?</p>
            <div >
            <button onClick={closeReset}>Ha</button>
            <button onClick={closeReset}>Yoq</button>
            </div>
        </div>

            <section className='kl1'>
                <div className='kl1_title'>
                <h1>Kreditga layoqatilikni baholash varaqasi </h1>
                </div>
    <div className='kl1_tabs_main'>
                    {/* <Tab label="Shaxsiy ma'lumot" value="1" className='tab_title'/>
                    <Tab label="Birinchi qism" value="2" className='tab_title'/>
                    <Tab label="Daromad/Xarajat(boshqa)" value="3" className='tab_title'/>
                    <Tab label="Daromad/Xarajat(mavsumiy)" value="4" className='tab_title'/>
                    <Tab label="Daromad/Xarajat(biznes)" value="5" className='tab_title'/>
                    <Tab label="Oltinchi qism" value="6" className='tab_title'/>
                    <Tab label="Yettinchi qism" value="7" className='tab_title'/>
                    <Tab label="Jadvali" value="8" className='tab_title'/> */}
                <div className='kl1_content'>
                    <Tabs defaultActiveKey="1" onChange={onChangeTabs}>
                        <TabPane tab="Shaxsiy ma'lumot" key="1">
                            <Shaxshiy/>
                        </TabPane>
                        <TabPane tab="Birinchi qism" key="2">
                            <FirstKl1/>
                        </TabPane>
                        <TabPane tab="Daromad/Xarajat(boshqa)" key="3">
                            <Boshqa
                                mavsumiyWindow={mavsumiyWindow}
                                setMavsumiyWindow={setMavsumiyWindow}
                                biznesWindow={biznesWindow}
                                setBiznesWindow={setBiznesWindow}
                            />
                        </TabPane>
                        {
                            MavsumiyPage()
                        }
                        {
                            BiznesPage()
                        }
                        <TabPane tab="Oltinchi qism" key="6">
                            <Oilaviy/>
                        </TabPane>
                        <TabPane tab="Yettinchi qism" key="7">
                            <BuyurtmaOylik/>
                        </TabPane>
                        <TabPane tab="Jadvali" key="8">
                            <Table/>
                        </TabPane>
                    </Tabs>
                </div>
        <div className='submit-buttons'>
            <button className='client_submit reset' onClick={openReset}>
                Formani tiklash
                <AiOutlineClear/>
            </button>
            <button type='submit' className='client_submit submit'>
                Formani qo'shish
                <AiOutlineUserAdd/>
            </button>
        </div>
    </div>
</section>
</>
    )
}

export default KL1
