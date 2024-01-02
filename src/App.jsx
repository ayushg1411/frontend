import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import File from "./file";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Responsive from "./components/Responsive";

function App() {
  return (
    <>
   <Responsive/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/Sign-up" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </>
  );
}

export default App;
