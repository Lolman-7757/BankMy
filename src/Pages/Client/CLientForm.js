import React, { useRef, useState } from 'react'
import './Client.css'

function CLientForm() {
  const [ text,setText ] = useState(null)
  const newcode = {
    codesamp: `${text}`
  }
  return (
    <div className='client_form'>
      <div className='clientform_title'>Fill out this form to add a Client!</div>
      <form className='clientform_form'>
        <label>
          Code
          <input type='number' value={(e)=>{setText(e)}} onChange={()=>{console.log(newcode.codesamp)}}/>
        </label>
        <label>
          Name
          <input type='text' placeholder='John Doe'/>
        </label>
        <label>
          Birth date
          <input type='date' placeholder='00.01.2005'/>
        </label>
        <label>
          Address
          <input type='text' placeholder='2nd Boulevar'/>
        </label>
        <label>
          City
          <input type='text' placeholder='Manhetton'/>
        </label>
        <label>
          Citizienship
          <input type='text' placeholder='Russian'/>
        </label>
        <label>
          Nation
          <input type='text' placeholder='Uzbek'/>
        </label>
        <label>
          PINFL
          <input type='text' maxLength='14' placeholder='12345678901234'/>
        </label>
        <label>
          Phone
          <input type='number' placeholder='+998991235678'/>
        </label>
        <label>
          Document Type
          <input type='text' placeholder='ID'/>
        </label>
        <label>
          Serial Number
          <input type='text' placeholder='AD123456789'/>
        </label>
        <label>
        Were Issued By
          <input type='text' placeholder='Robert Pattison'/>
        </label>
        <label>
        Were Issued By Date
          <input type='date'/>
        </label>
        <label className="client_label">
        <button className='client_submit'>
          Submit Client
        </button>
        </label>
      </form>
    </div>
  )
}

export default CLientForm