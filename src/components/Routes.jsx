import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./homeScreen/HomeScreen";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
import PackagesPricing from "./packagesPricing/PackagesPricing";
import Contact from "./contact/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/About" element={<About />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Packages" element={<PackagesPricing />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};
export default Router;
