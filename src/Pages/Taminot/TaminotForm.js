import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { Radio } from "@nextui-org/react";
import { BiTrash } from 'react-icons/bi';

import './Taminot.css';
import TillaBuyum from './TillaBuyum';

function TaminotForm() {
    

    return (
        <section>
            <div className='taminot_tableform'>
                <div className='taminot_table'>
                    <div className='rare'>
                        <p>Taminot turi</p>
                        <select className='taminot_main_select'>
                            <option value="1">Tilla Buyumlar Kafilligi</option>
                            <option value="2">Transport Vositasi Garovi</option>
                            <option value="3">Transport Vositasi Garovi va kafillik</option>
                            <option value="4">3 shaxs kafilligi</option>
                            <option value="5">Sugurta kompaniyasi sugurta polisi</option>
                            <option value="6">Solidar guruh kafilligi</option>
                        </select>
                    </div>
                    <TillaBuyum/>
                </div>
            </div>
        </section>
    )
}

export default TaminotForm