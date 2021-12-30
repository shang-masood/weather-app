import Home from './Home';
import { Route, Routes } from 'react-router';
import React from 'react';
import Cities from './Cities';
import Weather from './Weather';
const NavBar = () =>(
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cities/:Name' element={<Weather/>}></Route>
      </Routes>
    )
    
    export default NavBar ;