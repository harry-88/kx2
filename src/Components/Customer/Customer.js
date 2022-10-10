import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getUserData } from '../../GetData/Users';
import AddCustomerModal from './AddCustomerModal';

export default function Customer(props) {

    const [modalShow, setAddCustomerModalShow] = useState(false);

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
        <>
            <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
                <div class="d-flex bd-highlight  bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
                    <div class="p-2 bd-highlight"><h4 className=''>Customers</h4></div>
                    <div class="ms-auto p-2 bd-highlight">
                        <button className='btn btn-light btn-outline-warning text-dark' onClick={() => setAddCustomerModalShow(true)} >Add Account</button>
                    </div>
                </div>

                <div className='container mt-5  tableWidth'>

                    <table className='table table-striped table-hover'>
                        <thead className='brandBgColor text-white'>

                            <td className='py-3'>ID</td>
                            <th className='py-3' style={{ width: "15%" }}>Name</th>
                            <th className='py-3'>Email</th>
                            <th className='py-3' style={{ width: "5%" }}>status</th>
                            {/* <th style={{width:"20%"}}>Address</th> */}
                            <th className='py-3' style={{ width: "8%" }}>Ethnicity</th>
                            <th className='py-3' style={{ width: "5%" }}>Phone no</th>
                            <th className='py-3' style={{ width: "22%" }}>Created at</th>
                            <th className='py-3' style={{ width: "22%" }}>Updated at</th>
                            <th className='py-3'>Action</th>
                        </thead>
                        <tbody>
                            {userData.map((row) => {
                                return <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td >{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.status}</td>
                                    {/* <td>{row.address !== null ? row.address : '-----'}</td> */}
                                    <td>{row.ethnic_monitoring !== null ? row.ethnic_monitoring : '-----'}</td>
                                    <td>{row.phone_no !== null ? row.phone_no : '-----'}</td>
                                    <td>{row.created_at.slice(0, 10) + "\t" + row.created_at.slice(11, 19)}</td>
                                    <td>{row.updated_at.slice(0, 10) + "\t" + row.updated_at.slice(11, 19)}</td>
                                    <td><><p className='brandColor'><i role={'button'} className=" fa-solid fa-pen-to-square"></i> <i role={'button'} class="fa-sharp fa-solid fa-trash"></i></p></></td>
                                </tr>
                            })}
                        </tbody>

                    </table>

                </div>
            </div>

            <AddCustomerModal
                show={modalShow}
                onHide={() => setAddCustomerModalShow(false)}
            />
        </>
    )
}
