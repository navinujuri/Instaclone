import React from 'react'
import '../styles/header.css'
import { useNavigate } from 'react-router-dom';
import UploadIcon from '@mui/icons-material/Upload';
import InstagramIcon from '@mui/icons-material/Instagram';



export default function HeaderComp() {
    const navigate = useNavigate()
    return (

        <div className='header-container'>
            <div> <InstagramIcon style={{height:"50px",width:"50px",marginLeft:"50px"}} onClick={() => { navigate('/postview') }} />
            </div>




            <h1 className='insta' onClick={() => { navigate('/postview') }}>Instagram</h1>


            <UploadIcon className='upload' style={{height:"50px",width:"50px",marginRight:"50px"}}  onClick={() => { navigate('/postupload') }} />
            


        </div>




    );
}
