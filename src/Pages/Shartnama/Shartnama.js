import React from 'react'
import {Input} from '@nextui-org/react'
import { Checkbox } from "@nextui-org/react";

import './Shartnama.css'

function Shartnama() {
  return (
    <div className='client'>
        <div className='shart-main'>
            <Input
            width='90%'
            clearable
            label="Buyurtma sanasi"
            placeholder="09.03.2022"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="So'ralayotgan qarz miqdor"
            placeholder="20 000 000 som"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Qarz miqdori, yozuvda"
            placeholder="Yigirma million som 00 tiyin"
            bordered
            color="secondary"
            />
            <div className='shart-check'>
                <Checkbox 
                value="Kredit Qo'mitasi qorariga asosan"
                size='md'
                color="secondary"
                >
                    Kredit Qo'mitasi qorariga asosan
                </Checkbox>
            </div>
            <Input
            width='90%'
            clearable
            label="So'ralayotgan muddat"
            placeholder="4 oy"
            bordered
            color="secondary"
            />
            <div className='shart-select'>
                <p>Sektor</p>
                <select>
                    <option value="1 вариант">1 вариант</option>
                    <option value="2 вариант">2 вариант</option>
                    <option value="3 вариант">3 вариант</option>
                    <option value="4 вариант">4 вариант</option>
                    <option value="5 вариант">5 вариант</option>
                    <option value="6 вариант">6 вариант</option>
                    <option value="7 вариант">7 вариант</option>
                    <option value="8 вариант">8 вариант</option>
                </select>
            </div>
            <Input
            width='90%'
            clearable
            label="Maqsadi"
            placeholder="shirinlik mahsulotlari savdosi"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Kredit mahsuloti nomi"
            placeholder="ReneTrade"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Oylik o'rtacha daromad"
            placeholder="4 800 000 som"
            bordered
            color="secondary"
            />
            <div className='shart-selector'>
                <p>Kredit ajratish tartibi</p>
                <div>
                    <Checkbox 
                    value="sydney"
                    size='sm'
                    color="secondary"
                    >
                        Naqd pul ko'rinishida
                    </Checkbox>
                    <Checkbox 
                    value="sydney"
                    size='sm'
                    color="secondary"
                    >
                        Plastik karta / Hisobraqam
                    </Checkbox>
                </div>
            </div>
            <Input
            width='90%'
            clearable
            label="Ustama foiz stavkasi, yillik"
            placeholder="58,00%"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Ustama foiz stavkasi, yillik (yozuvda)"
            placeholder=""
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Penya, kunlik"
            placeholder="0,40%"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Oylik komission yig'im, %da"
            placeholder="0,40%"
            bordered
            color="secondary"
            />
            <div className='shart-selector'>
                <p>So'ndirish tartibi</p>
                <div>
                    <Checkbox 
                    value="sydney"
                    size='sm'
                    color="secondary"
                    >
                        Bir qil miqdor(Annuitet)
                    </Checkbox>
                    <Checkbox 
                    value="sydney"
                    size='sm'
                    color="secondary"
                    >
                        Kamayib boruvshi(differensial)
                    </Checkbox>
                </div>
            </div>
            <Input
            width='90%'
            clearable
            label="Mikroqarz berish sanasi"
            placeholder="26.03.2022"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Birinchi tolov sonasi"
            placeholder="26.04.2022"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Shartnoma sanasi"
            placeholder="09.03.2022"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="Shartnoma raqami"
            placeholder="34"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label="SSKS / Hisobraqam"
            placeholder="8600 1223 3445 5667"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label=" Bank nomi"
            placeholder="Univercial Bank Toshkent filiali"
            bordered
            color="secondary"
            />
            <Input
            width='90%'
            clearable
            label=" Bank MFOsi"
            placeholder="00996"
            bordered
            color="secondary"
            />
        </div>
        <button className='shart-button'>Отправить</button>
    </div>
  )
}

export default Shartnama