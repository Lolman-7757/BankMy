import React, {useEffect,useState} from 'react';
import './Client.css'
import { Link } from 'react-router-dom';
import { Input } from '@nextui-org/react';


function Client() {
    
    const [clients, setClients] = useState([]);

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
                { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' }
            ]
        )
    },[]);

    return (
        <div className='client'>
            <div className='client_title'>
                <p>Clients List!</p>
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
                                clients.map((item,index)=>{
                                    return <li>
                                        <p className='clientliName li'><span>{index + 1}.</span>{item.name}</p>
                                        <p className='li'>{item.city}</p>
                                        <p className='li'>{item.pinfl}</p>
                                        <p className='li'>{item.city}</p>
                                        <div className='clientuserButtons'>
                                            <button><i className='bx bx-edit-alt'></i></button>
                                            <button><i className='bx bx-trash'></i></button>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

            <div>
            </div>
        </div>
    )
}

export default Client