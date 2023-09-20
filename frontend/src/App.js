import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './views/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Directorship from './views/Directorship/Directorship';
//import services
import GeoDemographic from './views/Services/GeoDemographic';
import TrendPage from './views/Services/Trend';
import Marketing from './views/Services/Marketing';
import SocialMedia from './views/Services/SocialMedia';
import Financial from './views/Services/Financial';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />
        <Route path="/services/GeoDemographic" element={<GeoDemographic />} />
        <Route path="/services/TrendPage" element={<TrendPage />} />
        <Route path="/services/Marketing" element={<Marketing />} />
        <Route path="/services/SocialMedia" element={<SocialMedia />} />
        <Route path="/services/Financial" element={<Financial />} />
        <Route path="/views/Directorship" element={<Directorship />} />
      </Routes>
    </Router>
  );
}


export default App;