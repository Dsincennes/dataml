import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Marketing.scss'; // Import a CSS file for styling

const Marketing = () => {
  return (
    <div className="Marketing-Main">
      <Navbar />
      <h1>Marketing analysis</h1>
      <div className="iframe-container">
        <iframe src="https://dataml-ds.runmercury.com" width="1200" height="800"></iframe>
      </div>
    </div>
  )
}

export default Marketing;
