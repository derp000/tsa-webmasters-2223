import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import TestDisclosure from "./components/TestDisclosure";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/test" element={<TestDisclosure />} />
      <Route path = "/aboutus" element = {<AboutUs />} />
    </Routes>
  );
};

export default App;
