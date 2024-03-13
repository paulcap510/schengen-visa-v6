import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { DarkModeProvider } from './DarkModeContext'; // Adjust the import path as necessary
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import VisaApi from './components/VisaApi/VisaApi';
import Search from './components/Search/Search';
import countryData from './country_data_updated.json';

function App() {
  return (
    // <DarkModeProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/visa-api" element={<VisaApi data={countryData} />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
    // </DarkModeProvider>
  );
}

export default App;
