import React, { useState } from 'react';
import { Input, Radio } from '@nextui-org/react';
import {  AiOutlineClear, AiOutlineUserAdd, AiOutlineRollback } from 'react-icons/ai'
import './Client.css'
import { Link } from 'react-router-dom';


function CLientForm() {
  const [ code, setCode ] = useState(null),
  [ name, setName ] = useState(null),
  [ birth, setBirth ] = useState(null),
  [ address, setAddress ] = useState(null),
  [ city, setCity ] = useState(null),
  [ citizienship, setCitizienship ] = useState(null),
  [ nation, setNation ] = useState(null),
  [ pinfl, setPinfl ] = useState(0),
  [ number, setNumber ] = useState(0),
  [ doc, setDoc ] = useState(null),
  [ serialNum, setSerialNum ] = useState(null),
  [ issuedBy, setIssuedBy ] = useState(null),
  [ issuedDate, setIssuedDate ] = useState(null);

  const [resetWarning, setResetWarning] = useState('warning_reset_main close')

  function openReset(e){
    e.preventDefault()
    setResetWarning('warning_reset_main open')
  }
  function closeReset(e){
    e.preventDefault()
    setResetWarning('warning_reset_main close')
  }

  function insertData (e){
    e.preventDefault()
    let allInformation = {
      code: code,
      name: name,
      birth_date: birth,
      address: address,
      city: city,
      citizienship: citizienship,
      nation: nation,
      pinfl: pinfl,
      number: number,
      document_type: doc,
      serial_number: serialNum,
      issued_by: issuedBy,
      issued_date: issuedDate
    }
    alert(`
      code: ${allInformation.code},
      name: ${allInformation.name},
      birth_date: ${allInformation.birth_date},
      address: ${allInformation.address},
      city: ${allInformation.city},
      citizienship: ${allInformation.citizienship},
      nation: ${allInformation.nation},
      pinfl: ${allInformation.pinfl},
      number: ${allInformation.number},
      document_type: ${allInformation.document_type},
      serial_number: ${allInformation.serial_number},
      issued_by: ${allInformation.issued_by},
      issued_date: ${allInformation.issued_date}`
    );
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

      <Link to='/client' className='clientform_back'>
        <AiOutlineRollback/>
        Orqaga
      </Link>
      <div className='client_form'>
          <div className='clientform_head'>
            <div className='clientform_title_container'>
              <div className='clientform_title'><p>Foydalanuvchi tafsilotlari</p></div>
            </div>
          </div>
              <form className='clientform_form' onSubmit={(event)=>insertData(event)}>
                <label className='clientform_gender'>
                  <p>Jinsi</p>
                  <Radio.Group aria-label='Пол' color='secondary' value={true} size='sm' className='clientform_gender_radio' onChange={(event)=>console.log(event)}>
                    <Radio value={true}>Erkak</Radio>
                    <Radio value={false}>Ayol</Radio>
                  </Radio.Group>
                </label>
                <Input
                  width='100%'
                  clearable
                  label="Kod"
                  placeholder='1234'
                  className='vall'
                  bordered
                  color="secondary"
                  onInput={e => setCode(e.target.value)}
                  minLength={1}
                  maxLength={10}
                />
                <Input
                  width='100%'
                  clearable
                  label="Ism"
                  placeholder='Jane'
                  bordered
                  className='vall'
                  color="secondary"
                  onChange={e => setName(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  label="Tug'ilgan sana"
                  bordered
                  className='vall'
                  type='date'
                  color="secondary"
                  onChange={e => setBirth(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  clearable
                  label="Manzil"
                  bordered
                  className='vall'
                  placeholder='2nd Boulevar'
                  color="secondary"
                  onChange={e => setAddress(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  clearable
                  label="Shahar"
                  bordered
                  className='vall'
                  placeholder='Manhetton'
                  color="secondary"
                  onChange={e => setCity(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  clearable
                  label="Fuqarolik"
                  bordered
                  className='vall'
                  placeholder='Russian'
                  color="secondary"
                  onChange={e => setCitizienship(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  clearable
                  label="Millat"
                  bordered
                  className='vall'
                  placeholder='Uzbek'
                  color="secondary"
                  onChange={e => setNation(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  clearable
                  label="PINFL"
                  bordered
                  className='vall'
                  placeholder='12345678901234'
                  color="secondary"
                  onChange={e => setPinfl(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  clearable
                  label="Telefon raqami"
                  bordered
                  className='vall'
                  pattern='[0-9]'
                  labelLeft='+998'
                  placeholder='991235678'
                  type='number'
                  color="secondary"
                  onChange={e => setNumber(e.target.value)}
                  required
                />
                <div className='clientForm_selector vall'>
                  <p>Sektor</p>
                  <select
                  >
                      <option value="1">1 variant</option>
                      <option value="2">2 variant</option>
                      <option value="3">3 variant</option>
                      <option value="4">4 variant</option>
                      <option value="5">5 variant</option>
                      <option value="6">6 variant</option>
                      <option value="7">7 variant</option>
                      <option value="8">8 variant</option>
                  </select>
                </div>
                <Input
                  width='100%'
                  clearable
                  label="Ishlab chiqarish raqami"
                  bordered
                  className='vall'
                  placeholder='AD123456789'
                  color="secondary"
                  onChange={e => setSerialNum(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  clearable
                  label="Kim bilan chiqarildi"
                  bordered
                  className='vall'
                  color="secondary"
                  onChange={e => setIssuedBy(e.target.value)}
                  required
                />
                <Input
                  width='100%'
                  label="Chiqarilgan sana"
                  bordered
                  className='vall'
                  type='date'
                  color="secondary"
                  onChange={e => setIssuedDate(e.target.value)}
                  required
                />  
              </form>
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
      </div>
    </>
  )
}

export default CLientForm