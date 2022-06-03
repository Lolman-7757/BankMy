import React , { useState } from 'react';
import TillaBuyum from './TillaBuyum';
import Transport from '../../TableParts/Transport/Transport';
import UchinchiShaxs from '../../TableParts/Uchinchi/UchinchiShaxs';
import Sugurta from '../../TableParts/Sugurta/Sugurta';

import './Taminot.css';

function TaminotForm() {
    const [ selectedSector, setSelectedSector ] = useState(1)

    const sectorChoosing = () =>{
        if(selectedSector == 1){
            return(<TillaBuyum/>)
        }else if(selectedSector == 2){
            return(<Transport/>)
        }else if(selectedSector == 4){
            return(<UchinchiShaxs/>)
        }
        else if(selectedSector == 5){
            return(<Sugurta/>)
        }
    }


    return (
        <section>
            <div className='taminot_tableform'>
                <div className='taminot_table'>
                    <div className='rare'>
                        <p>Taminot turi</p>
                        <select className='taminot_main_select' onChange={(event)=>setSelectedSector(event.target.value)}>
                            <option value="1">Tilla Buyumlar Kafilligi</option>
                            <option value="2">Transport Vositasi Garovi</option>
                            <option value="4">3 shaxs kafilligi</option>
                            <option value="5">Sugurta kompaniyasi sugurta polisi</option>
                        </select>
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