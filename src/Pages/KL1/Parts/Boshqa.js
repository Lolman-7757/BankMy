import React, { useState } from 'react'
// Components
import { Input, Textarea,Checkbox } from '@nextui-org/react'

function Boshqa(props) {
  // Jami boshqa daromadlar
  const [ boshqaDaromadBirlikNarxi,setBoshqaDaromadBirlikNarxi] = useState(0)
  const [ boshqaDaromadNomi,setBoshqaDaromadNomi] = useState('')
  const [ boshqaDaromadHajmi,setBoshqaDaromadHajmi] = useState(0)
  const [ boshqaDaromadQiymati,setBoshqaDaromadQiymati] = useState(0)
  const [ boshqaDaromadIzoh,setBoshqaDaromadIzoh] = useState('')
  const [ boshqaDaromadOylik,setBoshqaDaromadOylik] = useState(0)

  const [myDaromads, setMyDaromads] = useState(
  [
      {   
          nomi:boshqaDaromadNomi,
          qiymati:boshqaDaromadQiymati,
          birlikNarxi:boshqaDaromadBirlikNarxi,
          hajmi:boshqaDaromadHajmi,
          oylik:boshqaDaromadOylik,
          izoh:boshqaDaromadIzoh
      }
  ])

  // My Daromads adding and deleting funtions
  function addMyDaromad(){
      let newMyDaromad = [{
          nomi:boshqaDaromadNomi,
          qiymati:boshqaDaromadQiymati,
          birlikNarxi:boshqaDaromadBirlikNarxi,
          hajmi:boshqaDaromadHajmi,
          oylik:boshqaDaromadOylik,
          izoh:boshqaDaromadIzoh
      }]
      setMyDaromads(myDaromads.concat(newMyDaromad))
      setBoshqaDaromadHajmi(0)
      setBoshqaDaromadBirlikNarxi(0)
  }
  function deleteMyDaromad(id){
      if(myDaromads.length > 1){
          let newMyDaromads = myDaromads.filter((item,index)=>index !== id)
          setMyDaromads(newMyDaromads)
      }
  }

  const getTotalSum = () => {
      const newSumArray = []
      myDaromads.map((item, index) => {
          newSumArray.push(item.oylik)
      })
      let totalPrices = newSumArray.reduce((prev, current) => prev + current, 0)
      return totalPrices.toLocaleString()
  }

  // My Xarajats adding and deleting funtions
  const [myXarajats, setMyXarajats] = useState([{}])
  function addMyXarajat(){
    let newMyXarajat = [{}]
    setMyXarajats(myXarajats.concat(newMyXarajat))
}
function deleteMyXarajat(id){
    if(myXarajats.length > 1){
        let newMyXarajats = myXarajats.filter((item,index)=>index !== id)
        setMyXarajats(newMyXarajats)
    }
}
  return (
    <>
      <h2 className='kl1_subtitle'>Buyurtmachining daromadlari</h2>
      <div className='kl1_radio'>
          <Checkbox size='sm' color='secondary' defaultValue={false} 
          onChange={(e)=>{
              if(e){
                props.setBiznesWindow('open')
              }else{
                props.setBiznesWindow('close')
              }
          }}
          >Biznes daromadlar</Checkbox>
          <Checkbox size='sm' className='kl1_radio_checkbox' color='secondary' defaultValue={false} 
          onChange={(e)=>{
              if(e){
                props.setMavsumiyWindow('open')
              }else{
                props.setMavsumiyWindow('close')
              }
          }}
          >Mavsumiy daromadlar</Checkbox>
          <Checkbox size='sm' className='kl1_radio_checkbox' color='secondary' defaultSelected={true}>Boshqa daromadlar</Checkbox>
      </div>

      <p className='kl1_formtitle'>Boshqa daromad turlari shuningdek passiv daromadlar</p>
      {
          myDaromads?.map((item,index)=>{
              return(
                  <div className='kl1_products' key={index}>
                      <div className='kl1_product_title'>
                          Daromad {index + 1}
                          <button className='kl1_delete_button' onClick={()=>{deleteMyDaromad(index)}}><i className='bx bx-trash'></i></button>
                      </div>
                      <div className='kl1_product'>
                          <Input
                              rounded
                              bordered
                              label='Daromad nomi'
                              color="secondary"
                              width='100%'
                              className='kl1_input'
                              onChange={(e)=>{
                                  const newBoshqaDaromads = [...myDaromads]
                                  newBoshqaDaromads[index].nomi = e.target.value
                                  setMyDaromads(newBoshqaDaromads)
                              }}
                          />
                          <Input
                              rounded
                              bordered
                              label='Hajmi'
                              color="secondary"
                              type='number'
                              width='47%'
                              className='kl1_input'
                              onChange={(e)=>{
                                  setBoshqaDaromadHajmi(e.target.value)
                                  const newBoshqaDaromads = [...myDaromads]
                                  newBoshqaDaromads[index].oylik = (e.target.value)*boshqaDaromadBirlikNarxi
                                  newBoshqaDaromads[index].hajmi = e.target.value
                                  setMyDaromads(newBoshqaDaromads)
                              }}
                          />
                          <Input
                              rounded
                              bordered
                              label='Birlik narxi'
                              type='number'
                              color="secondary"
                              width='47%'
                              className='kl1_input'
                              onChange={(e)=>{
                                  setBoshqaDaromadBirlikNarxi(e.target.value)
                                  const newBoshqaDaromads = [...myDaromads]
                                  newBoshqaDaromads[index].birlikNarxi = e.target.value
                                  newBoshqaDaromads[index].oylik = (e.target.value)*boshqaDaromadHajmi
                                  setMyDaromads(newBoshqaDaromads)
                              }}
                          />
                          <Input
                              rounded
                              bordered
                              label='Qiymati'
                              color="secondary"
                              width='47%'
                              className='kl1_input'
                              onChange={(e)=>{
                                  const newBoshqaDaromads = [...myDaromads]
                                  newBoshqaDaromads[index].qiymati = e.target.value
                                  setMyDaromads(newBoshqaDaromads)
                              }}
                          />
                          <Input
                              rounded
                              bordered
                              label='Oylik daromad'
                              color="secondary"
                              width='47%'
                              type='number'
                              className='kl1_input'
                              value={myDaromads[index].oylik}
                              onChange={(e)=>{
                                  const newBoshqaDaromads = [...myDaromads]
                                  newBoshqaDaromads[index].oylik = e.target.value
                                  setMyDaromads(newBoshqaDaromads)
                              }}
                          />
                          <Textarea
                              width='100%'
                              bordered
                              rounded
                              color="secondary"
                              className='kl1_input'
                              label='Izoh'
                              onChange={(e)=>{
                                  const newBoshqaDaromads = [...myDaromads]
                                  newBoshqaDaromads[index].izoh = e.target.value
                                  setMyDaromads(newBoshqaDaromads)
                              }}
                          />
                      </div>
                  </div>
              )
          })
      }
      <div className='kl1_product_footer'>
          <button className='kl1_add_button' onClick={()=>{addMyDaromad()}}>
              Daromad qoshish
          </button>
          <p className='kl1_jami'>JAMI: {getTotalSum()} so`m</p>
      </div>
          <p className='kl1_jami_main'>Jami o`rtacha oylik daromadlari: {getTotalSum()} so`m</p>
      
      <div className='kl1_daromad_part'>
          <p className='kl1_formtitle'>Boshqa xarajatlar turi</p>
          {
              myXarajats?.map((item,index)=>{
                  return(
                      <div className='kl1_products' key={index}>
                          <div className='kl1_product_title'>
                              Xarajat {index + 1}
                              <button className='kl1_delete_button' onClick={()=>{deleteMyXarajat(index)}}><i className='bx bx-trash'></i></button>
                          </div>
                          <div className='kl1_product'>
                              <Input
                                  rounded
                                  bordered
                                  label='Xarajat nomi'
                                  color="secondary"
                                  width='100%'
                                  className='kl1_input'
                              />
                              <Input
                                  rounded
                                  bordered
                                  label='Hajmi'
                                  color="secondary"
                                  width='47%'
                                  className='kl1_input'
                              />
                              <Input
                                  rounded
                                  bordered
                                  label='Narxi'
                                  type='number'
                                  color="secondary"
                                  width='47%'
                                  className='kl1_input'
                              />
                              <Input
                                  rounded
                                  bordered
                                  label='Qiymati'
                                  color="secondary"
                                  width='47%'
                                  className='kl1_input'
                              />
                              <Input
                                  rounded
                                  bordered
                                  label='Oylik xarajat'
                                  color="secondary"
                                  width='47%'
                                  type='number'
                                  className='kl1_input'
                              />
                              <Textarea
                                  width='100%'
                                  bordered
                                  rounded
                                  color="secondary"
                                  className='kl1_input'
                                  label='Izoh'
                              />
                          </div>
                      </div>
                  )
              })
          }
          <div className='kl1_product_footer'>
              <button className='kl1_add_button' onClick={()=>{addMyXarajat()}}>
                  Xarajat qoshish
              </button>
              <p className='kl1_jami'>JAMI: {'10 000 000'} so`m</p>
          </div>
              <p className='kl1_jami_main'>Jami o`rtacha oylik xarajatlari: {'10 000 000'} so`m</p>
      </div>
    </>
  )
}

export default Boshqa