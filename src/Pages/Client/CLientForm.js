import React, { useState } from 'react'
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
              <label>
                Code
                <input type='number' onInput={(event)=>{setCode(event.target.value)}}/>
              </label>
              <label>
                Name
                <input type='text' placeholder='John Doe' onInput={(event)=>{setName(event.target.value)}}/>
              </label>
              <label>
                Birth date
                <input type='date' placeholder='00.01.2005' onInput={(event)=>{setBirth(event.target.value)}}/>
              </label>
              <label>
                Address
                <input type='text' placeholder='2nd Boulevar' onInput={(event)=>{setAddress(event.target.value)}}/>
              </label>
              <label>
                City
                <input type='text' placeholder='Manhetton' onInput={(event)=>{setCity(event.target.value)}}/>
              </label>
              <label>
                Citizienship
                <input type='text' placeholder='Russian' onInput={(event)=>{setCitizienship(event.target.value)}}/>
              </label>
              <label>
                Nation
                <input type='text' placeholder='Uzbek' onInput={(event)=>{setNation(event.target.value)}}/>
              </label>
              <label>
                PINFL
                <input type='text' maxLength='14' placeholder='12345678901234' onInput={(event)=>{setPinfl(event.target.value)}}/>
              </label>
              <label>
                Phone
                <input type='number' placeholder='+998991235678' onInput={(event)=>{setNumber(event.target.value)}}/>
              </label>
              <label>
                Document Type
                <input type='text' placeholder='ID' onInput={(event)=>{setDoc(event.target.value)}}/>
              </label>
              <label>
                Serial Number
                <input type='text' placeholder='AD123456789' onInput={(event)=>{setSerialNum(event.target.value)}}/>
              </label>
              <label>
              Were Issued By
                <input type='text' placeholder='Robert Pattison' onInput={(event)=>{setIssuedBy(event.target.value)}}/>
              </label>
              <label>
              Were Issued By Date
                <input type='date' onInput={(event)=>{setIssuedDate(event.target.value)}}/>
              </label>
            </form>
            <button className='client_submit' onClick={insertData}>
                Submit Client
              </button>
              <button className='client_submit' onClick={()=>document.querySelector(`form`).reset()}>
                Reset Form
              </button>
    </div>
  )
}

export default CLientForm