import React, { useState } from 'react'
import { Input,Radio } from '@nextui-org/react'
import { AiOutlineFileAdd,AiOutlineClear } from 'react-icons/ai';


import './Transport.css'

function Transport() {

    const [transportProducts, setTransportProducts] = useState([{}]);
    const [firstTable,setFirstTable]= useState('transport_garovPart close');
    const [secondTable,setSecondTable]= useState('transport_ishonchnomaPart close');
    const [garov, setGarov]= useState('transport_fourInputs close');
    

    function tables(a){
        if(a==1){
            setFirstTable('transport_garovPart close')
            setSecondTable('transport_ishonchnomaPart close')
        }
        else if(a==2){
            setFirstTable('transport_garovPart open')
            setSecondTable('transport_ishonchnomaPart close')
        }else if(a==3){
            setFirstTable('transport_garovPart open')
            setSecondTable('transport_ishonchnomaPart open')
        }
    }

    function fourInputs(b){
        if(b==1){
            setGarov('transport_fourInputs open')
        }
        else if(b==2){
            setGarov('transport_fourInputs close')
        }
    }

    function addNewTransportProduct(){
        let newProduct = [{}]
        setTransportProducts(transportProducts.concat(newProduct))    
    }

    function deleteTransportProduct(id){
        if(transportProducts.length > 1){
            setTransportProducts( transportProducts.filter((item,index)=> index !== id) )
        }else{
            setTransportProducts(transportProducts)
        }
    }


  return (
    <section className='transport_section'>
        <div className='transport_main'>
            <div className='transport_garov'>
                <p>Garov mulkining egasi</p>
                <div>
                    <Radio.Group color='secondary' value={1} size='sm' className='transport_garov_radioGroup' onChange={(e)=>tables(e)}>
                        <Radio value={1} className='transport_garov_radio'>Mijozning o'zi</Radio>
                        <Radio value={2} className='transport_garov_radio'>Uchinchi shaxs</Radio>
                        <Radio value={3} className='transport_garov_radio'>Ishonchnoma asosida</Radio>
                    </Radio.Group>
                </div>
            </div>

            <div className='transport_addition'>
                <Radio.Group color='secondary' value={2} size='sm' className='transport_addition_radioGroup' onChange={(e)=>fourInputs(e)}>
                    <Radio value={1} className='transport_addition_radio'>Mustaqil baholash asosida</Radio>
                    <Radio value={2} className='transport_addition_radio'>O'zaro kelishuvga asosan</Radio>
                </Radio.Group>
            </div>

            <div className={garov}>
                <Input 
                    label='Transport vositasini baholovchi tashkilo'
                    placeholder='Vosiq Mirzo'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>
                <Input 
                    label='Litsenziya'
                    placeholder='Litsenziya BL001, RR0118, 19.02.2014 y. berilgan'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>
                <Input 
                    label='Baholovchining ismi sharifi'
                    placeholder='B.Asomov'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>
                <Input 
                    label='Baholash hujjati raqami'
                    placeholder='06/002'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_fourInputs_input'
                    clearable
                >
                </Input>    
            </div>

            <div className='transport_mainInputs'>
                <Input 
                    label='Qayd etish guvohnomasi'
                    placeholder='AAF № 0186343'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                    clearable
                >
                </Input>  
                <Input 
                    label='Baholovchi hujjat sanasi'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                    type='date'
                >
                </Input>  
                <Input 
                    label='Baholangan qiymati'
                    initialValue="120 000  000 som"
                    readOnly
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                >
                </Input>  
                <Input 
                    label='Baholangan qiymati, yozuvda'
                    initialValue='Bir yuz yigirma million som 00 tiyin'
                    readOnly
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_mainInputs_input' 
                >
                </Input>  
            </div>

    {/****************************--- TABLE ---****************************/}

            <div className='transport_table'>
                <div className='transport_table_title_part'>
                    <p className='transport_table_title'>Baholash natijalari</p>
                </div>
                {
                    transportProducts.map((product,productIndex)=>{
                        return(
                                <div className='transport_table_product' key={productIndex}>
                                    <div className='transport_table_product_title'>
                                        <p>Product {productIndex + 1}</p>
                                        <button onClick={()=>deleteTransportProduct(productIndex)}><i className='bx bxs-trash'></i></button>
                                    </div>
                                    <div className='transport_table_things'>
                                        <Input 
                                            label='Nomi'
                                            placeholder='Damos'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>  
                                        <Input 
                                            label='Ishlab chiqarilgan yi'
                                            placeholder='2009'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>
                                        <Input 
                                            label='Davlat raqam belgisi'
                                            placeholder='FR 447 RJ'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>
                                        <Input 
                                            label='Transport vositasi turi'
                                            placeholder='yengil sedan'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>
                                        <Input 
                                            label='Dvigatel raqami'
                                            placeholder='447 118'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>
                                        <Input 
                                            label='Kuzov raqami'
                                            placeholder='JF92JJFLDKSF9034J'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>
                                        <Input 
                                            label='Shassi №'
                                            placeholder='Raqamsiz'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>
                                        <Input 
                                            label="Baholangan qiymati, so'm"
                                            placeholder='140 000 000'
                                            clearable
                                            width='200px'
                                            color="secondary"
                                            bordered 
                                            type='number'
                                            className='transport_tableProduct_input' 
                                        >
                                        </Input>
                                    </div>
                                </div>
                        )
                    })
                }
                <div className='transport_product_addPlace'>
                    <button className='transport_product_addButton' onClick={()=>addNewTransportProduct()}><i className='bx bx-plus-circle'></i></button>
                </div>
            </div>


            <div className='transport_endMainInputs'>
                <Input 
                    label='Qabul qilish qiymati, %da'
                    placeholder='35,71%'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_endMainInputs_input' 
                >
                </Input>  
                <Input 
                    label="Qabul qilish qiymati, so'mda"
                    placeholder=' 50 000 000'
                    type='number'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_endMainInputs_input' 
                >
                </Input>  
                <Input 
                    label='Qabul qilish qiymati, yozuvda'
                    placeholder='Ellik million som 00 tiyin'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_endMainInputs_input' 
                >
                </Input>  
                <Input 
                    label='Identifikatsiya raqami (JShShIR)'
                    width='100%'
                    color="secondary"
                    bordered 
                    className='transport_endMainInputs_input' 
                >
                </Input>  
            </div>

            <div className={firstTable}>
                <p>Garov mulki egasining ma'lumotlari</p>
                <div>
                    <Input 
                        label='Garov mulki egasining F.I.Sh.'
                        placeholder=' Muxammadshukurov Xusniddin Fatxulla o`g`li'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    >
                    </Input>
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
                    <Input 
                        label='Seriyasi va raqami'
                        placeholder='AA 87654321'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    >
                    </Input>
                    <Input 
                        label='Kim tomonidan berilgan'
                        clearable
                        placeholder='Toshkent viloyati Bo`ka tumani Mudofa '
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    >
                    </Input>
                    <Input 
                        label='Berilgan sana'
                        type='date'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    >
                    </Input>
                    <Input 
                        label="Ro'yxat bo'yicha yashash manzili"
                        clearable
                        placeholder='Toshkent viloyati Bo`ka tumani Y.Xojimetov fu O`zbekiston ko`chasi 92 uy'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    >
                    </Input>
                    <Input 
                        label='Identifikatsiya raqami (JShShIR)'
                        placeholder='123456789'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_garovPart_input' 
                    >
                    </Input>   
                </div>
            </div>

            <div className={secondTable}>
                <p>Ishonchnoma berilgan shaxs ma'lumotlari</p>
                <div>
                    <Input 
                        label='F.I.Sh.'
                        placeholder='Maxkamova Kimdir Kimsanovna'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>
                    <select className='transport_ishonchnomaPart_input'>
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
                    <Input 
                        label='Seriyasi va raqami'
                        placeholder='AA 87654321'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>
                    <Input 
                        label='Kim tomonidan berilgan'
                        clearable
                        placeholder='Toshkent viloyati Bo`ka tumani Mudofa '
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>
                    <Input 
                        label='Berilgan sana'
                        type='date'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>
                    <Input 
                        label="Ro'yxat bo'yicha yashash manzili"
                        clearable
                        placeholder='Toshkent viloyati Bo`ka tumani Y.Xojimetov fu O`zbekiston ko`chasi 92 uy'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>
                    <Input 
                        label='Ishonchnoma raqami'
                        placeholder='123456789'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>  
                    <Input 
                        label=' Ishonchnoma berilgan sana'
                        type='date'
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>  
                    <Input 
                        label='Identifikatsiya raqami (JShShIR)'
                        clearable
                        width='100%'
                        color="secondary"
                        bordered 
                        className='transport_ishonchnomaPart_input' 
                    >
                    </Input>   
                </div>
            </div>

            <div className='submit-buttons'>
                <button className='client_submit reset'>
                    Reset Form
                    <AiOutlineClear/>
                </button>
                <button className='client_submit submit'>
                    Submit Client
                    <AiOutlineFileAdd/>
                </button>
            </div>
        </div>
        <div className='taminot_button_block'>
                <button className='taminot_reset' onClick={(event)=>{event.preventDefault();document.querySelector(`form`).reset()}}>
                    Reset
                    <AiOutlineClear/>
                </button>
                <button className='taminot_submit'>
                    Submit
                    <AiOutlineUserAdd/>
                    
                </button>
            </div>
    </section>
  )
}

export default Transport