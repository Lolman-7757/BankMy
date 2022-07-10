import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Checkbox, Radio, Input } from "@nextui-org/react";
import { AiOutlineUserAdd,AiOutlineClear,AiOutlineRollback } from 'react-icons/ai'


import './Addshartnama.css'

function Addshartnama() {

    const [ cash, setCash] = useState(false),
    [ shutDown, setShutDown] = useState(false),
    [ order, setOrder ] = useState(null),
    [ money, setMoney ] = useState(null),
    [ moneyText, setMoneyText ] = useState(null),
    [ committee, setCommittee ] = useState(null),
    [ sector, setSector ] = useState(null),
    [ goal, setGoal ] = useState(null),
    [ productName, setProductName ] = useState(null),
    [ number, setNumber ] = useState(null),
    [ creditTime, setCreditTime ] = useState(null),
    [ annual, setAnnual ] = useState(null),
    [ annualText, setAnnualText ] = useState(null),
    [ dailyPenya, setDailyPenya ] = useState(null),
    [ monthlyCom, setMonthlyCom ] = useState(null),
    [ creditDate, setCreditDate ] = useState(null),
    [ fPaymentDate, setFPaymentDate ] = useState(null),
    [ shartnamaDate, setShartnamaDate ] = useState(null),
    [ shartnamaNum, setShartnamaNum ] = useState(null),
    [ ssks, setSsks ] = useState(null),
    [ bankName, setBankName ] = useState(null),
    [ bankMfo, setBankMfo ] = useState(null)
    function insertData (e){
        e.preventDefault()
        let allInformation = {
            order_date: order,
            money_requested: money,
            money_requested_text: moneyText,
            credit_committee_based: committee,
            credit_time: creditTime,
            sector: sector,
            goal: goal,
            credit_product_name: productName,
            salary: number,
            payment_type: cash?'Plastik':'Naqd',
            annual_rate: annual,
            annual_rate_text: annualText,
            daily_penya: dailyPenya,
            monthly_comission: monthlyCom,
            shutdown_mode: shutDown?'Diferensial':'Annuitet',
            credit_given_date: creditDate,
            first_payment_date: fPaymentDate,
            shartnama_date: shartnamaDate,
            shartnama_number: shartnamaNum,
            ssks: ssks,
            bank_name: bankName,
            bank_mfo: bankMfo
        }
        console.log(allInformation);
    }

    function cashInputAppearence () {
        if(cash){
            return(
        <>
            <Input
                className='vall'
                width='100%'
                clearable
                label="SSKS / Hisobraqam"
                placeholder="8600 1223 3445 5667"
                bordered
                color="secondary"
                onChange={e => setSsks(e.target.value)}
            />
            <Input
                className='vall'
                width='100%'
                clearable
                label=" Bank nomi"
                placeholder="Univercial Bank Toshkent filiali"
                bordered
                color="secondary"
                onChange={e => setBankName(e.target.value)}
            />
            <Input
                className='vall'
                width='100%'
                clearable
                label=" Bank MFOsi"
                placeholder="00996"
                bordered
                color="secondary"
                onChange={e => setBankMfo(e.target.value)}
            />
        </>
            )
        }else{
            return(
                <></>
            )
        }
    }

    const [resetWarning, setResetWarning] = useState('warning_reset_main close')

    function openReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main open')
    }
    function closeReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main close')
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

        <Link to='/shartnama' className='clientform_back back-back'>
            <AiOutlineRollback/>
            Orqaga
        </Link>
        <div className='client'>
            <form className='shart-main'>
                <div className='shart-selector'>
                    <p>Kredit ajratish tartibi</p>
                    <div>
                        <Radio.Group 
                        size='sm' 
                        value={false}
                        onChange={event=> setCash(event)}
                        >
                            <Radio value={false}>Naqd pul ko'rinishida</Radio>
                            <Radio value={true}>Plastik karta / Hisobraqam</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <Input
                    className='vall'
                    width='100%'
                    clearable
                    label="Ustama foiz stavkasi, yillik"
                    placeholder="58,00%"
                    bordered
                    color="secondary"
                    onChange={e => setAnnual(e.target.value)}
                />
                <Input
                    className='vall'
                    width='100%'
                    clearable
                    label="Ustama foiz stavkasi, yillik (yozuvda)"
                    placeholder=""
                    bordered
                    color="secondary"
                    onChange={e => setAnnualText(e.target.value)}
                />
                <Input
                    className='vall'
                    width='100%'
                    clearable
                    label="Penya, kunlik"
                    placeholder="0,40%"
                    bordered
                    color="secondary"
                    onChange={e => setDailyPenya(e.target.value)}
                />
                <Input
                    className='vall'
                    width='100%'
                    clearable
                    label="Oylik komission yig'im, %da"
                    placeholder="0,40%"
                    bordered
                    color="secondary"
                    onChange={e => setMonthlyCom(e.target.value)}
                />
                <div className='shart-selector'>
                    <p>So'ndirish tartibi</p>
                    <div>
                        <Radio.Group 
                            size='sm' 
                            value={false}
                            onChange={event=> setShutDown(event)}
                            className='shart-selector-group'
                        >
                            <Radio value={false}>Bir qil miqdor(Annuitet)</Radio>
                            <Radio value={true}>Kamayib boruvshi(differensial)</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <Input
                    className='vall'
                    width='100%'
                    label="Mikroqarz berish sanasi"
                    bordered
                    color="secondary"
                    type='date'
                    onChange={e => setCreditDate(e.target.value)}
                />
                <Input
                    className='vall'
                    width='100%'
                    label="Birinchi tolov sonasi"
                    bordered
                    color="secondary"
                    type='date'
                    onChange={e => setFPaymentDate(e.target.value)}
                />
                <Input
                    className='vall'
                    width='100%'
                    label="Shartnoma sanasi"
                    bordered
                    color="secondary"
                    type='date'
                    onChange={e => setShartnamaDate(e.target.value)}
                />
                <Input
                    className='vall'
                    width='100%'
                    clearable
                    label="Shartnoma raqami"
                    placeholder="34"
                    bordered
                    color="secondary"
                    onChange={e => setShartnamaNum(e.target.value)}
                />
                {
                    cashInputAppearence()
                }
            </form>
            <div className='submit-buttons'>
                <button className='client_submit reset' onClick={openReset}>
                    Formani tiklash
                    <AiOutlineClear/>
                </button>
                <button type='submit' className='client_submit submit'>
                    Shartnomani qo'shish
                    <AiOutlineUserAdd/>
                </button>
            </div>
            {/* <button onClick={()=>window.print()}>Pdf</button> */}
        </div>
    </>
    )
}

export default Addshartnama