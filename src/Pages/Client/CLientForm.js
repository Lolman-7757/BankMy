import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
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
      <Link to='/client' className='clientform_back'>
        <AiOutlineRollback/>
        Back
      </Link>
      <div className='client_form'>
          <div className='clientform_head'>
            <div className='clientform_title_container'>
              <div className='clientform_title'>Account Details!</div>
              <div className='clientform_subtitle'>Fill Out this form to add a Client.</div>
            </div>
          </div>
              <form className='clientform_form' onSubmit={(event)=>insertData(event)}>
                <Input
                  width='90%'
                  clearable
                  label="Code"
                  placeholder='1234'
                  className='vall'
                  bordered
                  color="secondary"
                  onInput={e => setCode(e.target.value)}
                  minLength={1}
                  maxLength={10}
                />
                <Input
                  width='90%'
                  clearable
                  label="Name"
                  placeholder='Jane'
                  bordered
                  className='vall'
                  color="secondary"
                  onChange={e => setName(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  label="Birth date"
                  bordered
                  className='vall'
                  type='date'
                  color="secondary"
                  onChange={e => setBirth(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  clearable
                  label="Address"
                  bordered
                  className='vall'
                  placeholder='2nd Boulevar'
                  color="secondary"
                  onChange={e => setAddress(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  clearable
                  label="City"
                  bordered
                  className='vall'
                  placeholder='Manhetton'
                  color="secondary"
                  onChange={e => setCity(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  clearable
                  label="Citizienship"
                  bordered
                  className='vall'
                  placeholder='Russian'
                  color="secondary"
                  onChange={e => setCitizienship(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  clearable
                  label="Nation"
                  bordered
                  className='vall'
                  placeholder='Uzbek'
                  color="secondary"
                  onChange={e => setNation(e.target.value)}
                  required
                />
                <Input
                  width='90%'
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
                  width='90%'
                  clearable
                  label="Phone"
                  bordered
                  className='vall'
                  placeholder='+998991235678'
                  type='number'
                  color="secondary"
                  onChange={e => setNumber(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  clearable
                  label=" Document Type"
                  bordered
                  className='vall'
                  placeholder='ID'
                  color="secondary"
                  onChange={e => setDoc(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  clearable
                  label="Serial Number"
                  bordered
                  className='vall'
                  placeholder='AD123456789'
                  color="secondary"
                  onChange={e => setSerialNum(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  clearable
                  label="Were Issued By"
                  bordered
                  className='vall'
                  placeholder='Robert Pattison'
                  color="secondary"
                  onChange={e => setIssuedBy(e.target.value)}
                  required
                />
                <Input
                  width='90%'
                  label="Were Issued By Date"
                  bordered
                  className='vall'
                  type='date'
                  color="secondary"
                  onChange={e => setIssuedDate(e.target.value)}
                  required
                />  
              </form>
              <div className='submit-buttons'>
                <button className='client_submit reset' onClick={()=>document.querySelector(`form`).reset()}>
                  Reset Form
                  <AiOutlineClear/>
                </button>
                <button type='submit' className='client_submit submit'>
                  Submit Client
                  <AiOutlineUserAdd/>
                </button>
              </div>
      </div>
    </>
  )
}

export default CLientForm