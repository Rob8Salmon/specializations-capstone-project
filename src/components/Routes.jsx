import React from 'react'
import {Route, Routes} from "react-router-dom";
import HomeScreen from './homeScreen/HomeScreen';
import About from './about/About';
import Gallery from './gallery/Gallery';
import PackagesPricing from './packagesPricing/PackagesPricing';
import Contact from './contact/Contact';

export default (
    <Routes>
        <Route path = "/" element={<HomeScreen/>} />
        <Route path = "/" element={<About/>} />
        <Route path = "/" element={<Gallery/>} />
        <Route path = "/" element={<PackagesPricing/>} />
        <Route path = "/" element={<Contact/>} />
    </Routes>
)