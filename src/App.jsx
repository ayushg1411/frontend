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
import React, { useEffect } from 'react';




function App() {
  
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://slate-gray-capybara-tutu.cyclic.app/api/user/login');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
   <Responsive/>
   <div>
    <h1>hii</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Phone: {userData.phone}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>Error: {error}</p>}
    </div>

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
