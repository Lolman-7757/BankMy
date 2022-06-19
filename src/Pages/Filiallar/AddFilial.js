import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import './Filial.css'
// Icons
import { AiOutlineRollback, AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai'
// Components
import { Input } from '@nextui-org/react';

function AddFilial() {
    return (
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
                    label="Qisqa momi"
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
                    <button className='client_submit reset'>
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
    )
}

export default AddFilial