import React, { useState } from 'react'
import { Checkbox, Radio, Input } from "@nextui-org/react";
import { AiOutlineFileAdd,AiOutlineClear } from 'react-icons/ai'

import './Shartnama.css'

function Shartnama() {

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
            width='90%'
            clearable
            label="SSKS / Hisobraqam"
            placeholder="8600 1223 3445 5667"
            bordered
            color="secondary"
            onChange={e => setSsks(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label=" Bank nomi"
            placeholder="Univercial Bank Toshkent filiali"
            bordered
            color="secondary"
            onChange={e => setBankName(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
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
    return (
    <div className='client'>
        <form className='shart-main'>
            <Input
            className='vall'
            width='90%'
            clearable
            label="Buyurtma sanasi"
            bordered
            color="secondary"
            type='date'
            onChange={e => setOrder(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="So'ralayotgan qarz miqdor"
            placeholder="20 000 000 som"
            bordered
            color="secondary"
            onChange={e => setMoney(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="Qarz miqdori, yozuvda"
            placeholder="Yigirma million som 00 tiyin"
            bordered
            color="secondary"
            onChange={e => setMoneyText(e.target.value)}
            />
            <div className='shart-check'>
                <Checkbox 
                value="Kredit Qo'mitasi qorariga asosan"
                size='md'
                color="secondary"
                onChange={e => setCommittee(e.target)}
                >
                    Kredit Qo'mitasi qorariga asosan
                </Checkbox>
            </div>
            <Input
            className='vall'
            width='90%'
            clearable
            label="So'ralayotgan muddat"
            placeholder="4 oy"
            bordered
            color="secondary"
            onChange={e => setCreditTime(e.target.value)}
            />
            <div className='shart-select'>
                <p>Sektor</p>
                <select
                onChange={e => setSector(e.target.value)}
                >
                    <option value="1 вариант">1 вариант</option>
                    <option value="2 вариант">2 вариант</option>
                    <option value="3 вариант">3 вариант</option>
                    <option value="4 вариант">4 вариант</option>
                    <option value="5 вариант">5 вариант</option>
                    <option value="6 вариант">6 вариант</option>
                    <option value="7 вариант">7 вариант</option>
                    <option value="8 вариант">8 вариант</option>
                </select>
            </div>
            <Input
            className='vall'
            width='90%'
            clearable
            label="Maqsadi"
            placeholder="shirinlik mahsulotlari savdosi"
            bordered
            color="secondary"
            onChange={e => setGoal(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="Kredit mahsuloti nomi"
            placeholder="ReneTrade"
            bordered
            color="secondary"
            onChange={e => setProductName(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="Oylik o'rtacha daromad"
            placeholder="4 800 000 som"
            bordered
            color="secondary"
            onChange={e => setNumber(e.target.value)}
            />
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
            width='90%'
            clearable
            label="Ustama foiz stavkasi, yillik"
            placeholder="58,00%"
            bordered
            color="secondary"
            onChange={e => setAnnual(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="Ustama foiz stavkasi, yillik (yozuvda)"
            placeholder=""
            bordered
            color="secondary"
            onChange={e => setAnnualText(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="Penya, kunlik"
            placeholder="0,40%"
            bordered
            color="secondary"
            onChange={e => setDailyPenya(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
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
                    >
                        <Radio value={false}>Bir qil miqdor(Annuitet)</Radio>
                        <Radio value={true}>Kamayib boruvshi(differensial)</Radio>
                    </Radio.Group>
                </div>
            </div>
            <Input
            className='vall'
            width='90%'
            clearable
            label="Mikroqarz berish sanasi"
            bordered
            color="secondary"
            type='date'
            onChange={e => setCreditDate(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="Birinchi tolov sonasi"
            bordered
            color="secondary"
            type='date'
            onChange={e => setFPaymentDate(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
            clearable
            label="Shartnoma sanasi"
            bordered
            color="secondary"
            type='date'
            onChange={e => setShartnamaDate(e.target.value)}
            />
            <Input
            className='vall'
            width='90%'
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
                    <button className='client_submit reset' onClick={()=>document.querySelector(`form`).reset()}>
                        Reset Form
                        <AiOutlineClear/>
                    </button>
                    <button className='client_submit submit' onClick={(event)=>insertData(event)}>
                        Submit Client
                        <AiOutlineFileAdd/>
                    </button>
            </div>
    </div>
    )
}

export default Shartnama