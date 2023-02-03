import React from 'react';
import './styles/landingpage.css'
import { useNavigate } from 'react-router-dom';



export default function LandingPage() {
  const navigate = useNavigate()
  return (<>
    <div className='main-login'>
      <div className='flex-container'>
        <img className='image' src='img/lens.png'  height={'50px'} alt='lenspic' />
        <div className='box-right'>
          <div className='loginmsg' >Please Enter to login</div>
          <div  className='enter' onClick={() => { navigate('/postview') }}>Enter</div>
        </div>
      </div>
    </div>
  </>)
}
