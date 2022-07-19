import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineRollback, AiOutlinePrinter } from 'react-icons/ai'

function P1Form() {

    const [users, setUsers]= useState([]);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setUsers(
            [
                {
                    name:'Usmonova Muyassar Abduvaliyevna', 
                    hujjat:'AB2300850 raqamli O`zR Fuqarosining biometrik pasporti 17.12.2015 da Sirdaryo viloyati Guliston shahar IIB tomonidan berilgan',
                    miqdor:'20 000 000,00 сум',
                    maqsad:'Shirinlik mahsulotlari savdosi',
                    muddat:'4 oy'
                },
                {
                    name:'Aliyev Ali Aliyvich', 
                    hujjat:'AB3930475 raqamli Xizmat guvohnomasi 14.02.2015 da Toshkent viloyati Bo`ka tumani IIB tomonidan berilgan',
                    miqdor:'20 000 000,00 сум',
                    maqsad:'Damas avtomobilini sotib olib axoliga pullik avtomabil xizmat ko`rsatish',
                    muddat:'12 oy'
                }   
            ]
        )
        setProducts(
            [
                {
                    nomi:'Sepochka',
                    proba:583,
                    birlik:'dona',
                    soni:1,
                    umumiy:16.20,
                    toshlar:0.00,
                    sof:16.20,
                    baho:5670000.00
                },
                {
                    nomi:'Kalit',
                    proba:583,
                    birlik:'dona',
                    soni:1,
                    umumiy:6.14,
                    toshlar:0.00,
                    sof:6.14,
                    baho:2149000.00
                },
                {
                    nomi:'Uzuk',
                    proba:583,
                    birlik:'dona',
                    soni:4,
                    umumiy:21.90,
                    toshlar:3.20,
                    sof:18.70,
                    baho:6545000.00
                },
                {
                    nomi:'Sirg`a',
                    proba:583,
                    birlik:'juft',
                    soni:1,
                    umumiy:13.20,
                    toshlar:4,
                    sof:9.20,
                    baho:3220000.00
                }
            ]
        )
    },[])

  return (
    <>
        <div className='pdf_header'>
            <Link to='/buyurtma/singleBuyurtma' className='clientform_back'>
            <AiOutlineRollback/>
            Back
            </Link>
            <button onClick={()=>window.print()}>
            Print
            <AiOutlinePrinter/>
            </button>
        </div>
        
        <div className='pdf_container pdf_main_container'>
            <p className='pdt_text_first pdf_margin_top_10'>"Renesans Mikrokredit Tashkiloti" MChJ Guliston filiali Kredit Komissiyasining</p>
            <p className='pdt_text_first pdf_margin_top_10'>4-41/22 sonli Yig`ilish Bayonnomasi</p>
            <div className='between align_center pdf_margin_top_40'>
                <p className='black_text'>Guliston sh.</p>
                <p className='black_text'>11.02.22 yil</p>
            </div>
            <div className='between align_center pdf_margin_top_10'>
                <p>Kredit Komissiyasi Raisi</p>
                <p>Muxammadov B.M.</p>
            </div>
            <div className='between align_center pdf_margin_top_10'>
                <p>Kredit Komissiyasi a'zorali</p>
                <p>Sultonova G.M.</p>
            </div>
            <div className='between align_center pdf_margin_top_10'>
                <p></p>
                <p>Maxkamova M.D.</p>
            </div>
            <p className='pdf_margin_top_40'>
                Kun tartibi: Buyurtma chilar "Omad" qarzdorlar guruhi a'zolari Usmonova Muyassar Abduvaliyevna va Aliyev Ali Aliyvichning ReneTrade shartlari asosida mikroqarz ajratish bo'yicha berilgan buyurtmalarini ko'rib chiqish
            </p>
            <p className='pdf_margin_top_40'>
                "Renesans Mikrokredit Tashkiloti" MChJ Guliston filialiga Buyurtmachilar quyidagi shartlarda mikroqarz so'rab murojaat etgan:
            </p>
            <div className='pdf_p1_table pdf_margin_top_10'>
                <div className='pdf_p1_table_headers'>
                    <p className='p1_headers_product'>№</p>
                    <p className='p1_headers_product'>F.I.O</p>
                    <p className='p1_headers_product'>Shaxsini tasdiqlovchi hujjat</p>
                    <p className='p1_headers_product'>Mikroqarz miqdori</p>
                    <p className='p1_headers_product'>Maqsadi</p>
                    <p className='p1_headers_product'>Muddat</p>
                </div>
                {
                    users?.map((item,index)=>{
                        return(
                            <div className='pdf_p1_table_headers'>
                                <p className='p1_headers_product'>{index + 1}</p>
                                <p className='p1_headers_product'>{item?.name}</p>
                                <p className='p1_headers_product'>{item?.hujjat}</p>
                                <p className='p1_headers_product'>{item?.miqdor}</p>
                                <p className='p1_headers_product'>{item?.maqsad}</p>
                                <p className='p1_headers_product'>{item?.muddat}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p className='pdf_margin_top_40'>
                Buyurtmachilar mikroqarz qaytarilishini ta'minlash maqsadida o'zaro solidar javobgarlik to'g'risidagi Kafillik shartnomasini taqdim qilishlarini va garov shartnomasi asosida o'ziga tegishli bo'lgan tilla buyumlarni garovga qo'yishlarini ma'lum qilganlar
            </p>
            <div className='p1_second_table pdf_margin_top_40'>
                <div className='p1_second_table_headers'>
                    <p className='p1_second_headers_product'>№</p>
                    <p className='p1_second_headers_product'>Nomi</p>
                    <p className='p1_second_headers_product'>Proba</p>
                    <p className='p1_second_headers_product'>O'lchov birligi</p>
                    <p className='p1_second_headers_product'>Soni</p>
                    <p className='p1_second_headers_product'>Umumiy og'irligi (gr)</p>
                    <p className='p1_second_headers_product'>Toshlari og'irligi (gr)</p>
                    <p className='p1_second_headers_product'>Sof og'irligi (gr)</p>
                    <p className='p1_second_headers_product'>Baholangan qiymati, so`m</p>
                </div>
                {
                    products?.map((item,index)=>{
                        return(
                            <div className='p1_second_table_headers'>
                                <p className='p1_second_headers_product'>{index +1}</p>
                                <p className='p1_second_headers_product'>{item?.nomi}</p>
                                <p className='p1_second_headers_product'>{item?.proba}</p>
                                <p className='p1_second_headers_product'>{item?.birlik}</p>
                                <p className='p1_second_headers_product'>{item?.soni}</p>
                                <p className='p1_second_headers_product'>{item?.umumiy}</p>
                                <p className='p1_second_headers_product'>{item?.toshlar}</p>
                                <p className='p1_second_headers_product'>{item?.sof}</p>
                                <p className='p1_second_headers_product'>{item?.baho}</p>
                            </div>
                        )
                    })
                }
                <div className='p1_second_table_headers'>
                    <p className='p1_second_headers_product'></p>
                    <p className='p1_second_headers_product table_end_text'>Jami</p>
                    <p className='p1_second_headers_product'></p>
                    <p className='p1_second_headers_product'></p>
                    <p className='p1_second_headers_product'></p>
                    <p className='p1_second_headers_product'></p>
                    <p className='p1_second_headers_product'></p>
                    <p className='p1_second_headers_product'></p>
                    <p className='p1_second_headers_product'></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default P1Form