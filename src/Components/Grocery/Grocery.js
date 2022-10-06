import React, { useEffect, useState } from 'react'
import { getCatagoryRecord } from '../../GetData/Grocerys';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Grocery(props) {

  const [categoryRecord, setCatagory] = useState([]);
  useEffect(() => {
    getAllCatagory();
  }, [])

  const getAllCatagory = async () => {
    const res = await getCatagoryRecord();

    if (res.code === 200) {
      setCatagory(res.results.data);


    }
    else {

      toast("Error while getting data.")
    }
  }
  return (

    <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
      <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
        <div class="p-2 bd-highlight"><h4 className=''>Grocery</h4></div>
        <div class="ms-auto p-2 bd-highlight">
          <button className='btn btn-light btn-outline-warning text-dark'>Add Grocery</button>
        </div>
      </div>


      <div className='row  text-dark'>
        {categoryRecord.length !== 0 ? categoryRecord.map((c) => {
          return <div className='col-lg-3 col-sm-6 mt-5' >
            <div className='imageContainer my-5 bg-dark text-light'>

              <p class="top-right text-dark" role={'button'}><i class="fa-solid fa-ellipsis-vertical"></i></p>
              <p class="centered text-dark">{c.name}</p>

            </div>
          </div>
        }) : ''}
      </div>
      <ToastContainer className={'mt-5'} />

    </div>
  )
}
