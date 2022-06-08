import React from 'react'
import {Input} from '@nextui-org/react';
import { AiOutlineUserAdd,AiOutlineClear } from 'react-icons/ai';


import './Sugurta.css'

function Sugurta() {
  return (
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
        <button className='client_submit reset' onClick={()=>document.querySelector(`form`).reset()}>
          Formani tiklash
          <AiOutlineClear/>
        </button>
        <button type='submit' className='client_submit submit'>
          Clientni qo'shish
          <AiOutlineUserAdd/>
        </button>
      </div>
    </section>
  )
}

export default Sugurta