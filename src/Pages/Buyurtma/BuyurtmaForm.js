import React, {useState} from 'react'
import { Input,Checkbox } from '@nextui-org/react'
import { AiOutlineRollback } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AiOutlineFileAdd,AiOutlineClear } from 'react-icons/ai';
import Select from 'react-select';
// import { Select } from 'antd';

// import 'antd/dist/antd.css';

import './Buyurtma.css'
// const { Option } = Select;



function BuyurtmaForm() {
    // const [ money, setMoney ] = useState(0);


    const [resetWarning, setResetWarning] = useState('warning_reset_main close')

    function openReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main open')
    }
    function closeReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main close')
    }

    // Selector
    const options = [
        { value: '1', label: 'variant 1' },
        { value: '2', label: 'variant 2' },
        { value: '3', label: 'variant 3' },
        { value: '4', label: 'variant 4' },
        { value: '5', label: 'variant 5' },
        { value: '6', label: 'variant 6' }
      ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            padding: 10,
            borderRadius:5
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            
            return { ...provided, opacity, transition };
        }
    }

    return (
        <>
        {/* Reset Warning */}
        <div className={resetWarning}>
            <p>Haqiqatan ham ma'lumontlarni qayta tiklamoqchimisiz?</p>
            <div >
            <button onClick={closeReset}>Ha</button>
            <button onClick={closeReset}>Yoq</button>
            </div>
        </div>

        <Link to='/buyurtma' className='clientform_back back-back'>
            <AiOutlineRollback/>
                Orqaga
        </Link>
        <div className='shart_nama'>
            <div className='buyurtma_form_main'>
                <p className='buyurtma_form_main_title'></p>
                <div className='buyurtma_form_main_forma'>
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        label="Buyurtma sanasi"
                        bordered
                        color="secondary"
                        type='date'
                    />
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="So'ralayotgan qarz miqdor"
                        placeholder="20 000 000 som"
                        type='number'
                        bordered
                        color="secondary"
                        // value={money}
                        // onInput={(event)=>setMoney(event.target.value.replace(/(?:(^\d{1,3})(?=(?:\d{3})*$)|(\d{3}))(?!$)/mg, '$1$2.'))}
                    />
                    {/* <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Qarz miqdori, yozuvda"
                        placeholder="Yigirma million som 00 tiyin"
                        bordered
                        color="secondary"
                    /> */}
                    <div className='shart-check'>
                        <Checkbox 
                        value="Kredit Qo'mitasi qorariga asosan"
                        size='sm'
                        color="secondary"
                        >
                            Kredit Qo'mitasi qorariga asosan
                        </Checkbox>
                    </div>
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="So'ralayotgan muddat"
                        placeholder="4 oy"
                        bordered
                        color="secondary"
                    />
                    <div className='shart-select'>
                        <p>Sektor</p>
                        <Select
                            // value={selectedOption}
                            defaultValue={options[0]}
                            // styles={customStyles}
                            options={options}
                            className='buyurtma_select_new'
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 12,
                                colors: {
                                ...theme.colors,
                                primary25: '#7828c8',
                                primary: '#7828c8',
                                },
                            })}
                        />
                    </div>
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Maqsadi"
                        placeholder="shirinlik mahsulotlari savdosi"
                        bordered
                        color="secondary"
                    />
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Kredit mahsuloti nomi"
                        placeholder="ReneTrade"
                        bordered
                        color="secondary"
                    />
                    <Input
                        className='buyurtma_form_inputs'
                        width='100%'
                        clearable
                        label="Oylik o'rtacha daromad"
                        placeholder="4 800 000 som"
                        type='number'
                        bordered
                        color="secondary"
                    />
                    
                </div>
                <div className='submit-buttons'>
                    <button className='client_submit reset' onClick={openReset}>
                        Formani tiklash
                        <AiOutlineClear/>
                    </button>
                    <button className='client_submit submit'>
                        Buyurtmani qo'shish
                        <AiOutlineFileAdd/>
                    </button>
                </div>
            </div>
        </div>
      </>
  )
}

export default BuyurtmaForm