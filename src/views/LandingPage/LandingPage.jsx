import React from 'react'
import DatamlNavbar from '../../components/Navbar/Navbar'
import { useEffect, useState, useRef } from 'react'
import ServicesPage from '../ServicesPage/ServicesPage';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div>
      <DatamlNavbar />
      <div >
        <img
          alt="First slide"
          src="https://picsum.photos/1200/400?grayscale&blur=2&random=1"
          style={{width: '100%'}}
        />
      </div>
      <div className="element" >
        <ServicesPage />
      </div>
    </div>
  )
}

export default LandingPage