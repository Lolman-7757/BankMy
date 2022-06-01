import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { Radio } from "@nextui-org/react";
import { BiTrash } from 'react-icons/bi';

import './Taminot.css';

function TillaBuyum() {
    let bahos = [
        {

        }
    ]
    const [ bahoItems, setBahoItems ] = useState(bahos)
    const [ addBaho, setAddBaho ] = useState(false)
    const [ deleteBaho, setDeleteBaho ] = useState(false)
    const [ bahoType, setBahoType ] = useState(true)
    const maxBaho = 5;

    function addNewPoint() {
        if (bahoItems.length<maxBaho){
            let newPoint = [{}];
            setBahoItems(bahoItems.concat(newPoint))
        }else if(bahoItems.length>1){
            setDeleteBaho(false)
        }else{
            setAddBaho(true)
        }
    }
    function deletePoint(index) {
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
                <>
                <Input
                bordered
                label='Tilla buyumlarni baholovchi tashkilot'
                className='taminot_tableform_input'
                width='40%'
                clearable
                placeholder="Voziq Mirzo"
                color="secondary"
                />
                <Input
                bordered
                label='Litsenzya'
                className='taminot_tableform_input'
                width='40%'
                clearable
                placeholder=" Litsenziya BL001, RR0118, 19.02.2014 y. berilgan"
                color="secondary"
                />
                <Input
                bordered
                label='Baholovchining ismi sharifi'
                className='taminot_tableform_input'
                width='40%'
                clearable
                placeholder="B.Asomov"
                color="secondary"
                />
                <Input
                bordered
                label='Baholash hujjati raqami'
                className='taminot_tableform_input'
                width='40%'
                clearable
                placeholder="06/002"
                color="secondary"
                />
            </>
            )
        }else{
            return(<></>)
        }
    }


    return (
        <div className='taminot_form'>
            <div className='taminot_ratio_parent'>
                <p>Gavor mulkimning egasi</p>
                <Radio.Group defaultValue={1} size='sm' className='taminot_ratio'>
                    <Radio value={1}>Mijozining Ozi</Radio>
                </Radio.Group>
            </div>
            <div className='taminot_ratio_parent'>
                <Radio.Group size='sm' className='taminot_ratio' onChange={(event)=>setBahoType(event)}>
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
                width='40%'
                type='date'
                placeholder="11.02.22"
                color="secondary"
                />
                <Input
                bordered
                label='Tilla buyumlarning baholangan qiymati'
                className='taminot_tableform_input'
                width='40%'
                type='number'
                placeholder="17.000.000"
                color="secondary"
                readOnly
                />
                <Input
                bordered
                label='Baholangan qiymat, yozuvda'
                className='taminot_tableform_input'
                width='40%'
                type='text'
                placeholder="On yetti million"
                color="secondary"
                />
            </div>
            <div className='tamilot_main_table'>
                <h1>Baholash</h1>
                {
                    bahoItems.map((item,itemId)=>(
                        <div className='taminot_tableform_item' key={itemId}>
                            <form>
                                <Input
                                bordered
                                label='Nomi'
                                className='taminot_tableform_input'
                                width='200px'
                                clearable
                                placeholder="Uzuk"
                                color="secondary"
                                />
                                <Input
                                bordered
                                label='Proba'
                                className='taminot_tableform_input'
                                width='60px'
                                clearable
                                placeholder="583"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Soni'
                                className='taminot_tableform_input'
                                width='60px'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Umumiy og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='155px'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Toshlari og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='145px'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Sof og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='115px'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Baholangan qiymati(som)'
                                className='taminot_tableform_input'
                                width='200px'
                                placeholder="1"
                                color="secondary"
                                />
                            </form>
                        <button 
                        className={deleteBaho?'taminot_tableform_delete':'taminot_tableform_delete taminot_tableform_delete_active'} 
                        onClick={()=> deletePoint(itemId)}
                        >
                            <BiTrash/>
                        </button>
                        </div>
                    ))
                }
                <button 
                className={addBaho?'taminot_tableform_add':'taminot_tableform_add taminot_tableform_add_active'} 
                onClick={() => addNewPoint()}
                >
                    Add new Pointing!
                </button>
                <div className='taminot_grid'>
                                <Input
                                bordered
                                type='number'
                                label='Qabul qilish qiymati, %da'
                                className='taminot_tableform_input'
                                width='50%'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Qabul qilish qiymati, somda'
                                className='taminot_tableform_input'
                                width='50%'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Qabul qilish qiymati, yozuv50%da'
                                className='taminot_tableform_input'
                                width='50%'
                                placeholder="1"
                                color="secondary"
                                />
                </div>
            </div>
        </div>
    )
}

export default TillaBuyum