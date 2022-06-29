import React, { useState } from 'react'
// Components
import { Input } from '@nextui-org/react'

function Mavsumiy() {
    
    const [mavsumiyDaromads, setMavsumiyDaromads] = useState([{}])

    const [mavsumiyXarajats, setMavsumiyXarajats] = useState([{}])
 // Mavsumiy Daromads adding and deleting funtions
    function addMavsumiyDaromad(){
        let newMavsumiyDaromad = [{}]
        setMavsumiyDaromads(mavsumiyDaromads.concat(newMavsumiyDaromad))
    }
    function deleteMavsumiyDaromad(id){
        if(mavsumiyDaromads.length > 1){
            let newMavsumiyDaromads = mavsumiyDaromads.filter((item,index)=>index !== id)
            setMavsumiyDaromads(newMavsumiyDaromads)
        }
    }
 // Mavsumiy Xarajats adding and deleting funtions
    function addMavsumiyXarajat(){
        let newMavsumiyXarajat = [{}]
        setMavsumiyXarajats(mavsumiyXarajats.concat(newMavsumiyXarajat))
    }
    function deleteMavsumiyXarajat(id){
        if(mavsumiyXarajats.length > 1){
            let newMavsumiyXarajats = mavsumiyXarajats.filter((item,index)=>index !== id)
            setMavsumiyXarajats(newMavsumiyXarajats)
        }
    }
                    
    return (
        <>
            <>
                        <p className='kl1_formtitle'>Mavsumiy daromad turi, manbasi va faoliyat joyi</p>
                    {
                    mavsumiyDaromads?.map((item,index)=>{
                        return(
                        <div className='kl1_products'>
                            <div className='kl1_product_title'>
                            Mavsumiy daromad {index +1}
                                <button className='kl1_delete_button' onClick={()=>{deleteMavsumiyDaromad(index)}}><i className='bx bx-trash'></i></button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                    rounded
                                    bordered
                                    label='Daromad nomi'
                                    color="secondary"
                                    width='47%'
                                    className='kl1_input'
                                />
                                <Input
                                    rounded
                                    bordered
                                    label='Yillik daromad hajmi'
                                    color="secondary"
                                    width='47%'
                                    type='number'
                                    className='kl1_input'
                                />
                            </div>
                        </div>
                        )
                    })
                }
                <div className='kl1_product_footer'>
                    <button className='kl1_add_button' onClick={()=>{addMavsumiyDaromad()}}>
                    Mavsumiy daromad qoshish
                    </button>
                    <p className='kl1_jami'>JAMI: {'10 000 000'} so`m</p>
                </div>
                    <p className='kl1_formtitle'>Mavsumiy daromadlarning oylar bo'yicha taqsimlanishi</p>
                    <div className='kl1_calendar'>
                        <Input
                            rounded
                            bordered
                            label='Yanvar'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Fevral'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Mart'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Aprel'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='May'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Iyun'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Iyul'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Avgust'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Sentabr'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Oktabr'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Noyabr'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                        <Input
                            rounded
                            bordered
                            label='Dekabr'
                            placeholder='1 000 000'
                            color="secondary"
                            width='23%'
                            className='kl1_input'
                            type='number'
                        />
                    </div>
                </>
                <>
                        <p className='kl1_formtitle'>Mavsumiy xarajatlar</p>
                {
                    mavsumiyXarajats?.map((item,index)=>{
                        return(
                        <div className='kl1_products'>
                            <div className='kl1_product_title'>
                            Mavsumiy xarajat {index +1}
                                <button className='kl1_delete_button' onClick={()=>{deleteMavsumiyXarajat(index)}}><i className='bx bx-trash'></i></button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                    rounded
                                    bordered
                                    label='Xarajat nomi'
                                    color="secondary"
                                    width='47%'
                                    className='kl1_input'
                                />
                                <Input
                                    rounded
                                    bordered
                                    label='Yillik xarajat hajmi'
                                    color="secondary"
                                    width='47%'
                                    type='number'
                                    className='kl1_input'
                                />
                            </div>
                        </div>
                        )
                    })
                }
                <div className='kl1_product_footer'>
                    <button className='kl1_add_button' onClick={()=>{addMavsumiyXarajat()}}>
                    Mavsumiy xarajat qoshish
                    </button>
                    <p className='kl1_jami'>JAMI: {'10 000 000'} so`m</p>
                </div>
                
                <p className='kl1_formtitle'>Mavsumiy xarajatlarning oylar bo'yicha taqsimlanishi</p>
                <div className='kl1_calendar'>
                    <Input
                        rounded
                        bordered
                        label='Yanvar'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Febral'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Mart'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Aprel'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='May'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Iyun'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Iyul'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Avgust'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Sentabr'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Oktabr'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Noyabr'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    <Input
                        rounded
                        bordered
                        label='Dekabr'
                        placeholder='1 000 000'
                        color="secondary"
                        width='23%'
                        className='kl1_input'
                        type='number'
                    />
                    
                    </div>
            </>
        </>
    )
}

export default Mavsumiy