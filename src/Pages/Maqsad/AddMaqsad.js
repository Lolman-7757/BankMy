import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// Icons
import { AiOutlineRollback, AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai'
// Components
import { Input } from '@nextui-org/react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// Styles
import './Maqsad.css'

const animatedComponents = makeAnimated();


function AddMaqsad() {
     // Selector
    const maqsads = [
        { value: '1', label: "ReneTrade 1" },
        { value: '2', label: "ReneTrade 2" },
        { value: '3', label: "ReneTrade 3" },
        { value: '4', label: "ReneTrade 4" }
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            padding: 5,
            borderRadius:5
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
            return { ...provided, opacity, transition };
        }
    }

    // WARNING MODALKA
    const [resetWarning, setResetWarning] = useState('warning_reset_main close')

    function openReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main open')
    }
    function closeReset(e){
        e.preventDefault()
        setResetWarning('warning_reset_main close')
    }

    return (
        <>
        {/* Reset Warning */}
        <div className={resetWarning}>
            <p>Haqiqatan ham ma'lumontlarni qayta tiklamoqchimisiz?</p>
            <div >
            <button onClick={closeReset}>Haa</button>
            <button onClick={closeReset}>Yoq</button>
            </div>
        </div>

            <section className='filialform'>
                <div className='filialform_header'>
                    <h1>Maqsad Yaratish</h1>
                    <Link to='/maqsad' className='clientform_back'>
                        <AiOutlineRollback/>
                        Orqaga
                    </Link>
                </div>
                <form className='filialform_form'>
                    <h1 className='filialform_title'>Shakllarni To'ldiring:</h1>
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Nomi"
                        placeholder='name'
                        className='filial_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Code"
                        placeholder='123456'
                        type='number'
                        className='filial_input'
                        color="secondary"
                    />
                    <div className='xodim_selectform'>
                        <p>Mahsulot</p>
                        <Select
                            width='10%'
                            defaultValue={[maqsads[0], maqsads[1]]}
                            isMulti
                            options={maqsads}
                            className='xodim_select basic-multi-select'
                            classNamePrefix="select"
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 12,
                                colors: {
                                ...theme.colors,
                                primary25: 'rgb(216,215,215)',
                                primary: '#7828c8',
                                },
                            })}
                        />
                    </div>
                    <div className='filial_buttons'>
                        <button className='client_submit reset' onClick={openReset}>
                            Formani tiklash
                            <AiOutlineClear/>
                        </button>
                        <button type='submit' className='client_submit submit'>
                            Maqsadni qo'shish
                            <AiOutlineUserAdd/>
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddMaqsad