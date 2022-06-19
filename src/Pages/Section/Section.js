import React,{useState,useEffect} from 'react'
import { Input } from '@nextui-org/react'
import Pagination from '../../Components/Pagination/Pagination'

// Styles
import './Section.css'


function Section() {

    const [ addFormSection, setAddFormSection ] = useState('add_mahsulot_main close')

    function openFormSection(){
        setAddFormSection('add_mahsulot_main open')
    }
    function closeFormSection(){
        setAddFormSection('add_mahsulot_main close')
    }



    const [ sectionlar, setSectionlar ] = useState([])

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ sectionsPerPage, setSectionsPerPage ] = useState(10)

    const lastSectionIndex = currentPage * sectionsPerPage;
    const firstSectionIndex = lastSectionIndex - sectionsPerPage;
    const currentSection = sectionlar.slice(firstSectionIndex,lastSectionIndex)

    useEffect(() => {
        setSectionlar(
            [
                {name:'Avtokredit', code:5435239},
                {name:'Uykredit', code:54589},
                {name:'To`lov rejasi', code:13489},
                {name:'Mikrokredit', code:16249},
                {name:'Avtokredit', code:1389},
                {name:'Uykredit', code:6789},
                {name:'To`lov rejasi', code:86789},
                {name:'Mikrokredit', code:187689},
                {name:'Avtokredit', code:187789},
                {name:'Uykredit', code:346789},
                {name:'To`lov rejasi', code:356789},
                {name:'Mikrokredit', code:45389},
                {name:'Avtokredit', code:64589},
                {name:'Uykredit', code:12689},
                {name:'Mikrokredit', code:4345789}
            ]
        )
    },[]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <div className={addFormSection}>
                <p>Bo'lim qo'shish</p>
                <Input
                    rounded
                    bordered
                    placeholder="Nomi..."
                    color="secondary"
                    width='100%'
                    label="Bo'lim nomi"
                />
                <div className='add_mahsulot_buttons'>
                    <button onClick={closeFormSection}>Orqaga</button>
                    <button onClick={closeFormSection}>Qoshish</button>
                </div>
            </div>

            <section className='section_main'>
                <h1 className='filial_title'>Bo'limlar</h1>
                <div className='filial_header'>
                    <a onClick={openFormSection}>
                        Bo'lim Qoshish
                        <i className='bx bx-plus-circle'></i>
                    </a>
                    <Input
                        rounded
                        bordered
                        placeholder="Bo'lim nomi..."
                        color="secondary"
                        width='300px'
                        className='filial_search'
                        contentRight={
                            <i className='bx bx-search-alt-2'></i>
                        }
                    />
                </div>

                <div className='mahsulot_table'>
                    <div className='mahsulot_table_headers'>
                        <p>Bo'lim nomi</p>
                        <p>Bo'lim code</p>
                    </div>

                    <div className='mahsulot_table_products'>
                        {
                            currentSection.map((item,index)=>{
                                return(
                                    <div className='mahsulot_table_product'>
                                        <p>{item.name}</p>
                                        <p>{item.code}</p>
                                        <div className='mahsulot_prosuct_buttons'>
                                            <button><i className='bx bx-trash'></i></button>
                                            <button><i className='bx bx-edit-alt'></i></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <Pagination
                    itemsPerPage={sectionsPerPage}
                    totalItems={sectionlar.length}
                    paginate={paginate}
                />
            </section>
        </>
    )
}

export default Section