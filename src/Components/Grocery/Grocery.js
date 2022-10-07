import React, { useEffect, useState } from 'react'
import { getCatagoryRecord } from '../../GetData/Grocerys';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddGroceryModal from './AddGroceryModal';
import { useNavigate, } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Menu } from '@mui/material';
import { hover } from '@testing-library/user-event/dist/hover';
import './Grocery.css';


export default function Grocery(props) {

  
  let navigator = useNavigate();
  const [GrocerymodalShow, setGroceryModalShow] = useState(false);

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

  const Menu = [
    {
      image: "images/Fresh-Food.jpg"
    },
    {
      image: "images/Hot-Meal.jpg"
    },
    {
      image: "images/Frozen-Food.jpg"
    },
    {
      image: "images/Cupboard-Food.jpg"
    },
    {
      image: "images/Bakery-Food.jpg"
    },
    {
      image: "images/Health-and-Household.jpg"
    },
    {
      image: "images/Fresh-Vegetables.jpg"
    },
    {
      image: "images/Fresh-Fruits.jpg"
    },
    {
      image: "images/Dairy-and-Eggs.jpg"
    },
    {
      image: "images/Meat.jpg"
    },
    {
      image: "images/Fish-and-Seafood.jpg"
    },
    {
      image: "images/Frozen-Vegetables.jpg"
    },
    {
      image: "images/Frozen-Meals.jpg"
    },
    {
      image: "images/Frozen-Meat.jpg"
    }
  ]

  return (

    <>
      <div className={props.pageFullWidth === false ? 'fullWidth' : 'smalWidth'}>
        <div class="d-flex bd-highlight bg-light shadow-lg  bg-body rounded mx-4 p-2 mt-2">
          <div class="p-2 bd-highlight"><h4 className=''>Grocery</h4></div>
          <div class="ms-auto p-2 bd-highlight">
            <button className='btn btn-light btn-outline-warning text-dark' onClick={() => setGroceryModalShow(true)}>Add Category</button>
          </div>
        </div>


        <div className='row  text-dark'>


          {categoryRecord.length !== 0 ? categoryRecord.map((c, i) => {
            return <div className='col-lg-3 col-sm-6 mt-5' >
              <div className='imageContainer'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader

                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={c.name}

                  />
                  <CardMedia role='button' onClick={()=> navigator(`${c.id}`)}
                    component="img"
                    height="194"
                    image={Menu[i].image}
                  />
                </Card>
                {/* <p className="centered text-dark">{c.name}</p> */}
              </div>

            </div>
          }) : ''}


        </div>
        <ToastContainer className={'mt-5'} />

      </div>

      <AddGroceryModal
        show={GrocerymodalShow}
        onHide={() => setGroceryModalShow(false)}
      />
    </>
  )
}
