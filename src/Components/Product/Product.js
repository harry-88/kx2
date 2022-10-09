import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { getProductByParentId } from '../../GetData/Product';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import AddProduct from './AddProduct';
export default function Product(props) {

    const [addProductModal, setAddProductModal] = useState(false)
    const { catId } = useParams();
    const [product,setProduct] = useState([]);

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await getProductByParentId(catId);
        if (res.code === 404) {
            toast("No record found againest this id.");
        }
        else{
            setProduct(res.results.data)
        }

    }
    return (
        <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
            <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
                <div class="p-2 bd-highlight"><h4 className=''>Products</h4></div>
                <div class="ms-auto p-2 bd-highlight">
                    <button className='btn btn-light btn-outline-warning text-dark' onClick={() => setAddProductModal(true)}  >Add Product</button>
                </div>
            </div>

<h1>{catId}</h1>
            <AddProduct
                show={addProductModal}
                id={catId}
                onHide={() => setAddProductModal(false)}
                getProduct={getProduct}
            />
            <ToastContainer className={'mt-5'} />
        </div>
    )
}
