import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import { HeroScreen, AboutUs, Services, Pricing, Legal } from "../components";

const categories = [
  { name: "About", to: "AboutUs" },
  { name: "Services", to: "Services" },
  { name: "Pricing", to: "Pricing" },
  { name: "Legal", to: "Legal" },
];

const Home = () => {
  return (
    <>
      <Navbar categories={categories} />
      <Routes>
        <Route path="/" element={<HeroScreen />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Legal" element={<Legal />} />
      </Routes>
    </>
  );
};

export default Home;
