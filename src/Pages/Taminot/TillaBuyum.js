import React from 'react';
import './Taminot.css';

function TillaBuyum() {

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
        <div>
            <div className='taminot_ratio_parent'>
                        <p>Gavor mulkimning egasi</p>
                        <Radio.Group size='sm' className='taminot_ratio'>
                            <Radio value={1}>variant 1</Radio>
                            <Radio value={2}>variant 2</Radio>
                            <Radio value={3}>variant 3</Radio>
                        </Radio.Group>
                    </div>
                    <div className='taminot_ratio_parent'>
                        <Radio.Group size='sm' className='taminot_ratio'>
                            <Radio value={false}>variant 1</Radio>
                            <Radio value={true}> variant 2</Radio>
                        </Radio.Group>
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
    )
}

export default TillaBuyum