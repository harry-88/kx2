import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useParams } from 'react-router-dom';
import { getProductByParentId } from '../../GetData/Product';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import AddProduct from './AddProduct';
import cardImg from "../../fruits.jpg";
import ViewProductDetail from './ViewProductDetail';


export default function Product(props) {

    const [addProductModal, setAddProductModal] = useState(false)
    const { catId } = useParams();
    const [product, setProduct] = useState([]);
    const [noProduct,setNoProduct] = useState(false);
    const [ProductViewModal, setProductViewModalShow] = useState(false);
    // const [ProductView,ShowProductView] = useState(false);

    // console.log(product, "product");
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        // console.log('cat is',catId);
        const res = await getProductByParentId(catId);
        if (res.code === 404) {
            toast("No record found againest this id.");
            setNoProduct(true)
        }
        else {
            setProduct(res.results.data)
        }

    }

    const [viewProdDetail, setProdViewDetail] = useState(false)
    const [ProdcatData, setProdCatData] = useState();

    const showProdDetail = (detail) => {
        // console.log('detai is',detail);
        setProdCatData(detail)
        setProdViewDetail(true)
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
                {product.map((e) => {
                        return <div className='col-lg-3 col-sm-12'>
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
                                        <div className='mt-1 p-3'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => showProdDetail(e)}><i className="fa-solid fa-circle-info"></i> View</Dropdown.Item>
                                                </Dropdown.Menu>
                                                {/* onClick={() => setProductViewModalShow(true)}> */}
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

                {noProduct === true?
                 <h1 className='mt-2'>No product</h1>:''}
            </div>

            <AddProduct
                show={addProductModal}
                id={catId}
                onHide={() => setAddProductModal(false)}
                getProduct={getProduct}
            />
            <ToastContainer 

            className={'mt-5'} />

            <ViewProductDetail
                show={viewProdDetail}
                onHide={() => setProdViewDetail(false)}
                data={ProdcatData}
            />

        </div>
    )
}
