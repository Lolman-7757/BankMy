import React, { useState } from 'react'
import { Input } from '@nextui-org/react';

import './Client.css'

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
      code: {code},
      name: {name},
      birth_date: {birth},
      address: {address},
      city: {city},
      citizienship: {citizienship},
      nation: {nation},
      pinfl: {pinfl},
      number: {number},
      document_type: {doc},
      serial_number: {serialNum},
      issued_by: {issuedBy},
      issued_date: {issuedDate}
    }
    console.log(allInformation);
  }
  return (
    <div className='client_form'>
      <div className='clientform_title'>Account Details!</div>
            <div className='clientform_subtitle'>Fill Out this form to add a Client.</div>
            <form className='clientform_form'>
              <Input
                width='90%'
                clearable
                label="Code"
                placeholder='1234'
                className='vall'
                bordered
                color="secondary"
                onChange={e => setCode(e.target.value)}
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
              />
              <Input
                width='90%'
                label="Birth date"
                bordered
                className='vall'
                type='date'
                color="secondary"
                onChange={e => setBirth(e.target.value)}
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
              />
              <Input
                width='90%'
                clearable
                label="Were Issued By Date"
                bordered
                className='vall'
                type='date'
                color="secondary"
                onChange={e => setIssuedDate(e.target.value)}
              />  
            </form>
            <div className='submit-buttons'>
              <button className='client_submit' onClick={insertData}>
                Submit Client
              </button>
              <button className='client_submit' onClick={()=>document.querySelector(`form`).reset()}>
                Reset Form
              </button>
            </div>
    </div>
  )
}

export default CLientForm