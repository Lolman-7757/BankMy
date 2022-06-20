import React, { useState } from 'react'
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { Input, Radio } from '@nextui-org/react';
import { BiTrash } from 'react-icons/bi'
import { AiOutlineUsergroupAdd, AiOutlineClear, AiOutlineRollback, AiOutlineUser } from 'react-icons/ai';
import Select from 'react-select';

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
  [ tabLength, setTabLength ] = useState(tabList.length);

  const [resetWarning, setResetWarning] = useState('warning_reset_main close')

  function openReset(e){
    e.preventDefault()
    setResetWarning('warning_reset_main open')
  }
  function closeReset(e){
    e.preventDefault()
    setResetWarning('warning_reset_main close')
  }
  
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

  // Selector
  const options = [
    { value: '1', label: 'variant 1' },
    { value: '2', label: 'variant 2' },
    { value: '3', label: 'variant 3' },
    { value: '4', label: 'variant 4' },
    { value: '5', label: 'variant 5' },
    { value: '6', label: 'variant 6' }
  ];
  const customStyles = {
      option: (provided, state) => ({
          ...provided,
          padding: 10,
          borderRadius:5
      }),
      singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          
          return { ...provided, opacity, transition };
      }
  }

  return(
    <>
    {/* Reset Warning */}
    <div className={resetWarning}>
        <p>Haqiqatan ham ma'lumontlarni qayta tiklamoqchimisiz?</p>
        <div >
          <button onClick={closeReset}>Haa</button>
          <button onClick={closeReset}>Yoq</button>
        </div>
      </div>

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
                labelLeft='+998'
                  placeholder='991235678'
                type='number'
                color="secondary"
                onChange={e => setNumber(e.target.value)}
              />
              <div className='clientForm_selector'>
                <p>Sektor</p>
                <Select
                    // value={selectedOption}
                    defaultValue={options[0]}
                    // styles={customStyles}
                    options={options}
                    className='buyurtma_select_new'
                    styles={customStyles}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 12,
                        colors: {
                        ...theme.colors,
                        primary25: '#7828c8',
                        primary: '#7828c8',
                        },
                    })}
                />
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
              <button className='client_submit reset' onClick={openReset}>
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