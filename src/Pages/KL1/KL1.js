import React, { useState } from 'react'

// Components
import { Input, Textarea, Radio } from '@nextui-org/react'

// Styles
import './KL1.css'

// Icons

function KL1() {
    const [ familyNumber, setFamilyNumber ] = useState(0)
    const [ familyInfo, setFamilyInfo ] = useState([])
    let dataFirst = {
        familyInformation : familyInfo,
    }
    // Datas
    let familyMembers = [{}]
    let mulkItems = [{}]
    let familyDaromads = [{}]
    let familyXarajats = [{}]
    let familyMalumots = [{}]
    let familyMavjuds = [{}]

    const [ familyMem, setFamilyMem ] = useState(familyMembers)
    const [ familyDaromad, setFamilyDaromad ] = useState(familyDaromads)
    const [ mulkItem, setMulkItem ] = useState(mulkItems)
    const [ familyXarajat, setFamilyXarajat ] = useState(familyXarajats)
    const [ familyMalumot, setFamilyMalumot ] = useState(familyMalumots)
    const [ familyMavjud, setFamilyMavjud ] = useState(familyMavjuds)
    const [ allInformation, setAllInformation ] = useState(dataFirst)

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

    // Family Daromads Adding and Deleting Functions
    function addfamDaromad () {
        let newfamilyDaromad = [{}]
        setFamilyDaromad(familyDaromad.concat(newfamilyDaromad))
    }
    function deletefamDaromad (id) {
        if(familyDaromad.length>1){
            let newfamilyDaromads = familyDaromad.filter((famDaromad,famDaromadId)=> famDaromadId !== (id))
            setFamilyDaromad(newfamilyDaromads)
        }
    }
    // Family Xarajats Adding and Deleting Functions
    function addfamXarajat () {
        let newfamilyXarajat = [{}]
        setFamilyXarajat(familyXarajat.concat(newfamilyXarajat))
    }
    function deletefamXarajat (id) {
        if(familyXarajat.length>1){
            let newfamilyXarajats = familyXarajat.filter((famXarajat,famXarajatId)=> famXarajatId !== (id))
            setFamilyXarajat(newfamilyXarajats)
        }
    }
    // Family Malumots Adding and Deleting Functions
    function addfamMalumot () {
        let newfamilyMalumot = [{}]
        setFamilyMalumot(familyMalumot.concat(newfamilyMalumot))
    }
    function deletefamMalumot (id) {
        if(familyMalumot.length>1){
            let newfamilyMalumots = familyMalumot.filter((famMalumot,famMalumotId)=> famMalumotId !== (id))
            setFamilyMalumot(newfamilyMalumots)
        }
    }
    // Family Mavjuds Adding and Deleting Functions
    function addfamMavjud () {
        let newfamilyMavjud = [{}]
        setFamilyMavjud(familyMavjud.concat(newfamilyMavjud))
    }
    function deletefamMavjud (id) {
        if(familyMavjud.length>1){
            let newfamilyMavjuds = familyMavjud.filter((famMavjud,famMavjudId)=> famMavjudId !== (id))
            setFamilyMavjud(newfamilyMavjuds)
        }
    }

    return (
        <section className='kl1'>
            <div className='kl1_title'>
                <h1>Kreditga layoqatilikni baholash varaqasi</h1>
            </div>
            <div className='kl1_content'>
                <Input
                rounded
                bordered
                label='Hujjat tayyorlangan sana'
                type='date'
                color="secondary"
                width='100%'
                className='kl1_input'
                />
                <Input
                rounded
                bordered
                label='Mijoz tekshirilgan va organilgan sana'
                type='date'
                color="secondary"
                width='100%'
                className='kl1_input'
                />
                <Input
                rounded
                bordered
                label='Buyurtmachining F.I.Sh'
                initialValue="Usmonova Muyassar Abduvalievna"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Doimiy yashash manzili'
                initialValue="Sirdariyo viloyati Guliston shahri Begmatov jochasi 46-uy 10-xonadon"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Vaqtinchalik yashash manzili'
                initialValue="Royihatga olingan manzili boyicha istiqomat qiladi"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='JSh ShIR'
                initialValue="41-3077-9287-0060"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Buyurtmachining telefon raqami'
                labelLeft='+998'
                initialValue="90 995 59 90"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Kredit maqsadi'
                initialValue="Aylanma mablag'larini to'ldirish -Moy almashtirish va moylash materiallari, filtr sotib olish"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <Input
                rounded
                bordered
                label='Soralayotgan kredit miqdori'
                initialValue="20 000 000 сум"
                color="secondary"
                width='100%'
                className='kl1_input'
                readOnly
                />
                <h2 className='kl1_subtitle'>Buyurtmachining oilaviy sharoitini organish natijalari</h2>
                <Input
                rounded
                bordered
                label='Oila azolar soni'
                placeholder="5"
                color="secondary"
                width='100%'
                type='number'
                className='kl1_input'
                />
                <p className='kl1_formtitle'>Birgalikda istiqomat qiluvchilar</p>
                {
                    familyMem.map((familyMember,familyMemberId)=>(
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
                <button
                className='kl1_add_button'
                onClick={()=>{addFamilyMember()}}
                >
                    Istiqomat qiluvhci qoshish
                </button>
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
                <button
                className='kl1_add_button'
                onClick={()=>{addMulkItem()}}
                >
                    Mulkni xqoshish
                </button>
                <Textarea
                width='100%'
                bordered
                rounded
                color="secondary"
                className='kl1_input'
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

                <div className='kl1_daromad_part'>
                    <h2 className='kl1_subtitle'>Buyurtmachining daromadlari</h2>
                    <Radio.Group color='secondary' value={3} size='sm' className='kl1_daromad_radio'>
                        <Radio value={1} className='kl1_daromad_radio_one'>Biznes daromadlar</Radio>
                        <Radio value={2} className='kl1_daromad_radio_one'>Mavsumiy daromadlar</Radio>
                        <Radio value={3} className='kl1_daromad_radio_one'>Boshqa daromadlar</Radio>
                    </Radio.Group>
                </div>

                <h2 className='kl1_subtitle'>Oilaviy daromadlar va xarajatlar (Uy xo'jaligining daromad va xarajatlari)</h2>
                <p className='kl1_formtitle'>Oila azolarining daromadlar , shuningdek uy xojaligining boshqa daromadlari</p>
                {
                    familyDaromad.map((familyDaromad,familyDaromadId)=>(
                        <div className='kl1_products' key={familyDaromadId}>
                            <div className='kl1_product_title'>
                                Product {familyDaromadId+1}
                                <button
                                className='kl1_delete_button'
                                onClick={() => deletefamDaromad(familyDaromadId)}
                                >
                                    <i className='bx bx-trash'></i>
                                </button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                rounded
                                bordered
                                label='Daromad Egasi'
                                placeholder="Otasi"
                                color="secondary"
                                width='30%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Faoliyat Turi'
                                placeholder="Nafaqada"
                                color="secondary"
                                width='30%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Faoliyat Joyi'
                                placeholder="Yuqorichirchiq tuman 54-maktab"
                                color="secondary"
                                width='30%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Bir oylik daromad'
                                placeholder="1 000 000"
                                color="secondary"
                                width='300px'
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
                    ))
                }
                <div className='kl1_product_footer'>
                    <button
                    className='kl1_add_button'
                    onClick={()=>{addfamDaromad()}}
                    >
                        Daromad qoshish
                    </button>
                    <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami'
                    initialValue='11 000 000'
                    color="secondary"
                    width='300px'
                    type='number'
                    className='kl1_input'
                    />
                </div>
                <p className='kl1_formtitle'>Uy xojaligining xarajatlari</p>
                {
                    familyXarajat.map((familyXarajat,familyXarajatId)=>(
                        <div className='kl1_products' key={familyXarajatId}>
                            <div className='kl1_product_title'>
                                Product {familyXarajatId+1}
                                <button
                                className='kl1_delete_button'
                                onClick={() => deletefamXarajat(familyXarajatId)}
                                >
                                    <i className='bx bx-trash'></i>
                                </button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                rounded
                                bordered
                                label='Xarajat nomi'
                                placeholder="Oziq-ovqat uchun"
                                color="secondary"
                                width='45%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Ortaja oylik xarajat'
                                placeholder="1 500 000,00"
                                color="secondary"
                                width='45%'
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
                    ))
                }
                <div className='kl1_product_footer'>
                    <button
                    className='kl1_add_button'
                    onClick={()=>{addfamXarajat()}}
                    >
                        Xarajat qoshish
                    </button>
                    <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami'
                    initialValue='11 000 000'
                    color="secondary"
                    width='300px'
                    type='number'
                    className='kl1_input'
                    />
                </div>
                <p className='kl1_formtitle'>Uy xojaligi azolarining mavjud kredit va qarzdorliklari togrisidagi malumotlar</p>
                {
                    familyMalumot.map((familyMalumot,familyMalumotId)=>(
                        <div className='kl1_products' key={familyMalumotId}>
                            <div className='kl1_product_title'>
                                Product {familyMalumotId+1}
                                <button
                                className='kl1_delete_button'
                                onClick={() => deletefamMalumot(familyMalumotId)}
                                >
                                    <i className='bx bx-trash'></i>
                                </button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                rounded
                                bordered
                                label='Malumot nomi'
                                placeholder="Qishloq Qurilish bank"
                                color="secondary"
                                width='45%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Asosiy qarz qoldigi'
                                placeholder="5 700 000,00"
                                color="secondary"
                                width='20%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Oylik tolov miqdori'
                                placeholder="843 000,00"
                                color="secondary"
                                width='20%'
                                className='kl1_input'
                                />
                                <Textarea
                                width='100%'
                                bordered
                                rounded
                                color="secondary"
                                className='kl1_input'
                                placeholder='Istemol krediti 23%dan'
                                label='Izoh'
                                />
                            </div>
                        </div>
                    ))
                }
                <div className='kl1_product_footer'>
                    <button
                    className='kl1_add_button'
                    onClick={()=>{addfamMalumot()}}
                    >
                        Malumot qoshish
                    </button>
                    <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami asosiy qarz qoldigi'
                    initialValue='11 000 000'
                    color="secondary"
                    width='300px'
                    type='number'
                    className='kl1_input'
                    />
                    <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami oylik tolov miqdori'
                    initialValue='11 000 000'
                    color="secondary"
                    width='300px'
                    type='number'
                    className='kl1_input'
                    />
                </div>
                <Input
                rounded
                bordered
                readOnly
                label='Uy xojaligi byudjetining ortacha oylik ortiqcha mablagi yoki kamomadi miqdori'
                initialValue='0 457 000'
                color="secondary"
                width='100%'
                type='number'
                className='kl1_input'
                />
                <h2 className='kl1_subtitle'>Buyurtmachining mavjud kredit va qarz majburiyatlari</h2>
                {
                    familyMavjud.map((familyMavjud,familyMavjudId)=>(
                        <div className='kl1_products' key={familyMavjudId}>
                            <div className='kl1_product_title'>
                                Product {familyMavjudId+1}
                                <button
                                className='kl1_delete_button'
                                onClick={() => deletefamMavjud(familyMavjudId)}
                                >
                                    <i className='bx bx-trash'></i>
                                </button>
                            </div>
                            <div className='kl1_product'>
                                <Input
                                rounded
                                bordered
                                label='Mavjud kredit va qarzlar'
                                placeholder="Qishloq Qurilish bank"
                                color="secondary"
                                width='45%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Asosiy qarz qoldigi'
                                placeholder="5 700 000,00"
                                color="secondary"
                                width='20%'
                                className='kl1_input'
                                />
                                <Input
                                rounded
                                bordered
                                label='Oylik tolov miqdori'
                                placeholder="843 000,00"
                                color="secondary"
                                width='20%'
                                className='kl1_input'
                                />
                                <Textarea
                                width='100%'
                                bordered
                                rounded
                                color="secondary"
                                className='kl1_input'
                                placeholder='Istemol krediti 23%dan'
                                label='Izoh'
                                />
                            </div>
                        </div>
                    ))
                }
                <div className='kl1_product_footer'>
                    <button
                    className='kl1_add_button'
                    onClick={()=>{addfamMavjud()}}
                    >
                        Mavjud kredit va qarz qoshish
                    </button>
                    <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami asosiy qarz qoldigi'
                    initialValue='11 000 000'
                    color="secondary"
                    width='300px'
                    type='number'
                    className='kl1_input'
                    />
                    <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami oylik tolov miqdori'
                    initialValue='11 000 000'
                    color="secondary"
                    width='300px'
                    type='number'
                    className='kl1_input'
                    />
                </div>
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Joiriy kreditlar boyicha qarz yuki korsatkichi'
                    initialValue='22%'
                    color="secondary"
                    width='100%'
                    className='kl1_input'
                />
                <h2 className='kl1_subtitle'>Oylik kredit tolovi ( eng katta tolov miqdori )</h2>
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Asosiy qarz'
                    initialValue='5 000 000'
                    color="secondary"
                    width='100%'
                    className='kl1_input'
                />
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Foizlar'
                    initialValue='985 205'
                    color="secondary"
                    width='100%'
                    className='kl1_input'
                />
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Jami oylik tolov'
                    initialValue='5 985 205'
                    color="secondary"
                    width='100%'
                    className='kl1_input'
                />
                <Input
                    rounded
                    bordered
                    readOnly
                    label='Soralayotgan kredit hisobi qarzi yoki korsatkichi (<50%)'
                    initialValue='83,5%'
                    status="error"
                    shadow={false}
                    width='100%'
                    className='kl1_input'
                />
                <Textarea
                width='100%'
                bordered
                rounded
                color="secondary"
                className='kl1_input'
                placeholder='Jami 7 marotaba kredit olgan, shu jumladan, Renesansdan 2 marotaba. Muntazam o‘z vaqtida to‘lagan. 30 kungacha kechiktirishlar soni - 0, 30 kundan ortiq kechiktirishlar soni - 0'
                label='Kredit tarixi'
                />
                <div className='kl1_table'>
                    <div className='kl1_table_dark-bg'>Hulq atvori</div>
                    <div className='kl1_table_dark-bg'>Shaxsiy sifatida baholanishi</div>
                    <div className='kl1_table_dark-bg'>Moliaviy malumotlar va savodxonlik</div>
                    <div className='kl1_table_double'>
                        <p>сухбат</p>
                        <p>ижобий</p>
                    </div>
                    <div className='kl1_table_double '>
                        <p>учрашув</p>
                        <p>ижобий</p>
                    </div>
                    <div>ижобий</div>
                    <div className='kl1_table_double '>
                        <p>oylik tolov</p>
                        <p>OT/OD</p>
                    </div>
                    <div className='kl1_table_double kl1_table_dark-bg'>
                        <p>SD/OT</p>
                        <p>OHX</p>
                    </div>
                    <div className='kl1_table_dark-bg'>Natija</div>
                    <div className='kl1_table_double kl1_table_dark-bg'>
                        <p className='kl1_table_yellow-bg'>5 985 205,42</p>
                        <p className='kl1_table_red-bg'>62,04%</p>
                    </div>
                    <div className='kl1_table_double'>
                        <p className='kl1_table_yellow-bg'>161,18%</p>
                        <p className='kl1_table_yellow-bg'>7 153 000,00</p>
                    </div>
                    <div className='kl1_table_yellow-bg'> {`<= 50% и >= 120%`}</div>
                    <div className='kl1_table_dark-bg'>Shaxsiy kapital miqdori</div>
                    <div className='kl1_table_dark-bg'>Shaxsiy kapital/kreditlar</div>
                    <div className='kl1_table_dark-bg'>Natija</div>
                    <div>25 000 000,00</div>
                    <div className='kl1_table_yellow-bg'>125%</div>
                    <div className='kl1_table_yellow-bg'>50</div>
                    <div className='kl1_table_dark-bg'>Daromad manbai</div>
                    <div className='kl1_table_dark-bg'>Faoliyat barqarorligi</div>
                    <div className='kl1_table_dark-bg'>Kutilayotgan rivojlanish</div>
                    <div>баркарор</div>
                    <div>баркарор</div>
                    <div>ижобий</div>
                    <div className='kl1_table_dark-bg'>Taminot turi</div>
                    <div className='kl1_table_dark-bg'>Taminot qiymati</div>
                    <div className='kl1_table_dark-bg'>Kreditni qoplash koeffitsenti</div>
                    <div>tilla buyumlar garovi</div>
                    <div>20 000 000,00</div>
                    <div className='kl1_table_yellow-bg'>100%</div>
                </div>
                <Textarea
                width='100%'
                bordered
                rounded
                color="secondary"
                className='kl1_input'
                placeholder='Ajratiladigan kreditga mijoz qoshimcha 150 litr LukOil moylarini, shuningdek, moy alishtirish jarayonida zaruriy bolgan avto ehtiyot qismlar savdosini ham yolga qoymoqchi. Birlamchi hisob kitoblar buyurtmachi daromadi qoshimcha 1 500 000 somga oshishini korsatmoqda.'
                label='Ajratilgan kreditning buyurtmachi uchun tasirini baholash'
                />
                <Textarea
                width='100%'
                bordered
                rounded
                color="secondary"
                className='kl1_input'
                placeholder='дохода клиента достаточно для получения кредита'
                label='Monitoring boyicha masul xodimning yakuniy xulosasi'
                />
                <Input
                    rounded
                    bordered
                    label='Monitoring amalga oshirgan xodim F.I.Sh'
                    placeholder='someone'
                    color='secondary'
                    width='100%'
                    className='kl1_input'
                />
            </div>
        </section>
    )
}

export default KL1