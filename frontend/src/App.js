import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import VisaApi from './components/VisaApi/VisaApi';
import Search from './components/Search/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import countryData from './country_data_updated.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />{' '}
        <Route path="/about" element={<About />} />
        <Route path="/visa-api" element={<VisaApi data={countryData} />} />{' '}
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
