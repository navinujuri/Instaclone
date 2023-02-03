import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostUpload from '../post_upload';
import PostView from '../post_view';
import LandingPage from '../landing_page';


export default function MyRouter(){


    return(<>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='postview' element={<PostView/>}/>
        <Route path='postupload' element={<PostUpload/>}/>
        <Route path='*' element={<h1>404 error</h1>}/>
    </Routes>
    </BrowserRouter>
    
    </>)
}
