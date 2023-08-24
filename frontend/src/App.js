import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './views/LandingPage/LandingPage';
import "./App.css";
import ScrollToTop from './components/Navbar/ScrollToTop';


function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ScrollToTop />
    </>
    
  );
}

export default App;
