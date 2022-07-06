import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 123456,
            product: "Acer Nitro 5",
            img: "",
            customer: "John Doe",
            date: "1 February",
            amount: 185,
            method: "Cash on delivery",
            status: "Approved",
        },
        {
            id: 113456,
            product: "Macbook Pro 13",
            img: "",
            customer: "John Smith",
            date: "22 March",
            amount: 485,
            method: "Online",
            status: "Approved",
        },
        {
            id: 123446,
            product: "Lenovo Legion III",
            img: "",
            customer: "Mary Mark",
            date: "15 March",
            amount: 720,
            method: "Online payment",
            status: "Approved",
        },
        {
            id: 122456,
            product: "Asus Nitro 1",
            img: "",
            customer: "Gboyega John",
            date: "1 March",
            amount: 784,
            method: "Cash on delivery",
            status: "Approved",
        },
        {
            id: 124566,
            product: "Asus Rog Strix",
            img: "",
            customer: "John Wick",
            date: "1 March",
            amount: 785,
            method: "Online",
            status: "Approved",
        },
    ]

    return (

        <TableContainer className='table' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='table__cell' >Tracking ID</TableCell>
                        <TableCell className='table__cell' >Product</TableCell>
                        <TableCell className='table__cell' >Customer</TableCell>
                        <TableCell className='table__cell' >Date</TableCell>
                        <TableCell className='table__cell' >Amount</TableCell>
                        <TableCell className='table__cell' >Payment method</TableCell>
                        <TableCell className='table__cell' >Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell className='table__cell'>{row.product}</TableCell>
                            <TableCell className='table__cell'>{row.customer}</TableCell>
                            <TableCell className='table__cell'>{row.date}</TableCell>
                            <TableCell className='table__cell'>{row.amount}</TableCell>
                            <TableCell className='table__cell'>{row.method}</TableCell>
                            <TableCell className='table__cell'>{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default List;