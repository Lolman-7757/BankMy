import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { Radio } from "@nextui-org/react";

// Icons
import { AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';


import './Taminot.css';

function TillaBuyum() {
    
    const [ addBaho, setAddBaho ] = useState(false)
    const [ deleteBaho, setDeleteBaho ] = useState(false)
    const [ bahoType, setBahoType ] = useState(true)
    // bahoData
    const [ nomi, setNomi ] = useState('')
    const [ proba, setProba ] = useState('')
    const [ soni, setSoni ] = useState('')
    const [ umumiy, setUmumiy ] = useState('')
    const [ toshlar, setToshlar ] = useState('')
    const [ sof, setSof ] = useState('')
    const [ bahoQiymat, setBahoQiymat ] = useState('')
    const [ costPerGr, setCostPerGr ] = useState('')
    const maxBaho = 5;
    
    let bahos = [
        {
            nomi: nomi,
            proba: proba,
            soni: soni,
            umumiy_ogirlik: umumiy,
            toshlar_ogirlik: toshlar,
            sof_ogirlik: sof,
            baholangan_qiymat: bahoQiymat,
        },
    ]
    let baho = {
        bahoses: bahos,
    }
    const [ bahoItems, setBahoItems ] = useState(bahos)

    function resetForm (e) {
        e.preventDefault(); 
        document.querySelector(`form`).reset()
    }
    function addNewPoint(e) {
        e.preventDefault()
        if (bahoItems.length<maxBaho){
            let newPoint = [
                {
                    nomi: nomi,
                    proba: proba,
                    soni: soni,
                    umumiy_ogirlik: umumiy,
                    toshlar_ogirlik: toshlar,
                    sof_ogirlik: sof,
                    baholangan_qiymat: bahoQiymat,
                }
            ];
            setBahoItems(bahoItems.concat(newPoint))
        }else if(bahoItems.length>1){
            setDeleteBaho(false)
        }else{
            setAddBaho(true)
        }
    }
    function deletePoint(index,event) {
        event.preventDefault()
        if (bahoItems.length>1){
            let filtredPoint = bahoItems.filter((bahi,bahoId)=> bahoId !== (index))
            setBahoItems(filtredPoint)
        }else if(bahoItems.length<maxBaho){
            setAddBaho(false)
        }else{
            setDeleteBaho(true)
        }
    }
    function baholashType (){
        if(bahoType){
            return(
                <div className='taminot_bahoType'>
                <Input
                bordered
                label='Tilla buyumlarni baholovchi tashkilot'
                className='taminot_tableform_input'
                width='100%'
                clearable
                placeholder="Voziq Mirzo"
                color="secondary"
                />
                <Input
                bordered
                label='Litsenzya'
                className='taminot_tableform_input'
                width='100%'
                clearable
                placeholder=" Litsenziya BL001, RR0118, 19.02.2014 y. berilgan"
                color="secondary"
                />
                <Input
                bordered
                label='Baholovchining ismi sharifi'
                className='taminot_tableform_input'
                width='100%'
                clearable
                placeholder="B.Asomov"
                color="secondary"
                />
                <Input
                bordered
                label='Baholash hujjati raqami'
                className='taminot_tableform_input'
                width='100%'
                clearable
                placeholder="06/002"
                color="secondary"
                />
            </div>
            )
        }else{
            return(<></>)
        }
    }


    return (
        <form className='taminot_form'>
            <div className='taminot_tilla_title'>
                <p>Gavor mulkimning egasi</p>
                <Radio.Group color='secondary' value={1} size='sm' className='taminot_ratio'>
                    <Radio value={1}>Mijozining Ozi</Radio>
                </Radio.Group>
            </div>
            <div className='taminot_ratio_parent'>
                <Radio.Group color='secondary' value={true} size='sm' className='taminot_ratio' onChange={(event)=>setBahoType(event)}>
                    <Radio value={true}>Mustaqil Baholash Asosida</Radio>
                    <Radio value={false}>O'zaro kelishuvga asosan</Radio>
                </Radio.Group>
            </div>
            <div className='taminot_grid_inputs'>
                {baholashType()}
                <Input
                bordered
                label='Baholash hujjati sanasi'
                className='taminot_tableform_input'
                width='100%'
                type='date'
                placeholder="11.02.22"
                color="secondary"
                />
                <Input
                bordered
                label='Tilla buyumlarning baholangan qiymati'
                className='taminot_tableform_input'
                width='100%'
                type='number'
                placeholder="17.000.000"
                color="secondary"
                readOnly
                />
                <Input
                bordered
                label='Baholangan qiymat, yozuvda'
                className='taminot_tableform_input'
                width='100%'
                type='text'
                placeholder="On yetti million"
                color="secondary"
                />
            </div>
            <div className='tamilot_main_table'>
                <h1>Baholash natijalari</h1>
                {
                    bahoItems.map((item,itemId)=>(
                        <div className='taminot_tableform_item' key={itemId}>
                            <div className='taminot_tableform_title'>
                                <h2>Product №{itemId+1}</h2>
                                <button 
                                className={deleteBaho?'taminot_tableform_delete':'taminot_tableform_delete taminot_tableform_delete_active'} 
                                onClick={(event)=> deletePoint(itemId,event)}
                                >
                                    <BiTrash/>
                                </button>
                            </div>
                            <form>
                                <Input
                                bordered
                                label='Nomi'
                                className='taminot_tableform_input'
                                width='200px'
                                clearable
                                placeholder="Uzuk"
                                color="secondary"
                                onChange={(event)=>setNomi(event.target.value)}
                                />
                                <Input
                                bordered
                                label='Proba'
                                className='taminot_tableform_input'
                                width='200px'
                                clearable
                                placeholder="583"
                                color="secondary"
                                onChange={(event)=>setProba(event.target.value)}
                                />
                                <Input
                                bordered
                                type='number'
                                label='Soni'
                                className='taminot_tableform_input'
                                width='200px'
                                placeholder="1"
                                color="secondary"
                                onChange={(event)=>setSoni(event.target.value)}
                                />
                                <Input
                                bordered
                                type='number'
                                label='Umumiy og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='200px'
                                placeholder="1"
                                color="secondary"
                                onChange={(event)=>setUmumiy(event.target.value)}
                                />
                                <Input
                                bordered
                                type='number'
                                label='Toshlari og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='200px'
                                placeholder="1"
                                color="secondary"
                                onChange={(event)=>setToshlar(event.target.value)}
                                />
                                <Input
                                bordered
                                type='number'
                                label='Sof og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='200px'
                                placeholder="1"
                                color="secondary"
                                readOnly
                                initialValue={umumiy - toshlar}
                                onChange={(event)=>setSof(event.target.value)}
                                />
                                <Input
                                bordered
                                type='number'
                                label='Gramm uchun narx(so`m)'
                                className='taminot_tableform_input'
                                width='200px'
                                placeholder="1"
                                color="secondary"
                                onChange={(event)=>setCostPerGr(event.target.value)}
                                />
                                <Input
                                bordered
                                type='number'
                                label='Baholangan qiymati(som)'
                                className='taminot_tableform_input'
                                width='200px'
                                placeholder="1"
                                color="secondary"
                                readOnly
                                initialValue={(sof*costPerGr)*soni}
                                onChange={(event)=>setBahoQiymat(event.target.value)}
                                />
                            </form>
                        </div>
                    ))
                }
                <button 
                className={addBaho?'taminot_tableform_add':'taminot_tableform_add taminot_tableform_add_active'} 
                onClick={(event) => addNewPoint(event)}
                >
                    Add new Pointing!
                </button>
                <div className='taminot_grid'>
                                <Input
                                bordered
                                type='number'
                                label='Qabul qilish qiymati, %da'
                                className='taminot_tableform_input'
                                width='100%'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Qabul qilish qiymati, somda'
                                className='taminot_tableform_input'
                                width='100%'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Qabul qilish qiymati, yozuv50%da'
                                className='taminot_tableform_input'
                                width='100%'
                                placeholder="1"
                                color="secondary"
                                />
                </div>
            </div>
            <div className='taminot_button_block'>
                <button className='taminot_reset' onClick={(event)=> resetForm(event)}>
                    Reset
                    <AiOutlineClear/>
                </button>
                <button className='taminot_submit' onClick={()=>console.log(bahoItems)}>
                    Submit
                    <AiOutlineUserAdd/>
                </button>
            </div>
        </form>
    )
}

export default TillaBuyum