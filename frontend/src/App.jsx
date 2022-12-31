import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import TestDisclosure from "./components/TestDisclosure";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/test" element={<TestDisclosure />} />
    </Routes>
  );
};

export default App;
