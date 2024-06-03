import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Apartments from "./pages/apartments";
import Gallery from "./pages/gallery";
import Saved from "./pages/saved";
import Info from "./pages/info";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/info" element={<Info />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}
