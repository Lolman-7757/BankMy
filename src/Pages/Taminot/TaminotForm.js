import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { Radio } from "@nextui-org/react";
import { BiTrash } from 'react-icons/bi';

import './Taminot.css';

function TaminotForm() {
    const [ bahoItems, setBahoItems ] = useState([{}])
    const [ addBaho, setAddBaho ] = useState(false)
    const [ deleteBaho, setDeleteBaho ] = useState(false)
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

    return (
        <section>
            <div className='taminot_tableform'>
                <div className='taminot_table'>
                    <div className='rare'>
                        <p>Taminot turi</p>
                        <select className='taminot_main_select'>
                            <option value="1">1 Taminot turi</option>
                            <option value="2">2 Taminot turi</option>
                            <option value="3">3 Taminot turi</option>
                            <option value="4">4 Taminot turi</option>
                            <option value="5">5 Taminot turi</option>
                            <option value="6">6 Taminot turi</option>
                            <option value="7">7 Taminot turi</option>
                            <option value="8">8 Taminot turi</option>
                        </select>
                    </div>
                    <div className='taminot_ratio_parent'>
                        <p>Gavor mulkimning egasi</p>
                        <Radio.Group size='sm' className='taminot_ratio'>
                            <Radio value={false}>variant 1</Radio>
                            <Radio value={true}>variant 2</Radio>
                            <Radio value={false}>variant 3</Radio>
                        </Radio.Group>
                    </div>
                    <div className='taminot_ratio_parent'>
                        <Radio.Group size='sm' className='taminot_ratio'>
                            <Radio value={false}>variant 1</Radio>
                            <Radio value={true}> variant 2</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className='tamilot_main_table'>
                    <p className='tamilot_'>Baholash</p>
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
                                width='100px'
                                clearable
                                placeholder="583"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Soni'
                                className='taminot_tableform_input'
                                width='100px'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Umumiy og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='160px'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Toshlari og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='160px'
                                placeholder="1"
                                color="secondary"
                                />
                                <Input
                                bordered
                                type='number'
                                label='Sof og`irligi(gr)'
                                className='taminot_tableform_input'
                                width='160px'
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
                </div>
            </div>
        </section>
    )
}

export default TaminotForm