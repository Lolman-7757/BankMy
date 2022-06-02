import React from 'react'
import { Input } from '@nextui-org/react'

import './Transport.css'

function Transport() {
  return (
    <section className='transport_section'>
        <div className='transport_main'>
            <div className='transport_garov'>
                <p>Garov mulkining egasi</p>
                <div>
                    <input type='radio' id='gavor_first' name='garov' value='first' checked></input>
                    <p>Mijozning o'zi</p>
                    <input type='radio' id='gavor_second' name='garov' value='second'></input>
                    <p>Uchinchi shaxs</p>
                    <input type='radio' id='gavor_third' name='garov' value='third'></input>
                    <p>Ishonchnoma asosida</p>
                </div>
            </div>

            <div className='transport_addition'>
                <input type='radio' id='addition_first' name='addition' value='second'></input>
                <p>Mustaqil baholash asosida</p>
                <input type='radio' id='addition_second' name='addition' value='third'></input>
                <p>O'zaro kelishuvga asosan</p>
            </div>

            {/* <div className='transport_fourInputs'>
                <Input 
                    label='Transport vositasini baholovchi tashkilo'
                    placeholder='Vosiq Mirzo'
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>
                <Input 
                    label='Litsenziya'
                    placeholder='Litsenziya BL001, RR0118, 19.02.2014 y. berilgan'
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>
                <Input 
                    label='Baholovchining ismi sharifi'
                    placeholder='B.Asomov'
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>
                <Input 
                    label='Baholash hujjati raqami'
                    placeholder='06/002'
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>    
            </div> */}

            <div className='transport_mainInputs'>
                <Input 
                    label='Qayd etish guvohnomasi'
                    placeholder='AAF № 0186343'
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                    clearable
                >
                </Input>  
                <Input 
                    label='Baholovchi hujjat sanasi'
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                    type='date'
                >
                </Input>  
                <Input 
                    label='Baholangan qiymati'
                    initialValue="120 000  000 som"
                    readOnly
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                >
                </Input>  
                <Input 
                    label='Baholangan qiymati, yozuvda'
                    initialValue='Bir yuz yigirma million som 00 tiyin'
                    readOnly
                    width='90%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                >
                </Input>  
            </div>
            <div className='transport_table'>

            </div>
            <div className='transport_endMainInputs'>
                <Input 
                    label='Qabul qilish qiymati, %da'
                    placeholder='35,71%'
                    width='90%'
                    color="secondary"
                    bordered 
                >
                </Input>  
                <Input 
                    label="Qabul qilish qiymati, so'mda"
                    placeholder=' 50 000 000,00 som'
                    width='90%'
                    color="secondary"
                    bordered 
                >
                </Input>  
                <Input 
                    label='Qabul qilish qiymati, yozuvda'
                    placeholder='Ellik million som 00 tiyin'
                    width='90%'
                    color="secondary"
                    bordered 
                >
                </Input>  
                <Input 
                    label='Identifikatsiya raqami (JShShIR)'
                    width='90%'
                    color="secondary"
                    bordered 
                >
                </Input>  
            </div>
        </div>
    </section>
  )
}

export default Transport