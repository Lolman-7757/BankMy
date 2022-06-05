import React from 'react'

import Logo from '../../assets/images/Logo'

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
            <div className='b1'>
                <div className='b1_img'>
                    <Logo width={400}/>
                </div>
                <p className='b1_subtitle'>	
                    <span>"Renesans Mikrokredit Tashkiloti" MChJ </span>
                    <span>Guliston filiali Boshqaruvchisi</span>
                    <span>Muxammadov B.M.ga</span>
                </p>
                <h1>BUYURTMA</h1>
                <div className='b1_content'>
                    <p>Men, {buyurtmaData.name}, Sizdan  {buyurtmaData.qarz_miqdor} so‘m miqdorida {buyurtmaData.kredit_mahsulot_name} shartlari asosida shirinlik mahsulotlari savdosi uchun {buyurtmaData.muddat_time} oy muddatga   naqd pulda mikroqarz ajratishingizni so‘rayman. Faoliyat turim: {buyurtmaData.maqsadi}, O‘rtacha oylik daromadim {buyurtmaData.oylik_daromad} so‘mni tashkil etadi.</p>
                    <p>Yashash manzilim: Sirdaryo viloyati Guliston shahri Begmatov ko‘chasi 46-uy 10-xonadon. Shaxsimni tasdiqlovchi hujjat ma'lumotlari: {buyurtmaData.pass_id} raqamli O‘zR Fuqarosining biometrik pasporti  17.12.2015 y. da Sirdaryo viloyati Guliston shahar IIB tomonidan berilgan.</p>
                    <p>Mikroqarz qaytarilishini tilla buyumlar garovi  bilan ta'minlayman.</p>
                    <p> "Renesans Mikrokredit tashkiloti" MChJ mening buyurtmamni o‘rganish jarayonida va/yoki buyurtma asosida menga mikroqarz ajratilsa, mikroqarz shartnomasi bo‘yicha barcha majburiyatlarim to‘liq so‘ndirilgunga qadar men haqimda mening daromadlarim, majburiyatlarim, mavjud kredit va qarzlarim, kredit tarixim va/yoki boshqa har qanday ma'lumotlarni kredit byurolaridan, bank-moliya institutlaridan, soliq va ichki ishlar organlaridan, maxalla fuqarolar yig‘inlaridan va/yoki har qanday boshqa manbalardan og‘zaki yoki yozma ravishda so‘rab olinishiga roziligimni bildiraman. 
                    Shu bilan birga, menga ajratiladigan mikroqarzning asosiy qarzi yoki unga hisoblangan foizlarni, shuningdek, shartnoma shartlarining men tomonimdan bajarilmasligi yoki lozim darajada bajarilmasligi natijasida yuzaga kelishi mumkin bo‘lgan zararlar, hisoblanadigan penya va jarimalarni  mening nomimga ochilgan barcha bank plastik kartalari, omonat va boshqa hisobvaraqlarimdan so‘zsiz (aktseptsiz) tartibda to‘liq undirib olinishiga rozilik beraman.</p>
                    <p> Shuningdek, buyurtma berilgan mikroqarzga garov ta'minoti sifatida taklif etilayotgan garov ob'ekti to‘g‘risidagi ma'lumotlarni O‘zbekiston Respublikasining ''Garov reestri to‘g‘risida'' gi  Qonuniga muvofiq men bilan garov shartnomasi tuzilgan vaqtdan e'tiboran garov reestridan ro‘yxatdan o‘tkazish va zaruriy xollarda garov ob'ekti bilan bog‘liq boshqa ma'lumotlar kiritilishiga avvaldan rozilik bildiraman. </p>
                    <p className='b1_endData'>
                        <span>Shaxsiy identifikatsiya raqamim (JShShIR) : {buyurtmaData.pinfl}</span>
                        <span>SSKS : {buyurtmaData.ssks}</span>
                        <span>Bank : {buyurtmaData.bank}</span>
                        <span>MFO : {buyurtmaData.mfo}</span>
                    </p>
                </div>
                <p className='b1_lines'>
                    <span></span>
                    <span></span>
                </p>
                {/* <p>
                    "<u></u>"
                    <u></u>
                    20
                    <u></u>
                    y.
                </p> */}
            </div>
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
                <button onClick={()=>window.print()}>B1</button>
            </div>
        </section>
    )   
}

export default SingleBuyurtnama