import React, { useState } from 'react'
// Components
import { Input, Textarea } from '@nextui-org/react'

function BuyurtmaOylik() {
    // Datas
    let familyMavjuds = [{}]
    const [ familyMavjud, setFamilyMavjud ] = useState(familyMavjuds)

    // FUNCTIONS

    // Family Mavjuds Adding and Deleting Functions
    function addfamMavjud () {
        let newfamilyMavjud = [{}]
        setFamilyMavjud(familyMavjud.concat(newfamilyMavjud))
    }
    function deletefamMavjud (id) {
        if(familyMavjud.length>1){
            let newfamilyMavjuds = familyMavjud.filter((famMavjud,famMavjudId)=> famMavjudId !== (id))
            setFamilyMavjud(newfamilyMavjuds)
        }
    }
    
    return (
        <>
            <h2 className='kl1_subtitle'>Buyurtmachining mavjud kredit va qarz majburiyatlari</h2>
            {
                familyMavjud.map((familyMavjud,familyMavjudId)=>(
                    <div className='kl1_products' key={familyMavjudId}>
                        <div className='kl1_product_title'>
                            Mavjud malumot {familyMavjudId+1}
                            <button
                            className='kl1_delete_button'
                            onClick={() => deletefamMavjud(familyMavjudId)}
                            >
                                <i className='bx bx-trash'></i>
                            </button>
                        </div>
                        <div className='kl1_product'>
                            <Input
                            rounded
                            bordered
                            label='Mavjud kredit va qarzlar'
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
                onClick={()=>{addfamMavjud()}}
                >
                    Mavjud kredit va qarz qoshish
                </button>
                <div className='flex_column'>
                    <p className='kl1_jami margin_bottom'>Jami asosiy qarz qoldigi: {'10 000 000'} so`m</p>
                    <p className='kl1_jami margin_bottom'>Jami oylik tolov miqdori: {'10 000 000'} so`m</p>
                    <p className='kl1_jami '>Joiriy kreditlar boyicha qarz yuki korsatkichi: {'22%'}</p>
                </div>
            </div>

            <h2 className='kl1_subtitle'>Oylik kredit tolovi ( eng katta tolov miqdori )</h2>
            <div className='flex-row'>
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Asosiy qarz'
                    initialValue='5 000 000'
                    color="secondary"
                    width='23%'
                    className='kl1_input'
                />
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Foizlar'
                    initialValue='985 205'
                    color="secondary"
                    width='23%'
                    className='kl1_input'
                />
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami oylik tolov'
                    initialValue='5 985 205'
                    color="secondary"
                    width='23%'
                    className='kl1_input'
                />
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Soralayotgan kredit hisobi qarzi yoki korsatkichi (<50%)'
                    initialValue='83,5%'
                    status="error"
                    shadow={false}
                    width='23%'
                    className='kl1_input'
                />
            </div>
            <Textarea
            width='100%'
            bordered
            rounded
            color="secondary"
            className='kl1_input'
            placeholder='Jami 7 marotaba kredit olgan, shu jumladan, Renesansdan 2 marotaba. Muntazam o‘z vaqtida to‘lagan. 30 kungacha kechiktirishlar soni - 0, 30 kundan ortiq kechiktirishlar soni - 0'
            label='Kredit tarixi'
            />
        </>
    )
}

export default BuyurtmaOylik