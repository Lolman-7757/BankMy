import React, { useState } from 'react'
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { Input } from '@nextui-org/react';
import { BiTrash } from 'react-icons/bi'
import { AiOutlineUsergroupAdd, AiOutlineClear, AiOutlineRollback, AiOutlineUser } from 'react-icons/ai';


import './Client.css'
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
      if(tabList.length === 1){
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
  [ addButton, setAddButton ] = useState(true),
  [ tabList,setTabList ] = useState([{name: `Client1`,id:0}]),
  [ infoList,setInfoList ] = useState(allInformation),
  [ tabLength, setTabLength ] = useState(tabList.length)
  
  // Add Button
  const operations = <div className='clientform_extra'>
    <button className={addButton?'client_add_button':'none'} onClick={()=>addClient()}>+</button>
    <Input
      width='50%'
      clearable
      label="Guruh nomini yozing"
      bordered
      className='group-inputt'
      placeholder='Rene Bare'
      color="secondary"
      onChange={e => setGroupName(e.target.value)}
    />
  </div>
  // Adding Client Func
  function addClient (){
    console.log(tabList.length);
    if(tabList.length<4){
      var newTab =[
        {name: `Client${tabList.length+1}`}
      ]
      const newInformation = [
        {
          group_name: '',
          code: '',
          name: '',
          birth_date: '',
          address: '',
          city: '',
          citizienship: '',
          nation: '',
          pinfl: '',
          number: '',
          document_type: '',
          serial_number: '',
          issued_by: '',
          issued_date: ''
        }
      ]
      setTabLength(tabLength+1)
      setInfoList(infoList.concat(newInformation))
      setTabList(tabList.concat(newTab))
      console.log(tabList.length);
      if(tabList.length>3){

      }
    }else if (tabList.length===4){
      setAddButton(false)
      setDeleteState(true)
    }
    if (tabList.length>1){
      setDeleteState(true)
    }
  }
  // Deleting CLient Func
  function deleteClient(id){
    if(tabList.length>1){
      let newTabList = tabList.filter((tab,tabId)=> tabId !== (id))
      setTabList(newTabList)
      let newInfoList = infoList.filter((info,infoId)=>infoId !== (id))
      setInfoList(newInfoList)
      
      setAddButton(true)
      setDeleteState(true)
    }else if(tabList.length === 1){
      setDeleteState(false)
    }
    
  }
  // Typing data Func
  function insertData (e){
    e.preventDefault()
    infoList[newKey] = {
      group_name: groupName,
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
    alert(allInformation);
  }
  return(
    <>
    <div className='back-but'>
    <Link to='/client' className='clientform_back'>
      <AiOutlineRollback/>
      Orqaga
    </Link>
    </div>
    <Tabs tabBarExtraContent={operations}  defaultActiveKey="2" onChange={callback} className='client_tabs'>
    {
      tabList.map((tab,tabId)=>{
        return(
        <TabPane
        tab={
          <div className='clientform_user'>
            <div className='clientform_icon'><AiOutlineUser/></div>
          </div>
        } 
        key={`${tabId}`}
        >
          <div className={`client_form`}>
            <div className='clientform_title'>{tabId+1}. Foydalanuvchi tafsilotlari</div>
            <form className='clientform_form'>
            <Input
                width='100%'
                clearable
                label="Kod"
                placeholder='1234'
                className='vall'
                bordered
                color="secondary"
                onChange={e => setCode(e.target.value)}
                required= 'required'
              />
              <Input
                width='100%'
                clearable
                label="Ism"
                placeholder='Abdikadir'
                bordered
                className='vall'
                color="secondary"
                onChange={e => setName(e.target.value)}
              />
              <Input
                width='100%'
                label="Tug'ilgan sana"
                bordered
                className='vall'
                type='date'
                color="secondary"
                onChange={e => setBirth(e.target.value)}
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
              />
              <Input
                width='100%'
                clearable
                label="Shahar"
                bordered
                className='vall'
                placeholder='Nukus'
                color="secondary"
                onChange={e => setCity(e.target.value)}
              />
              <Input
                width='100%'
                clearable
                label="Fuqarolik"
                bordered
                className='vall'
                placeholder='Uzbekistan'
                color="secondary"
                onChange={e => setCitizienship(e.target.value)}
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
              />
              <Input
                width='100%'
                clearable
                label="Telefon raqami"
                bordered
                className='vall'
                placeholder='+998991235678'
                type='number'
                color="secondary"
                onChange={e => setNumber(e.target.value)}
              />
              <Input
                width='100%'
                clearable
                label="Hujjat turi"
                bordered
                className='vall'
                placeholder='ID'
                color="secondary"
                onChange={e => setDoc(e.target.value)}
              />
              <Input
                width='100%'
                clearable
                label="Ishlab chiqarish raqami"
                bordered
                className='vall'
                placeholder='AD123456789'
                color="secondary"
                onChange={e => setSerialNum(e.target.value)}
              />
              <Input
                width='100%'
                clearable
                label="Kim bilan berilgan"
                bordered
                className='vall'
                placeholder='Robert Pattison'
                color="secondary"
                onChange={e => setIssuedBy(e.target.value)}
              />
              <Input
                width='100%'
                label="Berilgan sana"
                bordered
                className='vall'
                type='date'
                color="secondary"
                onChange={e => setIssuedDate(e.target.value)}
              />
            </form>
              <div className='submit-buttons'>
              <button className='client_submit reset  ' onClick={()=>document.querySelector(`form`).reset()}>
                Formani tiklash
                <AiOutlineClear/>
              </button>
              <button className={deleteState?'client_submit delete':'client_submit none'} onClick={()=>deleteClient(tabId)}>
                Clientni o'chirish
                <BiTrash/>
              </button>
              </div>
          </div>
        </TabPane>
        )
      })
    }
  </Tabs>
          <Link to='/' className='client_submit group-submit submit' onClick={insertData}>
            Guruhni qo'shish
            <AiOutlineUsergroupAdd/>
          </Link>
  </>
  
  )
}
export default GroupForm