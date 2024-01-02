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
  
  const [apiMessage, setApiMessage] = useState('');
  const apiEndpoint = 'https://tiny-jade-cougar-cap.cyclic.app/hello';
  const fetchData = async () => {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setApiMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiMessage('Error fetching data');
    }
  };
  return (
    <>
   <Responsive/>
   <h1>API Call Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {apiMessage && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify({ message: apiMessage }, null, 2)}</pre>
        </div>
      )}

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
