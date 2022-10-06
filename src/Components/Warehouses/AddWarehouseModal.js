import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './AddWarehouseModal.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { insertWarehouseData } from '../../GetData/Warehouse';

export default function AddWarehouseModal(props) {

    const [inputModalValue, setModalInputValue] = useState({
        Name: '',
        PersonName: '',
        PersonPhone: '',
        Location: '',
        Longitude: '',
        Latitude: '',
    })

    const onChange = (e) => {
        setModalInputValue({ ...inputModalValue, [e.target.name]: e.target.value });
    }

    const [InputCheckBox,setInputCheckBox] = useState('')
    // console.log('box is', InputCheckBox.id);

    const validCheckBox = (e) => {
        setInputCheckBox(e.target.id);
        console.log('is a', e.target.id);
    }

    const Validate = async(e) =>{
        if(inputModalValue.Name === "" || inputModalValue.PersonName === "" || inputModalValue.Location === "" || inputModalValue.Longitude === "" || inputModalValue.Latitude === ""){

            toast.warning('fields are required.')
        }

        let RegName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        if(!RegName.test(inputModalValue.Name)){
            toast.warning('Enter a valid Name.')
        }

        let RegPerName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        if(!RegPerName.test(inputModalValue.PersonName)){
            toast.warning('Enter a valid Person Name.')
        }

        let RegPhoNo = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
        if(!RegPhoNo.test(inputModalValue.PersonPhone)){
            toast.warning('Enter a Valid Phone Number.')
        }

        let RegLoc = /^[a-zA-Z]*$/
        if(!RegLoc.test(inputModalValue.Location)){
            toast.warning('Enter a Valid Location.')
        }

        let RegLon = /^(\d*\.)?\d+$/
        if(!RegLon.test(inputModalValue.Longitude)){
            toast.warning('Enter a Valid Longitude.')
        }

        let RegLat = /^(\d*\.)?\d+$/
        if(!RegLat.test(inputModalValue.Latitude)){
            toast.warning('Enter a Valid Latitude.')
        }
        let w = {
            "name":inputModalValue.Name,
            "location":inputModalValue.Location,
            "longitude":inputModalValue.Longitude,
            "latitude":inputModalValue.Latitude,
            "contact_person_name":inputModalValue.PersonName,
            "contact_person_phone":inputModalValue.PersonPhone
        }

        const res =  await insertWarehouseData(w);
        console.log('res is ',res)
        if(res.code === 200)
        {
            toast.success('Warehouse is created.')
            props.onHide();
            props.getWarehouseUser();
        }
        else{
            toast.error(res.results)
        }

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="modal-fade contained-modal-title-vcenter"
            className='WarehouseModal'>
            <div className="modal-header warehousemodalhead p-3">
                <h5>Add Warehouse</h5>
            </div>
            <div className="col-12">
                <div className='addWarehouse'>
                    <h6 className='text-head'>Warehouse Type</h6>
                    <div>
                        <div className="form-check form-check-inline mt-2">
                            <input className="" type="radio" onClick={validCheckBox} name="flexRadioDefault" id="Public_Warehouse"/>
                            <label className="form-check-label m-1" for="flexRadioDefault1">Public Warehouse</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="" type="radio" onClick={validCheckBox} name="flexRadioDefault" id="Private_Warehouse"/>
                            <label className="form-check-label m-1" for="flexRadioDefault2">Private Warehouse</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="" type="radio" onClick={validCheckBox} name="flexRadioDefault" id="Smart_Warehouse"/>
                            <label className="form-check-label m-1" for="flexRadioDefault3">Smart Warehouse</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="" type="radio" onClick={validCheckBox} name="flexRadioDefault" id="Cold_Warehouse"/>
                            <label className="form-check-label m-1" for="flexRadioDefault4">Cold Warehouse</label>
                        </div>

                    </div>

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
                    <button type="button" className='btn savebtn' onClick={Validate}>Save</button>
                </div>
            </div >


            <ToastContainer className={'mt-5'} />
        </Modal >

    )
}
