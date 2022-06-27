import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@nextui-org/react'
import { AiOutlineRollback, AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai'

import './Foydalan.css'

function AddFoydalan() {

    // WARNING MODALKA
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

        <section className='filialform'>
            <div className='filialform_header'>
                <h1>Foydalanuvchi Yaratish</h1>
                <Link to='/foydalanuvchi' className='clientform_back'>
                    <AiOutlineRollback/>
                    Orqaga
                </Link>
            </div>
            <form className='filialform_form'>
                <h1 className='filialform_title'>Shakllarni To'ldiring:</h1>
                <Input
                    width='100%'
                    clearable
                    bordered
                    label="Ism"
                    placeholder='ismi...'
                    className='filial_input'
                    color="secondary"
                />
                <Input
                    width='100%'
                    clearable
                    bordered
                    label="Familiya"
                    placeholder='familiya...'
                    type='number'
                    className='filial_input'
                    color="secondary"
                />
                <Input
                    width='100%'
                    clearable
                    bordered
                    label="Email"
                    placeholder='email...'
                    className='filial_input'
                    color="secondary"
                />
                <Input
                    width='100%'
                    clearable
                    bordered
                    label="Kodi"
                    placeholder='kod...'
                    className='filial_input'
                    color="secondary"
                />
                <Input
                    width='100%'
                    clearable
                    bordered
                    label="Kodni tasdiqlash"
                    placeholder='yana kod...'
                    className='filial_input'
                    color="secondary"
                />
                <Input
                    width='100%'
                    clearable
                    bordered
                    label="Roli"
                    placeholder='roli..'
                    className='filial_input'
                    color="secondary"
                />
                <Input
                    width='100%'
                    clearable
                    bordered
                    label="Surat"
                    placeholder='img...'
                    className='filial_input'
                    color="secondary"
                />
                <div className='filial_buttons'>
                    <button className='client_submit reset' onClick={openReset}>
                        Formani tiklash
                        <AiOutlineClear/>
                    </button>
                    <button type='submit' className='client_submit submit'>
                        Foydalanuvchini qo'shish
                        <AiOutlineUserAdd/>
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}

export default AddFoydalan