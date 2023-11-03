import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const TrendPage = () => {
 
  return (
    <div className="trend">
      <Navbar />
      <h1>Trend analysis</h1>
      <p>
        Trend analysis will be displayed here
      </p>
      <iframe src="http://dp.runmercury.com" height="700px" width="1200px"></iframe>
    </div>
  )
}

export default TrendPage;
