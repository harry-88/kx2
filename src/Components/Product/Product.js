import React from 'react'

import { useParams } from 'react-router-dom';
export default function Product(props) {


    const { catId } = useParams();
    return (
        <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
            <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
                    <div class="p-2 bd-highlight"><h4 className=''>Products</h4></div>
                    <div class="ms-auto p-2 bd-highlight">
                        <button className='btn btn-light btn-outline-warning text-dark'  >Add Product</button>
                    </div>
                </div>
            <h1>{catId}</h1>

        </div>
    )
}
