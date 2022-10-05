import React from 'react'

export default function Grocery(props) {
  return (
    <div>
      
      <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
            <h4 className='bg-light shadow-lg  bg-body rounded  p-2 mt-2'>Grocery</h4>
        </div>
    </div>
  )
}
