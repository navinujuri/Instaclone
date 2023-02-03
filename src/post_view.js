import React, { useEffect, useState } from 'react';
import HeaderComp from './components/header'
import Card from './components/card';





export default function PostView() {
  let [array, setArray] = useState([])
  useEffect(() => {


    fetch('https://navin-insta-server.onrender.com/postview').then((res) => { return res.json() }).then((obj) => { setArray(obj.data) })

  }, [])

  return (
    <>
      <HeaderComp />
      <div style={{ display: "flex", justifyContent: 'center', width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "500px" }} className='card-container'>
          {array.reverse()?.map((obj, index) => {
            return <Card key={index} name={obj.name} location={obj.location} likes={obj.likes} description={obj.description} postImage={obj.postImage} date={obj.date} />
          })
          }
         

        </div>
      </div>
    </>
  );
}
