import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './views/LandingPage/LandingPage';
/*import ServicesPage from './views/ServicesPage/ServicesPage';*/
import ProjectsPage from './views/ProjectsPage/ProjectsPage';
import AboutUsPage from './views/AboutUsPage/AboutUsPage';
import Service from './views/Service/Service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        {/* assuming /contactus route renders Service component as well, adjust as needed */}
        <Route path="/contactus" element={<Service />} /> 
      </Routes>
    </Router>
  );
}

export default App;
