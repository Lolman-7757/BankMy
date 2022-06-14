import React , { useState } from 'react';
import TillaBuyum from './TillaBuyum';
import Transport from '../../TableParts/Transport/Transport';
import UchinchiShaxs from './UchinchiShaxs';
import Sugurta from '../../TableParts/Sugurta/Sugurta';
import { AiOutlineRollback } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './Taminot.css';

function TaminotForm() {
    
    // Selector
    const options = [
        { value: '1', label: "Tilla Buyumlar Kafilligi" },
        { value: '2', label: "Transport Vositasi Garovi" },
        { value: '3', label: "3 shaxs kafilligi" },
        { value: '4', label: "Sugurta kompaniyasi sugurta polisi" }
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
    
    const [ selectedSector, setSelectedSector ] = useState(1)

    const sectorChoosing = () =>{
        if(selectedSector == 1){
            return(<TillaBuyum/>)
        }else if(selectedSector == 2){
            return(<Transport/>)
        }else if(selectedSector == 4){
            return(<Sugurta/>)
        }else{
            return(<UchinchiShaxs/>)
        }
    }

    return (
        <section>
            <Link to='/taminot' className='clientform_back back-back'>
                <AiOutlineRollback/>
                Orqaga
            </Link>
            <div className='taminot_tableform'>
                <div className='taminot_table'>
                    <div className='rare'>
                        <p>Taminot turi</p>
                        <Select
                            width='100%'
                            // value={selectedOption}
                            // onChange={(event)=>{setSelectedSector(event.target.value)}}
                            onChange={(e)=>setSelectedSector(e.value)}
                            defaultValue={options[0]}
                            options={options}
                            className='buyurtma_select_taminot'
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
                    {
                        sectorChoosing()
                    }
                </div>
            </div>
        </section>
    )
}

export default TaminotForm