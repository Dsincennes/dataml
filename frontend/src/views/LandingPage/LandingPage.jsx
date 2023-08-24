import React from 'react';
import ServicesPage from '../ServicesPage/ServicesPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage'; 
import AboutUsPage from '../AboutUsPage/AboutUsPage'; 
import ContactUsPage from '../ContactUsPage/ContactUsPage';
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
      <hr class="hr"></hr>
      <div id="projects" className="element">
        <ProjectsPage />
      </div>
      <hr class="hr"></hr>
      <div id="aboutus" className="element">
        <AboutUsPage />
      </div>
      <hr class="hr"></hr>
      <div id="contactus" className="element">
        <ContactUsPage />
        
      </div>
    </div>
  )
}

export default LandingPage