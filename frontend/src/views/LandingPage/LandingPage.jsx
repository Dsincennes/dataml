import React from 'react';
import ServicesPage from '../ServicesPage/ServicesPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage'; 
import AboutUsPage from '../AboutUsPage/AboutUsPage'; 
import './LandingPage.scss';





const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div id="image" className="header-image">
        <img
          alt="First slide"
          src="https://picsum.photos/1200/400?grayscale&blur=2&random=1"
          style={{ width: '100%' }}
        />
      </div>
      <div id="services" className="element">
        <ServicesPage />
      </div>
      <div id="projects" className="element">
        <ProjectsPage />
      </div>
      <div id="aboutus" className="element">
        <AboutUsPage />
      </div>
    </div>
  )
}

export default LandingPage