import React, { useState } from 'react'

// Components
import { Input, Textarea, Radio } from '@nextui-org/react'

// Styles
import './KL1.css'

// Icons

function KL1() {
    const [ familyNumber, setFamilyNumber ] = useState(0)
    const [ familyInfo, setFamilyInfo ] = useState([])
    let dataFirst = {
        familyInformation : familyInfo,
    }
    let familyMembers = [{}]
    let familyDaromads = [{}]
    let mulkItems = [{}]
    const [ familyMem, setFamilyMem ] = useState(familyMembers)
    const [ familyDaromad, setFamilyDaromad ] = useState(familyDaromads)
    const [ mulkItem, setMulkItem ] = useState(mulkItems)
    const [ allInformation, setAllInformation ] = useState(dataFirst)

    // Family Members Adding and Deleting Functions
    function addFamilyMember () {
        let newFamilyMember = [{}]
        setFamilyMem(familyMem.concat(newFamilyMember))
    }
    function deleteFamilyMember (id) {
        if(familyMem.length>1){
            let newFamilyMembers = familyMem.filter((fam,famId)=> famId !== (id))
            setFamilyMem(newFamilyMembers)
        }
    }

    // Mulk Items Adding and Deleting Functions
    function addMulkItem () {
        let newmulkItem = [{}]
        setMulkItem(mulkItem.concat(newmulkItem))
    }
    function deleteMulkItem (id) {
        if(mulkItem.length>1){
            let newmulkItems = mulkItem.filter((mulk,mulkId)=> mulkId !== (id))
            setMulkItem(newmulkItems)
        }
    }

    // Family Daromads Adding and Deleting Functions
    function addfamDaromad () {
        let newfamilyDaromad = [{}]
        setFamilyDaromad(familyDaromad.concat(newfamilyDaromad))
    }
    function deletefamDaromad (id) {
        if(familyDaromad.length>1){
            let newfamilyDaromads = familyDaromad.filter((famDaromad,famDaromadId)=> famDaromadId !== (id))
            setFamilyDaromad(newfamilyDaromads)
        }
    }

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
                labelLeft='+998'
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
                className='kl1_input'
                />
                <p className='kl1_formtitle'>Birgalikda istiqomat qiluvchilar</p>
                {
                    familyMem.map((familyMember,familyMemberId)=>(
                        <div className='kl1_product' key={familyMemberId}>
                            <Input
                            rounded
                            bordered
                            label='Istiqomat qiluvchi'
                            placeholder="Otasi"
                            color="secondary"
                            width='90%'
                            className='kl1_input'
                            />
                            <button
                            className='kl1_delete_button'
                            onClick={() => deleteFamilyMember(familyMemberId)}
                            >
                                <i className='bx bx-trash'></i>
                            </button>
                        </div>
                    ))
                }
                <button
                className='kl1_add_button'
                onClick={()=>{addFamilyMember()}}
                >
                    Istiqomat qiluvhci qoshish
                </button>
                <Textarea
                width='100%'
                bordered
                rounded
                color="secondary"
                className='kl1_input'
                label='Oila azolari bilan suhbat davomida aniqlangan muhim malumotlar'
                placeholder='Buyurtmachining va oilaning byudjeti bitta'
                />
                <p className='kl1_formtitle'>Buyurtmachining boshqa mulklari</p>
                {
                    mulkItem.map((mulk,mulkId)=>(
                        <div className='kl1_product' key={mulkId}>
                            <Input
                            rounded
                            bordered
                            label='Mulk nomi'
                            placeholder="Damas"
                            color="secondary"
                            width='90%'
                            className='kl1_input'
                            />
                            <button
                            className='kl1_delete_button'
                            onClick={() => deleteMulkItem(mulkId)}
                            >
                                <i className='bx bx-trash'></i>
                            </button>
                        </div>
                    ))
                }
                <button
                className='kl1_add_button'
                onClick={()=>{addMulkItem()}}
                >
                    Mulkni xqoshish
                </button>
                <Textarea
                width='100%'
                bordered
                rounded
                color="secondary"
                className='kl1_input'
                label='Yashash sharoiti'
                placeholder='Yashash sharoiti ortacha. Uy 3 ta yotoqxona, oshxona, mehmonxona va hammomdan iborat. Uy tamiri orta darajada. Uy otasini nomida. Xovlining umumiy maydoni 6 sotix. Tomorqada 10 dan ortiq mevali daraxtlar bor. Shuningdek, uy xojaligini oz ehtiyojlari uchun pomidor, bodring, qalampir, baqlajon ekilgan.'
                />
                <h2 className='kl1_subtitle'>Buyurtmachining faoliyati va daromad  manbalarini organish natijalari</h2>
                <Textarea
                width='100%'
                bordered
                rounded
                color="secondary"
                className='kl1_input'
                label='Buyurtmachining faoliyat turi'
                placeholder='Savdo-transport vositalari uchun moy sotadi. Savdo bolmaydigan kunlari va har kuni soat 16:00 dan 21:00 gacha Yandeks Taksida taksichilik qiladi.'
                />
                <Input
                rounded
                bordered
                label='Faoliyat manzili'
                placeholder="Sergeli ehtiyot qismlari bozori, C blok, 19-do'kon"
                color="secondary"
                width='100%'
                className='kl1_input'
                />
                <Input
                rounded
                bordered
                label='Faoliyat joyi (shaxsiy / ijara / boshqa)'
                placeholder="Ijara"
                color="secondary"
                width='100%'
                className='kl1_input'
                />
                <Input
                rounded
                bordered
                label='Ushbu sohada foliyat yuritish davomiyligi'
                placeholder="3yildan oshiq"
                color="secondary"
                width='100%'
                className='kl1_input'
                />

                <div className='kl1_daromad_part'>
                    <h2 className='kl1_subtitle'>Buyurtmachining daromadlari</h2>
                    <Radio.Group color='secondary' value={3} size='sm' className='kl1_daromad_radio'>
                        <Radio value={1} className='kl1_daromad_radio_one'>Biznes daromadlar</Radio>
                        <Radio value={2} className='kl1_daromad_radio_one'>Mavsumiy daromadlar</Radio>
                        <Radio value={3} className='kl1_daromad_radio_one'>Boshqa daromadlar</Radio>
                    </Radio.Group>
                </div>

                <h2 className='kl1_subtitle'>Oilaviy daromadlar va xarajatlar (Uy xo'jaligining daromad va xarajatlari)</h2>
                {
                    familyDaromad.map((familyDaromad,familyDaromadId)=>(
                        <div className='kl1_products' key={familyDaromadId}>
                            <div className='kl1_product_title'>
                                Product {familyDaromadId+1}
                                <button
                                className='kl1_delete_button'
                                onClick={() => deletefamDaromad(familyDaromadId)}
                                >
                                    <i className='bx bx-trash'></i>
                                </button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                rounded
                                bordered
                                label='Daromad Egasi'
                                placeholder="Otasi"
                                color="secondary"
                                width='200px'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Faoliyat Turi'
                                placeholder="Nafaqada"
                                color="secondary"
                                width='200px'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Faoliyat Joyi'
                                placeholder="Yuqorichirchiq tuman 54-maktab"
                                color="secondary"
                                width='300px'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Bir oylik daromad'
                                placeholder="1 000 000"
                                color="secondary"
                                width='300px'
                                type='number'
                                className='kl1_input'
                                />
                                <Textarea
                                width='100%'
                                bordered
                                rounded
                                color="secondary"
                                className='kl1_input'
                                label='Izoh'
                                />
                            </div>
                        </div>
                    ))
                }
                <button
                className='kl1_add_button'
                onClick={()=>{addfamDaromad()}}
                >
                    Daromad qoshish
                </button>
                <Input
                rounded
                bordered
                readOnly
                label='Jami'
                initialValue='11 000 000'
                color="secondary"
                width='300px'
                type='number'
                className='kl1_input'
                />
            </div>
        </section>
    )
}

export default KL1