import React, { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import HomeScreen from "./components/homeScreen/HomeScreen";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import PackagesPricing from "./components/packagesPricing/PackagesPricing";
import Router from "./components/Routes";
import NavBar from "./components/NavBar";

const App = () => {
  const [taco, setTaco] = useState(false);
  useEffect(() => {
    setTimeout(() => setTaco(false), 8000);
  }, []);
  console.log(taco);

  if (taco) {
    return <LoadingScreen />;
  } else {
    return (
      <div>
        <NavBar />
        <Router />
      </div>
    ) 
  }
};

const contactConfig ={
  description: 
    'Lorem ipsum dolor sit amet,....'
};

export {
  contactConfig
}

export default App;
