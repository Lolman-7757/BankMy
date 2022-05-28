import React from 'react';
import './Client.css'
import { Link } from 'react-router-dom';
import { Input } from '@nextui-org/react';


function Client() {
    // function rows (){
    //     for(const value in row){
    //         return(
    //             <div>{value}</div>
    //         )
    //     }
    // }
    // name,code,pinfl,city
    return (
        <div className='client'>
            <div className='client_title'>
                <p>Clients List!</p>
                <div>
                    <Link className='client_button' to='/client/single_form'>Add a new Client!</Link>
                    <Link className='client_button' to='/client/group_form'>Add a new Group!</Link>
                </div>
            </div>
            <div className='client_table'>
                <div className='client_table_header'>
                    <div className='client_table-name'>Name</div>
                    <div className='client_table-code'>Code</div>
                    <div className='client_table-pinfl'>PINFL</div>
                    <div className='client_table-city'>City</div>
                </div>
                <div className='client_table_body'>
                    {
                        rows.map((row,rowId)=>(
                            <div className='client_table_row' key={rowId}>
                                <p className='client_table-name'>{row.name}</p>
                                <p className='client_table-code'>{row.code}</p>
                                <p className='client_table-pinfl'>{row.pinfl}</p>
                                <p className='client_table-city'>{row.city}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}


const rows = [
    { code: 12345, name: 'Joe Hattaway', pinfl: 'AD75849384758758', city: 'Nukus' },
    { code: 12345, name: 'Marlie Hess', pinfl: 'AD86995749375849', city: 'Tashkent' },
    { code: 12345, name: 'Mirza Hendrix', pinfl: 'AD129385769485948', city: 'Namangan' },
    { code: 12345, name: 'Jessie Shepherd ', pinfl: 'AD75849384758758', city: 'Termiz' },
    { code: 12345, name: 'Rudra Allen', pinfl: 'AD75849384758758', city: 'Almati' },
    { code: 12345, name: 'Benas Trevino', pinfl: 'AD75849384758758', city: 'Bukhara' },

];

export default Client