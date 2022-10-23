import * as React from 'react'
import './Table.css'
import { Table, TableCell, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material'



function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}
const rows = [
    createData('Lasania Chiken Fri', 2208424, '23 October 2022', 'Approved'),
    createData('Big Baza Bang', 2208425, '23 October 2022', 'Pending'),
    createData('Mouth Freshner', 2208423, '23 October 2022', 'Approved'),
    createData('Cupcake', 1808422, '23 October 2022', 'Delivered'),
];

const makeStatus = (status) =>{
    if(status === 'Approved'){
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
        else if (status === 'Pending'){
            return {
                background: '#ffadad8f',
            color: 'red',
        }
        }
        else {
            return {
                background: '#59bfff',
                color: 'white',
            }
        }
    }

export default function BasicTable() {
    return (
        <div className='Table'>
            <h3>Recent Orders</h3>
            <TableContainer component={Paper}
                style={{
                    boxShadow: '0px 13px 20px 0px #80808029'
                }}>
                <Table sx={{ minWidth: 650 }} arial-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align='left'>Tracking ID</TableCell>
                            <TableCell align='left'>Date</TableCell>
                            <TableCell align='left'>Status</TableCell>
                            <TableCell align='left'>Detail</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell align='left'>{row.trackingId}</TableCell>
                                <TableCell align='left'>{row.date}</TableCell>
                                <TableCell align='left'>
                                    <span className='status' style={makeStatus(row.status)}>
                                        {row.status}
                                    </span>
                                </TableCell>
                                <TableCell align='left' className='Detail'>Detail</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
