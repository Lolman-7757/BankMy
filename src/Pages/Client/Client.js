import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './Client.css'
import { Link } from 'react-router-dom';


function Client() {
    return (
        <div className='client'>
            <div className='client_title'>
                <p>Clients List!</p>
                <div>
                    <Link className='client_button' to='/client/single_form'>Add a new Client!</Link>
                    <Link className='client_button' to='/client/group_form'>Add a new Group!</Link>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 200,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 200,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 50,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

export default Client