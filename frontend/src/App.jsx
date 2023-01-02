import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Navbar from "./components/Navbar";

const categories = [
  { name: "About" },
  { name: "Services" },
  { name: "Pricing" },
  { name: "Legal" },
];

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      {/* Testing */}
      <Route path="/nav" element={<Navbar categories={categories} />} />
    </Routes>
  );
};

export default App;
