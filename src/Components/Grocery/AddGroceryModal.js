import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function AddGroceryModal(props) {

    const onChange = (e) => {
        setModalInputValue({ ...inputModalValue, [e.target.name]: e.target.value });
    }
    

    const [inputModalValue, setModalInputValue] = useState({
        Name: '',
        PersonName: '',
        PersonPhone: '',
        Location: '',
        Longitude: '',
        Latitude: '',
    })


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="modal-fade contained-modal-title-vcenter"
            className='WarehouseModal'>
            <div className="modal-header warehousemodalhead p-3">
                <h5>Add Category</h5>
            </div>
            <div className="col-12">
                <div className='addWarehouse'>
                    {/* <h6 className='text-head'>Warehouse Type</h6> */}

                    <form>
                        <div className='row'>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="row align-items-center mt-3">
                                    <label for="">Name</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control mt-1" id="inputcode" name='Name' value={inputModalValue.Name} onChange={onChange} placeholder="Name" />
                                    </div>

                                    <label for="" className='mt-1'>Person Name</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control mt-1" id="inputcode" name='PersonName' value={inputModalValue.PersonName} onChange={onChange} placeholder="Person Name" />
                                    </div>

                                    <label for="" className='mt-1'>Person Phone</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control mt-1" id="inputcode" name='PersonPhone' value={inputModalValue.PersonPhone} onChange={onChange} placeholder="Person Phone" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="row align-items-center mt-3">
                                    <label for="" >Location</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control mt-1" id="inputcode" name='Location' value={inputModalValue.Location} onChange={onChange} placeholder="Location" />
                                    </div>

                                    <label for="" className='mt-1'>Longitude</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control mt-1" id="inputcode" name='Longitude' value={inputModalValue.Longitude} onChange={onChange} placeholder="Longitude" />
                                    </div>

                                    <label for="" className='mt-1'>Latitude</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control mt-1" id="inputcode" name='Latitude' value={inputModalValue.Latitude} onChange={onChange} placeholder="Latitude" />
                                    </div>

                                </div>
                            </div>


                        </div>

                    </form>

                </div>
                <div className="modal-footer col-12">
                    <button type="button" onClick={props.onHide} className="btn cancelbtn" data-dismiss="modal">Cancel</button>
                    <button type="button" className='btn savebtn'>Save</button>
                </div>
            </div >

        </Modal >

    )
}
