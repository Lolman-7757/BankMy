import React, { useState } from 'react'
import { Input, Textarea } from '@nextui-org/react'

function FirstKl1() {
  // Datas
  let familyMembers = [{}]
  let mulkItems = [{}]
  // States
  const [ familyMem, setFamilyMem ] = useState(familyMembers)
  const [ mulkItem, setMulkItem ] = useState(mulkItems)
  // Family Members Adding and Deleting Functions
  function addFamilyMember () {
      let newFamilyMember = [{}]
      setFamilyMem(familyMem.concat(newFamilyMember))
  }
  function deleteFamilyMember (id) {
      if(familyMem.length>1){
          let newFamilyMembers = familyMem.filter((fam,famId)=> famId !== (id))
          setFamilyMem(newFamilyMembers)
      }
  }
  // Mulk Items Adding and Deleting Functions
  function addMulkItem () {
      let newmulkItem = [{}]
      setMulkItem(mulkItem.concat(newmulkItem))
  }
  function deleteMulkItem (id) {
      if(mulkItem.length>1){
          let newmulkItems = mulkItem.filter((mulk,mulkId)=> mulkId !== (id))
          setMulkItem(newmulkItems)
      }
  }
  return (
    <>
        <h2 className='kl1_subtitle'>Buyurtmachining oilaviy sharoitini organish natijalari</h2>
        <p className='kl1_formtitle'>Birgalikda istiqomat qiluvchilar</p>
        {
            familyMem?.map((familyMember,familyMemberId)=>(
                <div className='kl1_product' key={familyMemberId}>
                    <Input
                    rounded
                    bordered
                    label='Istiqomat qiluvchi'
                    placeholder="Otasi"
                    color="secondary"
                    width='90%'
                    className='kl1_input'
                    />
                    <button
                    className='kl1_delete_button'
                    onClick={() => deleteFamilyMember(familyMemberId)}
                    >
                        <i className='bx bx-trash'></i>
                    </button>
                </div>
            ))
        }
        <div className='margin_bottom20'>
            <button
            className='kl1_add_button'
            onClick={()=>{addFamilyMember()}}
            >
                Istiqomat qiluvchi qoshish
            </button>
        </div>
        <Textarea
            width='100%'
            bordered
            rounded
            color="secondary"
            className='kl1_input'
            label='Oila azolari bilan suhbat davomida aniqlangan muhim malumotlar'
            placeholder='Buyurtmachining va oilaning byudjeti bitta'
        />
        <p className='kl1_formtitle'>Buyurtmachining boshqa mulklari</p>
        {
            mulkItem.map((mulk,mulkId)=>(
                <div className='kl1_product' key={mulkId}>
                    <Input
                    rounded
                    bordered
                    label='Mulk nomi'
                    placeholder="Damas"
                    color="secondary"
                    width='90%'
                    className='kl1_input'
                    />
                    <button
                    className='kl1_delete_button'
                    onClick={() => deleteMulkItem(mulkId)}
                    >
                        <i className='bx bx-trash'></i>
                    </button>
                </div>
            ))
        }
        <div className='margin_bottom20'>
            <button
            className='kl1_add_button'
            onClick={()=>{addMulkItem()}}
            >
                Mulkni qoshish
            </button>
        </div>
        <Textarea
            width='100%'
            bordered
            rounded
            color="secondary"
            className='kl1_input margin_bottom20'
            label='Yashash sharoiti'
            placeholder='Yashash sharoiti ortacha. Uy 3 ta yotoqxona, oshxona, mehmonxona va hammomdan iborat. Uy tamiri orta darajada. Uy otasini nomida. Xovlining umumiy maydoni 6 sotix. Tomorqada 10 dan ortiq mevali daraxtlar bor. Shuningdek, uy xojaligini oz ehtiyojlari uchun pomidor, bodring, qalampir, baqlajon ekilgan.'
        />
        <h2 className='kl1_subtitle'>Buyurtmachining faoliyati va daromad  manbalarini organish natijalari</h2>
        <Textarea
            width='100%'
            bordered
            rounded
            color="secondary"
            className='kl1_input'
            label='Buyurtmachining faoliyat turi'
            placeholder='Savdo-transport vositalari uchun moy sotadi. Savdo bolmaydigan kunlari va har kuni soat 16:00 dan 21:00 gacha Yandeks Taksida taksichilik qiladi.'
        />
        <Input
            rounded
            bordered
            label='Faoliyat manzili'
            placeholder="Sergeli ehtiyot qismlari bozori, C blok, 19-do'kon"
            color="secondary"
            width='100%'
            className='kl1_input'
        />
        <Input
            rounded
            bordered
            label='Faoliyat joyi (shaxsiy / ijara / boshqa)'
            placeholder="Ijara"
            color="secondary"
            width='100%'
            className='kl1_input'
        />
        <Input
            rounded
            bordered
            label='Ushbu sohada foliyat yuritish davomiyligi'
            placeholder="3yildan oshiq"
            color="secondary"
            width='100%'
            className='kl1_input'
        />
    </>
  )
}

export default FirstKl1