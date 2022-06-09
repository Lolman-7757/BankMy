import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRollback } from 'react-icons/ai'
import { Input } from '@nextui-org/react'

import './Buyurtma.css'

const buyurtmaData = {
    name: "Usmonova Muyassar Abduvalievna",
    qarz_miqdor: 20000000,
    qarz_miqdor_text: 'Yigirma million som 00 tiyin',
    buyurtma_date: '21/12/22',
    kredit_qomita_asosan: true,
    muddat_time: 4,
    sektor: 3,
    maqsadi: "shirinlik mahsulotlari savdosi",
    kredit_mahsulot_name: 'ReneTrade',
    oylik_daromad: 4800000,
    pass_id: 'AB2300850',
    ssks: `8600 4829 3851 1174`,
    bank: 'Universal Bank Toshkent filiali',
    pinfl: `41307792870060`,
    mfo: '00996'
}
function SingleBuyurtnama() {
    return (
        <>
            <div className='buyurtma_topPart'>
                <Link to='/buyurtma' className='clientform_back'>
                    <AiOutlineRollback/>
                    Back
                </Link>

                <div className='buyurtma_buttons'>
                    <Link to='/buyurtma/singleBuyurtma/b1'>B1</Link>
                    <Link to='/buyurtma/singleBuyurtma/av1'>Av1</Link>
                </div>
            </div>

            <section className='single_buyurtma'>
                <div className='single_buyurtma_info'>
                    <p className='single_buyurtma_title'>{buyurtmaData.name}</p>
                    <div className='single_buyurtma_inputs'>
                        <p>PINFL :</p>
                        <p>{buyurtmaData.pinfl}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>SSKS :</p>
                        <p>{buyurtmaData.ssks}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Bank :</p>
                        <p>{buyurtmaData.bank}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Passport ID :</p>
                        <p>{buyurtmaData.pass_id}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Passport ID :</p>
                        <p>{buyurtmaData.pass_id}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Qarz miqdor summasi :</p>
                        <p>{buyurtmaData.qarz_miqdor}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Qarz miqdor summasi yozuvda :</p>
                        <p>{buyurtmaData.qarz_miqdor_text}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Kredit mahsulot nomi :</p>
                        <p>{buyurtmaData.kredit_mahsulot_name}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Buyurtma tuzilish payti :</p>
                        <p>{buyurtmaData.buyurtma_date}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Sektor :</p>
                        <p>{buyurtmaData.sektor}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Oylik daromad :</p>
                        <p>{buyurtmaData.oylik_daromad}</p>
                    </div>
                    <div className='single_buyurtma_inputs'>
                        <p>Muddat vaqti :</p>
                        <p>{buyurtmaData.muddat_time}</p>
                    </div>
                    <Input 
                        className='inputtts'
                        bordered
                        width='100%'
                        label='PINFL :'
                        initialValue={buyurtmaData.pinfl}
                        color='secondary'
                    ></Input>
                </div>
            </section>
        </>
    )   
}

export default SingleBuyurtnama