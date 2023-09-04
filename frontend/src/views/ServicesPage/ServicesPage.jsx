import React from 'react';
import './ServicesPage.scss';
import { faChartColumn, faChartSimple, faEarthAmericas, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import GeoDemographic from '../Services/GeoDemographic';


const ServicesPage = () => {
  return (
    <div className="services-page">
  <br />
  <br />
  <h1 style={{ textAlign: 'center' }}>Services</h1>
  <br />
  <br />
  <table className="services-table">
    <tbody>
      <tr>
        <td className="service-cell">
          <div className="services-link">
            <FontAwesomeIcon icon={faMaximize} size="6x" style={{ color: "#580f80" }} />
            <h3>Social Media Analysis</h3>
            <p>Social media analysis can leverage machine learning to detect sentiment, identify influencers, and predict trends.</p>
          </div>
        </td>
        <td className="service-cell">
          <div className="services-link">
            <FontAwesomeIcon icon={faEarthAmericas} size="6x" style={{ color: "#580f80" }} />
            <h3>GeoDemographic Analysis</h3>
            <p>Machine learning can be used for geodemographic analysis by identifying patterns in location data, predicting customer segments, and optimizing marketing campaigns by location.</p>
          </div>
        </td>
        <td className="service-cell">
          <div className="services-link">
            <FontAwesomeIcon icon={faChartSimple} size="6x" style={{ color: "#580f80" }} />
            <h3>Marketing Analysis</h3>
            <p>Marketing analysis can benefit from machine learning by analyzing customer preferences, predicting user engagement, and optimizing ad targeting.</p>
          </div>
        </td>
        <td className="service-cell">
          <div className="services-link">
            <FontAwesomeIcon icon={faChartColumn} size="6x" style={{ color: "#580f80" }} />
            <h3>Trend Analysis</h3>
            <p>Trend analysis can benefit from machine learning by identifying patterns in data, predicting future trends, and providing insights that can inform decision-making across a wide range of industries.</p>
          </div>
        </td>
      </tr>
      <tr>
        <td className="button-cell">
          <button className="button">Demo</button>
        </td>
        <td className="button-cell">
          <button className="button">Demo</button>
        </td>
        <td className="button-cell">
          <button className="button">Demo</button>
        </td>
        <td className="button-cell">
          <button className="button">Demo</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>


  )
}

export default ServicesPage