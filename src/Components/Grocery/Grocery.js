import React from 'react'

export default function Grocery(props) {
  return (
    // <div>

    //   <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
    //         <h4 className='bg-light shadow-lg  bg-body rounded  p-2 mt-2'>Grocery</h4>
    //     </div>
    // </div>

    <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
      <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
        <div class="p-2 bd-highlight"><h4 className=''>Grocery</h4></div>
        <div class="ms-auto p-2 bd-highlight">
          <button className='btn btn-light btn-outline-warning text-dark'>Add Grocery</button>
        </div>
      </div>


    </div>
  )
}
