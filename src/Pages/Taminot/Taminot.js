import { Input } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './Taminot.css'


function Taminot() {
    return (
        <section className='taminot'>
            <div className='taminot_header'>
                <div className='taminot_title'>Taminot</div>
                <div className='taminot_subheader'>
                    <Link to='/taminot/form' className='taminot_link'>Add New Taminot!</Link>
                    <Link to='/taminot/form/transport' className='taminot_link'>Transport</Link>
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
            </div>
        </section>
    )
}

export default Taminot