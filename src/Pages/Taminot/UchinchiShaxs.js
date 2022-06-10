import React,{useState} from 'react'
import { Input } from '@nextui-org/react';
import Select from 'react-select';

// Icons
import { AiOutlineClear, AiOutlineUserAdd } from 'react-icons/ai'

// Styles
import '../../TableParts/Transport/Transport.css';


// Selector
    const options = [
        { value: '1', label: "O'zR fuqarosining ID kartasi" },
        { value: '2', label: "O'zR Fuqarosining pasporti" },
        { value: '3', label: "Harbiy xizmatchi guvohnomasi" },
        { value: '4', label: "Xizmat guvohnomasi" },
        { value: '5', label: "Xorijiy fuqaro pasporti" },
        { value: '6', label: "Yashash guvohnomasi" },
        { value: '7', label: "O'zR Fuqarosining biometrik pasporti" },
        { value: '8', label: "Tug'ulganlik haqidagi guvohnoma" },
        { value: '9', label: "O'zR fuqarosining yangi namunadagi haydovchilik guvohnomasi" },
        { value: '10', label: "Boshqa" }
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

function UchinchiShaxs() {

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

        <form className='taminot_shaxs'>
        <div className='transport_garovPart'>
                    {/* <p className='additionPart_title'>Uchinchi shaxs mulki egasining ma'lumotlari</p> */}
                    <div>
                        <Input 
                            label='Uchinchi mulki egasining F.I.Sh.'
                            placeholder=' Muxammadshukurov Xusniddin Fatxulla o`g`li'
                            clearable
                            width='100%'
                            color="secondary"
                            bordered 
                            className='transport_garovPart_input' 
                        />
                        <div className='transport_garovPart_selectPart'>
                            <p>Shaxsini tasdiqlovchi xujjat</p>
                            <Select
                                defaultValue={options[0]}
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
                            label='Seriyasi va raqami'
                            placeholder='AA 87654321'
                            clearable
                            width='100%'
                            color="secondary"
                            bordered 
                            className='transport_garovPart_input' 
                        />
                        <Input 
                            label='Kim tomonidan berilgan'
                            clearable
                            placeholder='Toshkent viloyati Bo`ka tumani Mudofa '
                            width='100%'
                            color="secondary"
                            bordered 
                            className='transport_garovPart_input' 
                        />
                        <Input 
                            label='Berilgan sana'
                            type='date'
                            width='100%'
                            color="secondary"
                            bordered 
                            className='transport_garovPart_input' 
                        />
                        <Input 
                            label='Telefon Raqami'
                            type='number'
                            width='100%'
                            color="secondary"
                            bordered 
                            labelLeft='+998'
                            placeholder='991235678'
                            className='transport_garovPart_input' 
                        />
                        <Input 
                            label="Ro'yxat bo'yicha yashash manzili"
                            clearable
                            placeholder='Toshkent viloyati Bo`ka tumani Y.Xojimetov fu O`zbekiston ko`chasi 92 uy'
                            width='100%'
                            color="secondary"
                            bordered 
                            className='transport_garovPart_input' 
                        />
                        <Input 
                            label='Identifikatsiya raqami (JShShIR)'
                            placeholder='123456789'
                            clearable
                            width='100%'
                            color="secondary"
                            bordered 
                            className='transport_garovPart_input' 
                        />  
                    </div>
                </div>
                <div className='submit-buttons'>
                    <button className='client_submit reset' onClick={openReset}>
                        Formani tiklash
                        <AiOutlineClear/>
                    </button>
                    <button type='submit' className='client_submit submit'>
                        Clientni qo'shish
                        <AiOutlineUserAdd/>
                    </button>
                </div>
        </form>
    </>
  )
}

export default UchinchiShaxs