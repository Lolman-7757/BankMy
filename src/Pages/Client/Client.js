import React, { useEffect, useState, useRef } from 'react';
import './Client.css'
import { Link } from 'react-router-dom';
import { Input } from '@nextui-org/react';
import Pagination from '../../Components/Pagination/Pagination';


function Client() {
    
    const [ clients, setClients ] = useState([]);
    const [ clientWarn, setClientWarn ] = useState(false);
    const clientRef = useRef(null);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ clientsPerPage, setClientsPerPage ] = useState(10)

    const lastCLientIndex = currentPage * clientsPerPage;
    const firstClientIndex = lastCLientIndex - clientsPerPage;
    const currentClient = clients.slice(firstClientIndex,lastCLientIndex)

    // header DropDown Hendle Script
    useEffect(() => {
        document.addEventListener('mousedown', clientHendleOutSide)
    
        return () => {
            document.removeEventListener('mousedown', clientHendleOutSide)
        }
    }, [])

    const clientHendleOutSide = (e) => {
        const { current: wrap } = clientRef;
        if (wrap && !wrap.contains(e.target)) {
            setClientWarn(false)
        }
    }

    const paginate = pageNumber => setCurrentPage(pageNumber)

    useEffect(() => {
        setClients(
            [
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
                { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
                { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
                { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
                { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
                { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },
            ]
        )
    },[]);

    return (
        <div className='client'>
            <div className={clientWarn?'client_warn client_warn_active':'client_warn'}>
                    <div className='client_warn_title'>Warning!</div>
                    <div className='client_warn_text'>Are you sure you want to delete it?</div>
                    <div className='client_warn_buttons'>
                        <button>Yes!</button>
                        <button onClick={()=>setClientWarn(!clientWarn)} ref={clientRef}>No!</button>
                    </div>
                </div>
            <div className='client_title'>
                <p>Klientlar</p>
            </div>
            <div className='client_addition'>
                <div>
                    <Link className='client_button' to='/client/single_form'>Add a new Client!</Link>
                    <Link className='client_button' to='/client/group_form'>Add a new Group!</Link>
                </div>
                <Input
                    rounded
                    bordered
                    placeholder="Search"
                    color="secondary"
                    width='300px'
                    className='search-input'
                    contentRight={
                        <i className='bx bx-search-alt-2'></i>
                    }
                />
            </div>
            
            <div className='clientTablePart'>
                <div className='clientTable'>
                    <div className='clienttableHeader'>
                        <p className='clientheaderTable-title'>Name</p>
                        <p className='clientheaderTable-title'>Code</p>
                        <p className='clientheaderTable-title'>PinFl</p>
                        <p className='clientheaderTable-title'>City</p>
                    </div>
                    <ul className='clienttableInfo'>
                        {
                            currentClient.map((item,index)=>{
                                return <li key={index}>
                                    <p className='clientliName li'><span>{index + 1 + (currentPage-1)*10}.</span>{item.name}</p>
                                    <p className='li'>{item.code}</p>
                                    <p className='li'>{item.pinfl}</p>
                                    <p className='li'>{item.city}</p>
                                    <div className='clientuserButtons'>
                                        <button><i className='bx bx-user'></i></button>
                                        <button><i className='bx bx-edit-alt'></i></button>
                                        <button><i className='bx bx-trash'></i></button>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <Pagination
                itemsPerPage={clientsPerPage}
                totalItems={clients.length}
                paginate={paginate}
            />
            <div>
            </div>
        </div>
    )
}

export default Client