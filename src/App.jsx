import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/FabButtons/FabButtons";
import FabButton from "./Components/Footer/Footer";
import Home from './Pages/Home/Home';
import Services from './Pages/services/Services'; // Uncommented and corrected path
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <FabButton />
      </div>
    </Router>
  );
}

export default App;