import React, { useState } from 'react'
import { Input, Textarea, Radio,Checkbox } from '@nextui-org/react'

function KL1_Oilaviy() {
    let familyDaromads = [{}]
    let familyXarajats = [{}]
    let familyMalumots = [{}]

    const [ familyDaromad, setFamilyDaromad ] = useState(familyDaromads)
    const [ familyXarajat, setFamilyXarajat ] = useState(familyXarajats)
    const [ familyMalumot, setFamilyMalumot ] = useState(familyMalumots)

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
    // Family Xarajats Adding and Deleting Functions
    function addfamXarajat () {
        let newfamilyXarajat = [{}]
        setFamilyXarajat(familyXarajat.concat(newfamilyXarajat))
    }
    function deletefamXarajat (id) {
        if(familyXarajat.length>1){
            let newfamilyXarajats = familyXarajat.filter((famXarajat,famXarajatId)=> famXarajatId !== (id))
            setFamilyXarajat(newfamilyXarajats)
        }
    }
    // Family Malumots Adding and Deleting Functions
    function addfamMalumot () {
        let newfamilyMalumot = [{}]
        setFamilyMalumot(familyMalumot.concat(newfamilyMalumot))
    }
    function deletefamMalumot (id) {
        if(familyMalumot.length>1){
            let newfamilyMalumots = familyMalumot.filter((famMalumot,famMalumotId)=> famMalumotId !== (id))
            setFamilyMalumot(newfamilyMalumots)
        }
    }
  return (
    <>
                    <h2 className='kl1_subtitle'>Oilaviy daromadlar va xarajatlar (Uy xo'jaligining daromad va xarajatlari)</h2>
                <p className='kl1_formtitle'>Oila azolarining daromadlar , shuningdek uy xojaligining boshqa daromadlari</p>
                {
                    familyDaromad.map((familyDaromad,familyDaromadId)=>(
                        <div className='kl1_products' key={familyDaromadId}>
                            <div className='kl1_product_title'>
                                Odam {familyDaromadId+1}
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
                                width='47%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Faoliyat Turi'
                                placeholder="Nafaqada"
                                color="secondary"
                                width='47%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Faoliyat Joyi'
                                placeholder="Yuqorichirchiq tuman 54-maktab"
                                color="secondary"
                                width='47%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Bir oylik daromad'
                                placeholder="1 000 000"
                                color="secondary"
                                width='47%'
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
                <div className='kl1_product_footer'>
                    <button
                    className='kl1_add_button'
                    onClick={()=>{addfamDaromad()}}
                    >
                        Daromad qoshish
                    </button>
                    <p className='kl1_jami'>JAMI: {'10 000 000'} so`m</p>
                </div>

                <p className='kl1_formtitle'>Uy xojaligining xarajatlari</p>
                {
                    familyXarajat.map((familyXarajat,familyXarajatId)=>(
                        <div className='kl1_products' key={familyXarajatId}>
                            <div className='kl1_product_title'>
                                Xarajat {familyXarajatId+1}
                                <button
                                className='kl1_delete_button'
                                onClick={() => deletefamXarajat(familyXarajatId)}
                                >
                                    <i className='bx bx-trash'></i>
                                </button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                rounded
                                bordered
                                label='Xarajat nomi'
                                placeholder="Oziq-ovqat uchun"
                                color="secondary"
                                width='47%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Ortaja oylik xarajat'
                                placeholder="1 500 000,00"
                                color="secondary"
                                width='47%'
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
                <div className='kl1_product_footer'>
                    <button
                    className='kl1_add_button'
                    onClick={()=>{addfamXarajat()}}
                    >
                        Xarajat qoshish
                    </button>
                    <p className='kl1_jami'>JAMI: {'10 000 000'} so`m</p>
                </div>

                <p className='kl1_formtitle'>Uy xojaligi azolarining mavjud kredit va qarzdorliklari togrisidagi malumotlar</p>
                {
                    familyMalumot.map((familyMalumot,familyMalumotId)=>(
                        <div className='kl1_products' key={familyMalumotId}>
                            <div className='kl1_product_title'>
                                Malumot {familyMalumotId+1}
                                <button
                                className='kl1_delete_button'
                                onClick={() => deletefamMalumot(familyMalumotId)}
                                >
                                    <i className='bx bx-trash'></i>
                                </button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                rounded
                                bordered
                                label='Malumot nomi'
                                placeholder="Qishloq Qurilish bank"
                                color="secondary"
                                width='31%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Asosiy qarz qoldigi'
                                placeholder="5 700 000,00"
                                color="secondary"
                                width='31%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Oylik tolov miqdori'
                                placeholder="843 000,00"
                                color="secondary"
                                width='31%'
                                className='kl1_input'
                                />
                                <Textarea
                                width='100%'
                                bordered
                                rounded
                                color="secondary"
                                className='kl1_input'
                                placeholder='Istemol krediti 23%dan'
                                label='Izoh'
                                />
                            </div>
                        </div>
                    ))
                }
               
                <div className='kl1_product_footer'>
                    <button
                    className='kl1_add_button'
                    onClick={()=>{addfamMalumot()}}
                    >
                        Malumot qoshish
                    </button>
                    <div className='flex_column'>
                        <p className='kl1_jami margin_bottom'>Jami asosiy qarz qoldigi: {'10 000 000'} so`m</p>
                        <p className='kl1_jami margin_bottom'>Jami oylik tolov miqdori: {'10 000 000'} so`m</p>
                    </div>
                </div>
                <p className='kl1_jami'>Uy xojaligi byudjetining ortacha oylik ortiqcha mablagi yoki kamomadi miqdori: {'10 000 000'} so`m</p>
                </>
  )
}

export default KL1_Oilaviy