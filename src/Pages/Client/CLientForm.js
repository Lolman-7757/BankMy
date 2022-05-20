import React, { useRef, useState } from 'react'
import './Client.css'

function CLientForm() {
  const [ text,setText ] = useState(null)
  const newcode = {
    codesamp: `${text}`
  }
  return (
    <>
      <div className='clientform_title'>Fill out this form to add a Client!</div>
      <form className='clientform_form'>
        <label>
          Your Code
          <input type='number' value={(e)=>{setText(e)}} onChange={()=>{console.log(newcode.codesamp)}}/>
        </label>
        <label>
          Your Name
          <input type='text'/>
        </label>
        <label>
          Your Birth Date
          <input type='date'/>
        </label>
        <label>
          Your Address
          <input type='text'/>
        </label>
        <label>
          Your City
          <input type='text'/>
        </label>
        <label>
          Your Citizienship
          <input type='text'/>
        </label>
        <label>
          Your Nation
          <input type='text'/>
        </label>
        <label>
          Your PINFL
          <input type='text' maxLength='14'/>
        </label>
        <label>
          Your Phone
          <input type='number'/>
        </label>
        <label>
          Your Document Type
          <input type='text'/>
        </label>
        <label>
          Your Serial Number
          <input type='text'/>
        </label>
        <label>
          You Were Issued By
          <input type='text'/>
        </label>
        <label>
          You Were Issued By Date
          <input type='date'/>
        </label>
      </form>
    </>
  )
}

export default CLientForm