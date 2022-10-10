import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';
import { getProductByParentId } from '../../GetData/Product';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import AddProduct from './AddProduct';
import cardImg from "../../fruits.jpg"
export default function Product(props) {

    const [addProductModal, setAddProductModal] = useState(false)
    const { catId } = useParams();
    const [product, setProduct] = useState([]);
    // console.log(product, "product");
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await getProductByParentId(catId);
        if (res.code === 404) {
            toast("No record found againest this id.");
        }
        else {
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

            <div className='row'>
                {
                    product.length !== 0 ? product.map((e) => {
                        return <div className='col-lg-4 col-sm-12'>
                            <div className="card mb-3 mt-3" style={{ maxWidth: "350px" }}>
                                <div class="row g-0">
                                    <div class="">
                                        <img src={cardImg} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="d-flex">
                                        <div class="card-body">
                                            <h5 class="card-title">{e.name}</h5>
                                            <p class="card-text">Quantity {e.quantity}</p>
                                            <p class="card-text"><small class="text-muted">Price : {e.price}pkr</small></p>
                                        </div>
                                        <IconButton aria-label="settings" className='h-25'>
                                            <div class="dropdown">
                                                <button class="dropbtn"><MoreVertIcon /></button>
                                                <div class="dropdown-content">
                                                    <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-circle-info"></i> View</a>
                                                </div>
                                            </div>
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }) : <h1 className='text-center mt-5'>No Product</h1>
                }
            </div>

            <div class="modal mt-5" id="exampleModal">
                <div class="modal-dialog mt-5">
                    <div class="modal-content">
                        <div class="modal-header warehousemodalhead">
                            <h5 class="modal-title" id="exampleModalLabel">Product Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='row my-2'>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory ID</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='id' placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Name</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='name' placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Parent ID</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='parent_id' placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Status</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='status' placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Created At</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='created_at' placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6 col-sm-12'>
                                    <div className="row align-items-center mt-3">
                                        <label for="">Catagory Update at</label>
                                        <div className="col-12">
                                            <input type="text" className="form-control mt-1" id="inputcode" name='updated_at' placeholder="Catagory Name" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
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
