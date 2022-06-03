import React from 'react'
import {Input} from '@nextui-org/react';

import './Sugurta.css'

function Sugurta() {
  return (
    <section className='sugurta_section'>
      <div className='sugurta_main'>
        <Input 
            label='Имя страховой компании'
            placeholder='Vosiq Mirzo'
            width='100%'
            color="secondary"
            bordered 
            className='sugurta_input'
            clearable
        >  
        </Input>
        <Input 
            label='Номер полиса'
            placeholder='12345678'
            width='100%'
            color="secondary"
            bordered 
            className='sugurta_input'
            clearable
        >
        </Input>
        <Input 
            label='Сумма страхования(som)'
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
            label='Дата страхования'
            width='100%'
            color="secondary"
            bordered 
            className='sugurta_input'
            type='date'
        >
        </Input>
      </div>
    </section>
  )
}

export default Sugurta