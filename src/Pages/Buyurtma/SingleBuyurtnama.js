import React from 'react'
import { Link } from 'react-router-dom'


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
        <section className='single_buyurtma'>
            <div className='single_buyurtma_icon'>
                <img src='https://freesvg.org/img/abstract-user-flat-1.png' alt='user'/>
            </div>
            <div className='single_buyurtma_info'>
                <h1>{buyurtmaData.name}</h1>
                <p>
                    <span className='buyurtma_parameter'>PINFL : </span>
                    <u className='buyurtma_value'>{buyurtmaData.pinfl}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>SSKS : </span>
                    <u className='buyurtma_value'>{buyurtmaData.ssks}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Bank : </span>
                    <u className='buyurtma_value'>{buyurtmaData.bank}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>PINFL : </span>
                    <u className='buyurtma_value'>{buyurtmaData.pinfl}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Passport ID : </span>
                    <u className='buyurtma_value'>{buyurtmaData.pass_id}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Qarz miqdor summasi : </span>
                    <u className='buyurtma_value'>{buyurtmaData.qarz_miqdor}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Qarz miqdor summasi yozuvda : </span>
                    <u className='buyurtma_value'>{buyurtmaData.qarz_miqdor_text}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Kredit mahsulot nomi : </span>
                    <u className='buyurtma_value'>{buyurtmaData.kredit_mahsulot_name}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Buyurtma tuzilish payti : </span>
                    <u className='buyurtma_value'>{buyurtmaData.buyurtma_date}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Sektor : </span>
                    <u className='buyurtma_value'>{buyurtmaData.sektor}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Oylik daromad : </span>
                    <u className='buyurtma_value'>{buyurtmaData.oylik_daromad}</u>
                </p>
                <p>
                    <span className='buyurtma_parameter'>Muddat vaqti : </span>
                    <u className='buyurtma_value'>{buyurtmaData.muddat_time} oy</u>
                </p>
            </div>
            <div className='buyurtma_buttons'>
                <Link to='/buyurtma/singleBuyurtma/b1'>B1</Link>
            </div>
        </section>
    )   
}

export default SingleBuyurtnama