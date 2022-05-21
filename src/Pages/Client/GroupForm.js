import React, { useRef, useState } from 'react'
import './Client.css'
import { Tabs, Button } from 'antd';
import { AiOutlineUser } from 'react-icons/ai'

// function deleteClient (){
  //   let indexOfDeleted = +prompt('Write Down Number of that man who you dont like!')
  //   tabs.splice(indexOfDeleted)
  //   console.log(tabs);
  //   tabs.sort()
  // }
  let tabs = [
    {
      name: 'Client 1'
    }
  ]
  
  function GroupForm(props) {
    let allInformation = [
      {
        code: {},
        name: {},
        birth_date: {},
        address: {},
        city: {},
        citizienship: {},
        nation: {},
        pinfl: {},
        number: {},
        document_type: {},
        serial_number: {},
        issued_by: {},
        issued_date: {}
      }
    ]
    // Input States to put in Data
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
      setNewKey(key)
    }
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
  [ issuedDate, setIssuedDate ] = useState(null),
  [ newKey, setNewKey ] = useState(0)

  const operations = <button className='client_add_button' onClick={()=>addClient()}>Add new Client</button>
  const [ tabList,setTabList ] = useState([tabs])
  const [ infoList,setInfoList ] = useState([allInformation])
  // Adding Client Func
  function addClient (){
    if(tabs.length<4){
      const newTab = [
        {
          name: `Client${tabs.length+1}`
        }
      ]
      const newInformation = [
        {
          code: {},
          name: {},
          birth_date: {},
          address: {},
          city: {},
          citizienship: {},
          nation: {},
          pinfl: {},
          number: {},
          document_type: {},
          serial_number: {},
          issued_by: {},
          issued_date: {}
        }
      ]
      setInfoList(allInformation.push.apply(allInformation,newInformation))
      setTabList(tabs.push.apply(tabs,newTab))
      console.log(tabs)
    }else{
      console.log('bye bye');
    }
  }
  
  // Typing data Func
  function insertData (e){
    e.preventDefault()
    allInformation[newKey] = {
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
  return(
    <>
    <Tabs tabBarExtraContent={operations}  defaultActiveKey="1" onChange={callback} className='client_tabs'>
    {
      tabs.map((tab,tabId)=>{
        return(

        <TabPane tab={<div><AiOutlineUser/>{tab.name}</div>} key={`${tabId}`}>
          <div className='client_form'>
            <div className='clientform_title'>Fill out this form to add a {tab.name}!</div>
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
              <button className='client_submit' onClick={insertData}>
                Submit Client
              </button>
            </form>
          </div>
        </TabPane>
        )
      })
    }
  </Tabs>
  <button className='client_add_button' >Delete Client</button>
  </>
  
  )
}
export default GroupForm