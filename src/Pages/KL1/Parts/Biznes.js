import React, { useState } from 'react'
// Components
import { Input, Textarea } from '@nextui-org/react'

function Biznes() {
    // Datas     
    const [biznesDaromads, setBiznesDaromads] = useState([{}])
    const [biznesXarajats, setBiznesXarajats] = useState([{}])
// Biznes Daromads adding and deleting funtions
    function addBiznesDaromad(){
        let newBiznesDaromad = [{}]
        setBiznesDaromads(biznesDaromads.concat(newBiznesDaromad))
    }
    function deleteBiznesDaromad(id){
        if(biznesDaromads.length > 1){
            let newBiznesDaromads = biznesDaromads.filter((item,index)=>index !== id)
            setBiznesDaromads(newBiznesDaromads)
        }
    }
// Biznes Xarajats adding and deleting funtions
    function addBiznesXarajat(){
        let newBiznesXarajat = [{}]
        setBiznesXarajats(biznesXarajats.concat(newBiznesXarajat))
    }
    function deleteBiznesXarajat(id){
        if(biznesXarajats.length > 1){
            let newBiznesXarajats = biznesXarajats.filter((item,index)=>index !== id)
            setBiznesXarajats(newBiznesXarajats)
        }
    }
    return (
        <>
            <div>
                <p className='kl1_formtitle'>Biznes daromadlar turi</p>

                {
                    biznesDaromads?.map((item,index)=>{
                        return(
                        <div className='kl1_products'>
                            <div className='kl1_product_title'>
                            Biznes daromad {index +1}
                                <button className='kl1_delete_button' onClick={()=>{deleteBiznesDaromad(index)}}><i className='bx bx-trash'></i></button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                    rounded
                                    bordered
                                    label='Daromad nomi'
                                    color="secondary"
                                    width='100%'
                                    className='kl1_input'
                                />
                                <Input
                                    rounded
                                    bordered
                                    label='Oylik hajm'
                                    color="secondary"
                                    width='47%'
                                    className='kl1_input'
                                />
                                <Input
                                    rounded
                                    bordered
                                    label='1 birlikning o`rtacha sotish naxri'
                                    color="secondary"
                                    width='47%'
                                    type='number'
                                    className='kl1_input'
                                />
                                <Input
                                    rounded
                                    bordered
                                    label='O`rtacha ustamasi % da'
                                    color="secondary"
                                    width='47%'
                                    type='number'
                                    className='kl1_input'
                                />
                                <Input
                                    rounded
                                    bordered
                                    label='Bir oylik daromad'
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
                        )
                    })
                }
                <div className='kl1_product_footer'>
                    <button className='kl1_add_button' onClick={()=>{addBiznesDaromad()}}>
                        Biznes daromad qoshish
                    </button>
                    <p className='kl1_jami'>JAMI: {'10 000 000'} so`m</p>  
                </div>
                </div>
                
                <div>
                    <p className='kl1_formtitle'>Biznes uchun xarajatlar</p>

                    {
                        biznesXarajats?.map((item,index)=>{
                            return(
                            <div className='kl1_products'>
                                <div className='kl1_product_title'>
                                Biznes xarajat {index +1}
                                    <button className='kl1_delete_button' onClick={()=>{deleteBiznesXarajat(index)}}><i className='bx bx-trash'></i></button>
                                </div>
                                <div className='kl1_product'>
                                    <Input
                                        rounded
                                        bordered
                                        label='Xarajat nomi'
                                        color="secondary"
                                        width='100%'
                                        className='kl1_input'
                                    />
                                    <Input
                                        rounded
                                        bordered
                                        label='Hajm'
                                        color="secondary"
                                        width='47%'
                                        className='kl1_input'
                                    />
                                    <Input
                                        rounded
                                        bordered
                                        label='Naxri'
                                        color="secondary"
                                        width='47%'
                                        type='number'
                                        className='kl1_input'
                                    />
                                    <Input
                                        rounded
                                        bordered
                                        label='Qiymati'
                                        color="secondary"
                                        width='47%'
                                        type='number'
                                        className='kl1_input'
                                    />
                                    <Input
                                        rounded
                                        bordered
                                        label='O`rtacha oylik xarajat'
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
                            )
                        })
                    }
                    <div className='kl1_product_footer'>
                        <button className='kl1_add_button' onClick={()=>{addBiznesXarajat()}}>
                            Biznes xarajat qoshish
                        </button>
                        <p className='kl1_jami'>JAMI: {'10 000 000'} so`m</p>
                    </div>
                </div>
        </>
    )
}

export default Biznes