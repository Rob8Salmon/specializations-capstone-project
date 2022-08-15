import React, { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./LoadingScreen";
import HomeScreen from "./components/homeScreen/HomeScreen";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import PackagesPricing from "./components/packagesPricing/PackagesPricing";
import Routes from "./components/Routes";
import NavBar from "./components/NavBar"

const App = () => {
  const [taco, setTaco] = useState(false);
  useEffect(() => {
    setTimeout(() => setTaco(false), 8000);
  }, []);
  console.log(taco);

  if (taco) {
    return <LoadingScreen />;
  } else {
    return <HomeScreen /> 
  } 
};



export default App;
