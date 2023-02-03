import React from "react";
import '../styles/card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Card(props) {


    return (

        <div className="main-container">
            <div className="header">
                <div className="user-details">
                    <div style={{fontFamily: "Helvetica",fontSize:"15px",fontWeight:"bold"}}>{props.name}</div>
                    <div style={{fontFamily: "Verdana",fontSize:"13px",color:"grey"}}>{props.location}</div>
                </div>
               
                    <MoreHorizIcon />
               

            </div>
            <div className="body">
                <img className='img' src={`https://navin-insta-server.onrender.com/pics/${props.postImage}`} alt="postpic" />
            </div>
            <div className="footer">
                <div className='main-footer'>
                    <div>
                        <FavoriteIcon className="icon" style={{color:"red"}}/>
                        <SendIcon className="send" style={{color:"grey"}}/>
                        <div style={{fontFamily: "Verdana",fontSize:"13px",color:"grey"}}>{props.likes} likes</div>
                    </div>
                    <div className="date" style={{fontFamily: "Verdana",fontSize:"13px",color:"grey",marginTop:"13px",display:"inline"}}>
                        {props.date}
                    </div>
                </div>

                <h4 className="description" style={{fontFamily: "Helvetica",fontSize:"14px",fontWeight:"bold",margin:"10px 0px"}}>
                    {props.description}
                </h4>

            </div>


        </div>


    )

}