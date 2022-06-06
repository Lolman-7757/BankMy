import React from 'react'
import Logo from '../assets/images/Logo'


import './pdf.css'

function Av1Form() {
  return (
    <div className='pdf_container'>
        <div className='b1_img'>
            <Logo width={400}/>
        </div>
        <p className='b1_subtitle'>	
            <span>"Renesans Mikrokredit Tashkiloti" MChJ </span>
            <span>Guliston filiali Boshqaruvchisi</span>
            <span>Muxammadov B.M.ga</span>
        </p>

        <div className='av1_form_main'>
            <div className='row_div'>
                <p>Mikrokredit tashkilotining nomi</p>
                <p>Renesans Mikrokredit Tashkiloti MChJ</p>
            </div>
            <div className='row-div'>
                <div className='column_div'>
                    <p>Mazkur varaqa kim tomondan to'ldirilgan</p>
                    <p>(F.I.O. va mikrokredit tashkiloti mutaxassisining lavozimi)</p>
                </div>
                <p>Abdurashidova Dildora Asadulla qizi</p>
            </div>
            <div className='row_div'>
                <p>To‘ldirilgan sana</p> 
                <p>09.03.2022</p>
            </div>

            <div className='av1_form_number'>
                <div className='row_div'>
                    <p>1. Kreditning maqsadi (turi)</p>
                    <p>shirinlik mahsulotlari savdosi</p>
                </div>
                <div className='row_div'>
                    <p>2. Ajratiladigan kreditning valyuta turi</p>
                    <p>so'm</p>
                </div>
                <div className='row_div'>
                    <p>3. Kreditning miqdori</p>
                    <p>20 000 000,00 so'm</p>
                </div>
                <div className='row_div'>
                    <p>4. Kreditning muddati</p>
                    <p>4</p>
                </div>
                <div className='row_div'>
                    <div className='column_div'>
                        <p>5. Kreditning foiz stavkasi </p>
                        <p>(nominal miqdorda)</p>
                    </div>
                    <div className='row_div'>
                        <div className='column_div'>
                            <p>58%</p>
                            <p>(foiz ko‘rinishida)</p>
                        </div>
                        <div className='column_div'>
                            <p>22 431 233,03</p>
                            <p>(kreditning to‘liq muddatiga pul ko‘rinishida)</p>
                        </div>
                    </div>                   
                </div>
                <div className='row-div'>
                    <div className='column_div'>
                        <p>6. Kreditning to‘liq qiymati </p>
                        <p>(nominal foiz stavkasini va kreditga xizmat ko‘rsatish xarajatlarini o‘z ichiga oladi)</p>
                    </div>
                    <p>2 694 993,03 soʻm</p>
                </div>
                <div className='row_div'>
                    <div className='column_div'>
                        <p>7. To‘lovlarning davriyligi</p>
                        <p>(har oyda, har chorakda va boshqalar)</p>
                    </div>
                    <p>oyiga bir marta</p>
                </div>
                <div className='row_div'>
                    <div className='column_div'>
                        <p>8. Kreditni so‘ndirish usuli</p>
                        <p>(annuitet usulida (teng miqdorlarda), kreditning qoldiq summasidan kamayib borish usulida va boshqalar)</p>
                    </div>
                    <p>Differentsial usulida (kamayib boruvchi)</p>
                </div>
                <div className='row_div'>
                    <p>9. To‘lovlarning davrida bir martalik to‘lovning summasi</p>
                    <div className='column_div'>
                        <p>5 985 205,42 soʻm</p>
                        <p>(differentsial usulida)</p>
                    </div>
                </div>
                <div className='row_div'>
                    <p>10. Kredit bilan bog‘liq qo‘shimcha xarajatlar,jumladan:</p>
                    <div className='column_div'>
                        <p>263 760 soʻm</p>
                        <p>(kreditning to‘liq muddatiga pul ko‘rinishida, jami)</p>
                    </div>
                </div>    
            </div>

            <div className='av1_form_addition'>
                <div className='row_div'>
                    <p>Turlari bo‘yicha mikrokredit tashkilotining komissiya va yig‘imlari (alohida ko‘rsatilsin)</p>
                    <div className='column_div'>
                        <p>0,00 so'm</p>
                        <p>(kreditning to‘liq muddatiga pul ko‘rinishida)</p>
                    </div>
                </div>
                <div className='row-div'>
                    <p>Uchinchi shaxslar xizmati (alohida ko‘rsatilsin)</p>
                    <p>263 760 soʻm	gacha</p>
                </div>
                <div className='row_div'>
                    <div className='row_div'>
                        <p>Kafillik</p>
                    </div>
                    <div className='column-div'>
                        <p>Sug‘urta</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Av1Form