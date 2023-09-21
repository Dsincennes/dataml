import React from 'react';
import './ServicesPage.scss';
import { faChartColumn, faChartSimple, faEarthAmericas, faMaximize, faCoins, faChartLine, faMagnifyingGlass, faFaceGrin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const ServicesPage = () => {
  return (
    <div className="services-page">
      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>Services</h1>
      <br />
      <br />
      <div className="services-links">
        <div className="services-link" >
          <FontAwesomeIcon icon={faMaximize} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>Social Media Analysis</h3>
          <p>Social media analysis can leverage machine learning to detect sentiment, identify influencers, and predict trends.</p>
          <Link to="/services/SocialMedia" className="button">
            Demo
          </Link>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faEarthAmericas} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>GeoDemographic Analysis</h3>
          <p>Machine learning can be used for geodemographic analysis by identifying patterns in location data, predicting customer segments, and optimizing marketing campaigns by location.</p>
          <Link to="/services/GeoDemographic" className="button">
            Demo
          </Link>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faChartSimple} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>Marketing Analysis</h3>
          <p>Marketing analysis can benefit from machine learning by analyzing customer preferences, predicting user engagement, and optimizing ad targeting.</p>
          <Link to="/services/Marketing" className="button">
            Demo
          </Link>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faChartColumn} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>Trend Analysis</h3>
          <p>Trend analysis can benefit from machine learning by identifying patterns in data, predicting future trends, and providing insights that can inform decision-making across a wide range of industries.</p>
          <Link to="/services/TrendPage" className="button">
            Demo
          </Link>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faCoins} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>Financial Analysis</h3>
          <p>Machine learning can be used for financial analysis to detect fraudulent transactions, predict stock prices, and analyze customer creditworthiness.</p>
          <Link to="/services/Financial" className="button">
            Demo
          </Link>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faChartLine} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>Business Analysis</h3>
          <p>Business analysis can benefit from machine learning by identifying patterns in customer behavior, optimizing supply chain management, and predicting sales trends.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>SEO Analysis</h3>
          <p>Machine learning can improve SEO analysis by optimizing search engine rankings, analyzing user behavior, and identifying keywords.</p>
        </div>
        <div className="services-link">
          <FontAwesomeIcon icon={faFaceGrin} size="6x" style={{ color: "#580f80" }}></FontAwesomeIcon>
          <p></p>
          <h3>Sentiment Analysis</h3>
          <p>Sentiment analysis using machine learning can provide valuable insights into customer feedback, social media conversations, and online reviews, enabling businesses to make data-driven decisions and improve customer satisfaction.</p>
        </div>
      </div>
    </div>

  )
}

export default ServicesPage