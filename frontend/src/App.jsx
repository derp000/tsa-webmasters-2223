import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import TestDisclosure from "./components/component-testing/TestDisclosure";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/nav" element={<Navbar />} />
      <Route path="/refnav" element={<TestDisclosure />} />
    </Routes>
  );
};

export default App;
