import React, { useState } from 'react'
// Components
import { Input } from '@nextui-org/react'
// Styles
import './KL1.css'

function KL1() {
    let dataFirst = {
        familyNumber: 1
    }
    const [ data, setData ] = useState(dataFirst)
    const [ familyNumber, setFamilyNumber ] = useState(1)
    return (
        <section className='kl1'>
            <div className='kl1_title'>
                <h1>Kreditga layoqatilikni baholash varaqasi</h1>
            </div>
            <div className='kl1_content'>
                <Input
                rounded
                bordered
                label='Hujjat tayyorlangan sana'
                initialValue="05.07.2021"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Mijoz tekshirilgan va organilgan sana'
                initialValue="05.07.2021"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Buyurtmachining F.I.Sh'
                initialValue="Usmonova Muyassar Abduvalievna"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Doimiy yashash manzili'
                initialValue="Sirdariyo viloyati Guliston shahri Begmatov jochasi 46-uy 10-xonadon"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Vaqtinchalik yashash manzili'
                initialValue="Royihatga olingan manzili boyicha istiqomat qiladi"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='JSh ShIR'
                initialValue="41-3077-9287-0060"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Buyurtmachining telefon raqami'
                labelLeft='998'
                initialValue="90 995 59 90"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Kredit maqsadi'
                initialValue="Aylanma mablag'larini to'ldirish -Moy almashtirish va moylash materiallari, filtr sotib olish"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Soralayotgan kredit miqdori'
                initialValue="20 000 000 сум"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <h2 className='kl1_subtitle'>Buyurtmachining oilaviy sharoitini organish natijalari</h2>
                <Input
                rounded
                bordered
                label='Oila azolar soni'
                placeholder="5"
                color="secondary"
                width='100%'
                type='number'
                onChange={(event)=>setFamilyNumber(event.target.value)}
                className='kl1_input'
                />
            </div>
        </section>
    )
}

export default KL1