import React from 'react';
import './ServicesPage.scss';
import { faChartColumn, faChartLine, faChartSimple, faCoins, faEarthAmericas, faFaceGrin, faMagnifyingGlass, faMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <h1 style={{textAlign: 'center'}}>Services</h1>
      <div className="services-links">
        <div className="services-link">
          <FontAwesomeIcon icon={faCoins} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Financial Analysis</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faChartLine} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Business Analysis</h3>
          <p>Business analysis can benefit from machine learning by identifying patterns in customer behavior, optimizing supply chain management, and predicting sales trends.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faMaximize} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Storage Services</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Storage Services</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faEarthAmericas} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Storage Services</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
        </div>
        <div className="services-link">
        <FontAwesomeIcon icon={faChartSimple} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Storage Services</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faChartColumn} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Storage Services</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faFaceGrin} size="6x" style={{color: "#580f80"}}></FontAwesomeIcon>
          <p></p>
          <h3>Storage Services</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage