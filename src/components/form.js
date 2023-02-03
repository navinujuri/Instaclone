import React from "react";
import { useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../styles/form.css'

export default function Form (){
    const file=useRef()
    const name=useRef()
    const location=useRef()
    const description=useRef()
    const navigate=useNavigate()

    async function submit(){
        const form = new FormData()
        form.append('file',file.current.files[0])//key
        form.append('name',name.current.value)
        form.append('location',location.current.value)
        form.append('description',description.current.value)

        
        console.log(file.current)
        console.log(file.current.files)
        console.log(file.current.files[0])

        form.forEach((val,key)=>{
            console.log(val,key)
        })
        // fetch('http://localhost:5000/postupload',{
        //     method:'POST',
        //     // header:{'Content-Type': 'multipart/form-data'},
        //     mode:'no-cors',//since im getting error in console to use 'mode:no-cors'
        //     body:form
        // })
       await axios({
            method: "post",
            url: "https://navin-insta-server.onrender.com/postupload",
            data: form,
          
          })
          navigate('/postview')


        //     .then(function (response) {
        //       //handle success
        //       console.log(response);
        //     })
        //     .catch(function (response) {
        //       //handle error
        //       console.log(response);
        //     });
         
    }


    return(
        <>
        <div className="form-container">
        <div className="form">
            <input className="fields" type="file"  placeholder="No file chosen"   ref={file}/>
            <input className="fields" type='text'   placeholder="Author"   ref={name}/>
            <input className="fields" type='text'  placeholder="Location"   ref={location}/>
            <input className="fields" type='text'  placeholder="Description"   ref={description}/>
            <button className="fields" type='submit' onClick={submit}>post</button>
         </div>
         </div>
        </>
    )
}