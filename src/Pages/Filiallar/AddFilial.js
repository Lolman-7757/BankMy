import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// Styles
import './Filial.css'
// Icons
import { AiOutlineRollback, AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai'
// Components
import { Input } from '@nextui-org/react';

function AddFilial() {

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
                    <h1>Filial Yaratish</h1>
                    <Link to='/filials' className='clientform_back'>
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
                        label="Nomi"
                        placeholder='"Renesans Mikrokredit Tashkiloti" MChJ Bosh ofisi qoshidagi Amaliyot boshqarmasi'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Qisqa nomi"
                        placeholder='Amaliyot Boshqarmasi'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Shartnama"
                        placeholder='Amaliyot Boshqarmasi Nizomiga kora Ishonchnoma'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Qo'mita"
                        placeholder='Kredit Komisiyasi'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Manzil"
                        placeholder='Toshkent viloyati,Orta Chirchiq Tumani'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Rekvizit"
                        placeholder='H/r 0232 2392 2932 3923 ATB Universal Bank Toshkent filiali'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="ITN"
                        placeholder='STIR 300 515 648 OKED 64920'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Shahar"
                        placeholder='Toshkent'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Sudi"
                        placeholder='Fuqarolik ishlari boyicha Mirobod tumanlararo Sudi'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        type='number'
                        labelLeft='+998'
                        label="Raqam"
                        placeholder='99 123 45 67'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        type='number'
                        label="Kredit limiti"
                        placeholder='123456'
                        className='filial_input'
                        color="secondary"
                    />
                    <div className='filial_buttons'>
                        <button className='client_submit reset' onClick={openReset}>
                            Formani tiklash
                            <AiOutlineClear/>
                        </button>
                        <button type='submit' className='client_submit submit'>
                            Filiallni qo'shish
                            <AiOutlineUserAdd/>
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddFilial