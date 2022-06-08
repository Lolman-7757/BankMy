import React, { useState } from 'react'
import { Input,Checkbox } from '@nextui-org/react'
import { AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AiOutlineFileAdd,AiOutlineClear } from 'react-icons/ai';

import './Buyurtma.css'

function BuyurtmaForm() {
    // const [ money, setMoney ] = useState(0);
    
  return (
      <>
        <Link to='/buyurtma' className='clientform_back back-back'>
            <AiOutlineRollback/>
             Orqaga
        </Link>
        <div className='shart_nama'>
            <div className='buyurtma_form_main'>
                <p className='buyurtma_form_main_title'></p>
                <div className='buyurtma_form_main_forma'>
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        label="Buyurtma sanasi"
                        bordered
                        color="secondary"
                        type='date'
                    />
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="So'ralayotgan qarz miqdor"
                        placeholder="20 000 000 som"
                        type='number'
                        bordered
                        color="secondary"
                        // value={money}
                        // onInput={(event)=>setMoney(event.target.value.replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.'))}
                    />
                    {/* <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Qarz miqdori, yozuvda"
                        placeholder="Yigirma million som 00 tiyin"
                        bordered
                        color="secondary"
                    /> */}
                    <div className='shart-check'>
                        <Checkbox 
                        value="Kredit Qo'mitasi qorariga asosan"
                        size='sm'
                        color="secondary"
                        >
                            Kredit Qo'mitasi qorariga asosan
                        </Checkbox>
                    </div>
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="So'ralayotgan muddat"
                        placeholder="4 oy"
                        bordered
                        color="secondary"
                    />
                    <div className='shart-select'>
                        <p>Sektor</p>
                        <select
                        >
                            <option value="1">1 variant</option>
                            <option value="2">2 variant</option>
                            <option value="3">3 variant</option>
                            <option value="4">4 variant</option>
                            <option value="5">5 variant</option>
                            <option value="6">6 variant</option>
                            <option value="7">7 variant</option>
                            <option value="8">8 variant</option>
                        </select>
                    </div>
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Maqsadi"
                        placeholder="shirinlik mahsulotlari savdosi"
                        bordered
                        color="secondary"
                    />
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Kredit mahsuloti nomi"
                        placeholder="ReneTrade"
                        bordered
                        color="secondary"
                    />
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Oylik o'rtacha daromad"
                        placeholder="4 800 000 som"
                        type='number'
                        bordered
                        color="secondary"
                    />
                </div>
                <div className='submit-buttons'>
                    <button className='client_submit reset'>
                        Formani tiklash
                        <AiOutlineClear/>
                    </button>
                    <button className='client_submit submit'>
                        Clientni qo'shish
                        <AiOutlineFileAdd/>
                    </button>
                </div>
            </div>
        </div>
      </>
  )
}

export default BuyurtmaForm