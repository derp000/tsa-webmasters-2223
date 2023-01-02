import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Navbar from "./components/Navbar";

import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/nav" element={<Navbar />} />
      <Route path = "/aboutus" element = {<AboutUs />} />
    </Routes>
  );
};

export default App;
