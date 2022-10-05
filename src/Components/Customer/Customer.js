import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getUserData } from '../../GetData/Users';

export default function Customer(props) {

    const tableDaata = [
        {
            firstName: "muhammad",
            lastName: "Haris",
            email: "haris@gmail.com",
            number: "03044195933",
            address: "lahore",
            ethnicity: "Asian"
        },
        {
            firstName: "muhammad",
            lastName: "Haris",
            email: "haris@gmail.com",
            number: "03044195933",
            address: "lahore",
            ethnicity: "Asian"
        },
        {
            firstName: "muhammad",
            lastName: "Haris",
            email: "haris@gmail.com",
            number: "03044195933",
            address: "lahore",
            ethnicity: "Asian"
        },
        {
            firstName: "muhammad",
            lastName: "Haris",
            email: "haris@gmail.com",
            number: "03044195933",
            address: "lahore",
            ethnicity: "Asian"
        },
        {
            firstName: "muhammad",
            lastName: "Haris",
            email: "haris@gmail.com",
            number: "03044195933",
            address: "lahore",
            ethnicity: "Asian"
        },
    ]

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getAllUser();
    }, [])
    const getAllUser = async () => {
        const record = await getUserData()
        setUserData(record);
    }
    return (
        <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
            <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
                <div class="p-2 bd-highlight"><h4 className=''>Customers</h4></div>
                <div class="ms-auto p-2 bd-highlight">
                    <button className='btn btn-light btn-outline-warning text-dark' >Add Account</button>
                </div>
            </div>

            <TableContainer className='container mt-5' component={Paper}>
                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
                    <TableHead className='brandBgColor'>
                        <TableRow>
                            <TableCell >ID</TableCell>
                            <TableCell align="left" width="50%">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">status</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">Ethnicity</TableCell>
                            <TableCell align="left">Phone no</TableCell>
                            <TableCell align="left">Created at</TableCell>
                            <TableCell align="left">Updated at</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left" style={{ width: '40%' }}>{row.name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                                <TableCell align="left">{row.address !== null ? row.address : '-----'}</TableCell>
                                <TableCell align="left">{row.ethnic_monitoring !== null ? row.ethnic_monitoring : '-----'}</TableCell>
                                <TableCell align="left">{row.phone_no !== null ? row.phone_no : '-----'}</TableCell>
                                <TableCell align="left">{row.created_at.slice(0, 10) + "\t" + row.created_at.slice(11, 19)}</TableCell>
                                <TableCell align="left">{row.updated_at.slice(0, 10) + "\t" + row.updated_at.slice(11, 19)}</TableCell>
                                <TableCell className='brandColor' align="left"><><p className='brandColor' ><i role={'button'} class="fa-solid fa-pen-to-square"></i> <i role={'button'} class="fa-sharp fa-solid fa-trash"></i></p></></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <div className='container mt-5  tableWidth'>
                <table className='table table-striped table-hover'>
                    <thead className='p-1 brandBgColor'>
                        
                    <td >ID</td>
                            <td  >Name</td>
                            <td >Email</td>
                            <td >status</td>
                            <td >Address</td>
                            <td >Ethnicity</td>
                            <td >Phone no</td>
                            <td >Created at</td>
                            <td >Updated at</td>
                            <td >Action</td>
                    </thead>
                    <tbody>
                        {userData.map((row) => {
                            return <tr key={row.id}>
                                <td>{row.id}</td>
                                <td >{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.status}</td>
                                <td>{row.address !== null ? row.address : '-----'}</td>
                                <td>{row.ethnic_monitoring !== null ? row.ethnic_monitoring : '-----'}</td>
                                <td>{row.phone_no !== null ? row.phone_no : '-----'}</td>
                                <td>{row.created_at.slice(0, 10) + "\t" + row.created_at.slice(11, 19)}</td>
                                <td>{row.updated_at}</td>
                                <td><><p className='brandColor'><i role={'button'} className=" fa-solid fa-pen-to-square"></i> <i role={'button'} class="fa-sharp fa-solid fa-trash"></i></p></></td>
                            </tr>
                        })}
                    </tbody>

                </table>

            </div> */}
        </div>
    )
}
