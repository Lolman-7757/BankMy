import React, { useState, useEffect } from 'react'
import './Client.css'
import { Tabs } from 'antd';
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom';

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
      if(tabList.length == 1){
        setDeleteState(false)
      }
    }
  const [ code, setCode ] = useState(null),
  [ groupName, setGroupName ] = useState(null),
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
  [ newKey, setNewKey ] = useState(0),
  [ deleteState, setDeleteState ] = useState(true),
  [ addButton, setAddButton ] = useState(true)

  const operations = <div className='clientform_extra'><button className={addButton?'client_add_button':'none'} onClick={()=>addClient()}>+</button><label className='clientform_group'>Write Down your Group Name<input type='text' placeholder='Rene Bank'  onInput={(event)=>{setGroupName(event.target.value)}}/></label></div>
  const [ tabList,setTabList ] = useState([{name: `Client1`,id:0}])
  const [ infoList,setInfoList ] = useState(allInformation)
  // Delete Button Being
  // Adding Client Func
  function addClient (){
    if(tabList.length<4){
      var newTab =[

        {name: `Client${tabList.length+1}`}
      
      ]
      const newInformation = [
        {
          group_name: {},
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
      setInfoList(infoList.concat(newInformation))
      setTabList(tabList.concat(newTab))
      if(tabList.length>3){

      }
    }else{
      setAddButton(false)
    }
  }
  // Deleting CLient Func
  function deleteClient(id){
    if(tabList.length>1){
      let newTabList = tabList.filter((tab,tabId)=> tabId !== (id))
      console.log(newTabList);
      setTabList(newTabList)
      let newInfoList = infoList.filter((info,infoId)=>infoId !== (id))
      setInfoList(newInfoList)
      console.log(newInfoList)
      if(tabList.length == 1){
        setDeleteState(false)
      }
    }else if(tabList.length == 1){
      setDeleteState(false)
    }
    
  }
  // Typing data Func
  function insertData (e){
    e.preventDefault()
    infoList[newKey] = {
      group_name: {groupName},
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
    <Tabs tabBarExtraContent={operations}  defaultActiveKey="2" onChange={callback} className='client_tabs'>
    {
      tabList.map((tab,tabId)=>{
        return(
        <TabPane
        tab={
          <div className='clientform_user'>
            <div className='clientform_icon'><AiOutlineUser/>{tab.name}</div>
            {/* <div className='clientform_info'>
              <p>Client №{tabId+1}</p>
              <span>Personal Information</span>
            </div> */}
          </div>
        } 
        key={`${tabId}`}
        >
          <div className={`client_form`}>
            <div className='clientform_title'>Account {tabId+1} Details!</div>
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
              <div className='clientform_buttons'>
              <button className='client_submit' onClick={()=>document.querySelector(`form`).reset()}>
                Reset Form
              </button>
              <button className={deleteState?'client_submit':'client_submit none'} onClick={()=>deleteClient(tabId)}>
                Delete Client
              </button>
              </div>
          </div>
        </TabPane>
        )
      })
    }
  </Tabs>
          <Link to='/' className='client_submit' onClick={insertData}>
            Submit Group
          </Link>
  </>
  
  )
}
export default GroupForm