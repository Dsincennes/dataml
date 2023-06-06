import React from 'react'
import DatamlNavbar from '../../components/Navbar/Navbar'
//import { useEffect, useState, useRef } from 'react'
import ServicesPage from '../ServicesPage/ServicesPage';
import './LandingPage.scss';
import AboutUs from '../AboutUsPage/AboutUsPage';
import Projects from '../ProjectsPage/ProjectsPage';
import Login from '../../components/Navbar/Login/Login';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <DatamlNavbar />
      
      <div className="header-image">
        <img
          alt="First slide"
          src="https://picsum.photos/1200/400?grayscale&blur=2&random=1"
          style={{width: '100%'}}
        />
      </div>
      <div className="element" >
        <ServicesPage />
      </div>
      <div className="element">
        <AboutUs />
      </div>
      <div className="element">
        <Projects />
      </div>
    </div>
  )
}

export default LandingPage