import React from 'react'
import {Input} from '@nextui-org/react';

import './uchinchi.css'

function UchinchiShaxs() {
  return (
    <section className='uchinchi_section'>
      <div className='uchinchi_main'>
        <Input 
            label='Имя страховой компании'
            placeholder='Vosiq Mirzo'
            width='100%'
            color="secondary"
            bordered 
            className='uchinchi_input'
            clearable
        >  
        </Input>
        <Input 
            label='Номер полиса'
            placeholder='12345678'
            width='100%'
            color="secondary"
            bordered 
            className='uchinchi_input'
            clearable
        >
        </Input>
        <Input 
            label='Сумма страхования'
            placeholder='120 000 000 som'
            width='100%'
            color="secondary"
            bordered 
            className='uchinchi_input'
            clearable
        >
        </Input>
        <Input 
            label='Дата страхования'
            width='100%'
            color="secondary"
            bordered 
            className='uchinchi_input'
            type='date'
        >
        </Input>
      </div>
    </section>
  )
}

export default UchinchiShaxs