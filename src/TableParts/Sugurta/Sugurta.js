import React,{useState} from 'react'
import {Input} from '@nextui-org/react';
import { AiOutlineUserAdd,AiOutlineClear } from 'react-icons/ai';


import './Sugurta.css'

function Sugurta() {

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
          <button onClick={closeReset}>Haa</button>
          <button onClick={closeReset}>Yoq</button>
        </div>
      </div>

      <section className='sugurta_section'>
        <div className='sugurta_main'>
          <Input 
              label="Sug'urta kompaniyasining nomi"
              placeholder='Vosiq Mirzo'
              width='100%'
              color="secondary"
              bordered 
              className='sugurta_input'
              clearable
          >  
          </Input>
          <Input 
              label='Siyosat raqami'
              placeholder='12345678'
              width='100%'
              color="secondary"
              bordered 
              className='sugurta_input'
              clearable
          >
          </Input>
          <Input 
              label="Sug'urta summasi"
              placeholder='120 000 000'
              type='number'
              width='100%'
              color="secondary"
              bordered 
              className='sugurta_input'
              clearable
          >
          </Input>
          <Input 
              label="Sug'urta sanasi"
              width='100%'
              color="secondary"
              bordered 
              className='sugurta_input'
              type='date'
          >
          </Input>
        </div>
        <div className='submit-buttons'>
          <button className='client_submit reset' onClick={openReset}>
            Formani tiklash
            <AiOutlineClear/>
          </button>
          <button type='submit' className='client_submit submit'>
            Clientni qo'shish
            <AiOutlineUserAdd/>
          </button>
        </div>
      </section>
    </>
  )
}

export default Sugurta