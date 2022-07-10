import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// Styles
import './Xodim.css'
// Icons
import { AiOutlineRollback, AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai'
// Components
import { Input } from '@nextui-org/react';
import Select from 'react-select';

function AddXodim() {
    // Selector
    const options = [
        { value: '1', label: "Filial 1" },
        { value: '2', label: "Filial 2" },
        { value: '3', label: "Filial 3" },
        { value: '4', label: "Filial 4" }
    ];
    const bolimlar = [
        { value: '1', label: "Bo`lim 1" },
        { value: '2', label: "Bo`lim 2" },
        { value: '3', label: "Bo`lim 3" },
        { value: '4', label: "Bo`lim 4" }
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
            <button onClick={closeReset}>Ha</button>
            <button onClick={closeReset}>Yoq</button>
            </div>
        </div>

            <section className='xodimform'>
                <div className='xodimform_header'>
                    <h1>Xodim Yaratish</h1>
                    <Link to='/xodim' className='clientform_back'>
                        <AiOutlineRollback/>
                        Orqaga
                    </Link>
                </div>
                <form className='xodimform_form'>
                    <h1 className='xodimform_title'>Shakllarni To'ldiring:</h1>
                    <div className='xodim_selectform'>
                        <p>Filiali</p>
                        <Select
                        width='100%'
                        defaultValue={options[0]}
                        options={options}
                        className='xodim_select'
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
                    <div className='xodim_selectform'>
                        <p>Bo'limi</p>
                        <Select
                        width='100%'
                        defaultValue={bolimlar[0]}
                        options={bolimlar}
                        className='xodim_select'
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
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Ismi"
                        placeholder='Name'
                        className='xodim_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Lavozim"
                        placeholder='Bank'
                        className='xodim_input'
                        color="secondary"
                    />
                    <Input
                        width='100%'
                        clearable
                        bordered
                        label="Code"
                        type='number'
                        placeholder="1234567"
                        className='xodim_input'
                        color="secondary"
                    />
                    <div className='xodim_buttons'>
                        <button className='client_submit reset' onClick={openReset}>
                            Formani tiklash
                            <AiOutlineClear/>
                        </button>
                        <button type='submit' className='client_submit submit'>
                            Xodimni qo'shish
                            <AiOutlineUserAdd/>
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddXodim