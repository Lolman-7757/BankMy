import React from 'react'
import { Input } from '@nextui-org/react';

// Styles
import '../../TableParts/Transport/Transport.css';
// Icons
import { AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai'
// Add password data and medium salary

function UchinchiShaxs() {
  return (
    <form className='taminot_shaxs'>
      <div className='transport_garovPart'>
                <p className='additionPart_title'>Uchinchi shaxs mulki egasining ma'lumotlari</p>
                <div>
                    <Input 
                        label='Uchinchi mulki egasining F.I.Sh.'
                        placeholder=' Muxammadshukurov Xusniddin Fatxulla o`g`li'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    />
                    <div className='transport_garovPart_selectPart'>
                        <p>Shaxsini tasdiqlovchi xujjat</p>
                        <select className='transport_garovPart_input'>
                            <option>O'zR fuqarosining ID kartasi </option>
                            <option>O'zR Fuqarosining pasporti</option>
                            <option>Harbiy xizmatchi guvohnomasi</option>
                            <option>Xizmat guvohnomasi</option>
                            <option>Xorijiy fuqaro pasporti</option>
                            <option>Yashash guvohnomasi</option>
                            <option>O'zR Fuqarosining biometrik pasporti </option>
                            <option>Tug'ulganlik haqidagi guvohnoma</option>
                            <option>O'zR fuqarosining yangi namunadagi haydovchilik guvohnomasi </option>
                            <option>Boshqa </option>
                        </select>
                    </div>
                    <Input 
                        label='Seriyasi va raqami'
                        placeholder='AA 87654321'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    />
                    <Input 
                        label='Kim tomonidan berilgan'
                        clearable
                        placeholder='Toshkent viloyati Bo`ka tumani Mudofa '
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    />
                    <Input 
                        label='Berilgan sana'
                        type='date'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    />
                    <Input 
                        label='Telefon Raqami'
                        type='number'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    />
                    <Input 
                        label="Ro'yxat bo'yicha yashash manzili"
                        clearable
                        placeholder='Toshkent viloyati Bo`ka tumani Y.Xojimetov fu O`zbekiston ko`chasi 92 uy'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    />
                    <Input 
                        label='Identifikatsiya raqami (JShShIR)'
                        placeholder='123456789'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    />  
                </div>
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
    </form>
  )
}

export default UchinchiShaxs