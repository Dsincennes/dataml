import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Trend.scss';

const Trend = () => {
  const [selectedOption, setSelectedOption] = useState('Analysis');

  const redirectToURL = () => {
    // Redirecting to streamlit in EC2 instance
    window.location.href = 'http://3.17.226.85:8501';
  };

  const trendMenu = {
    Analysis: (
      <div>
        <div>
          <h1>Check out below</h1>
          <button onClick={redirectToURL}>Open Streamlit</button>
        </div>
      </div>
    ),
    Documentation: (
      <div>
        <div>
          <h1>Journey into Trend Analysis</h1>
          <h2>Starting with linear regression</h2>
          <p>
            My initial goal when I started working with my dataset, was aiming to predict future sales. To achieve this, I turned to linear regression, 
            a well-established method that models the relationship between a dependent variable and one or more independent variables.
            The process involved selecting variables I believed influenced sales, cleaning the dataset for accuracy, 
            and finally creating a regression model to predict future sales figures.
          </p>
          <p>
            As I proceeded with linear regression, I looked for a linear relationship, plotting points on a graph to find a line that best fit the data.
            It's a method that excels in simplicity and efficiency. However, while linear regression could provide a general sales forecast,
            it became apparent that it was not capturing the complexities and subtleties of customer purchasing behavior hidden within the transactional data.
          </p>
          <h2>Pivot to market basket analysis</h2>
          <p>
          Realizing the limitations of linear regression for this particular dataset, I pivoted to market basket analysis (MBA).
          Unlike linear regression, MBA is specifically designed to find associations and rules in transactional data, identifying products frequently purchased together.
          It offered a different kind of insight—rather than predicting sales, it illuminated the relationships between products.
          </p>
          <p>
          Starting with MBA required a different approach. I prepared the dataset differently, organizing transactions individually and items within those
          transactions to apply the Apriori algorithm. The algorithm would help identify frequent itemsets—groups of items commonly bought together.
          The challenge was to determine the right level of frequency (support) and reliability (confidence) for these itemsets to be meaningful.
          </p>

          <h2>Experimenting within MBA</h2>
          <p>
          I experimented with various minimum support values, which represent the proportion of transactions that must contain a set of items for it to be considered relevant.
          I settled on a min_support value of 0.02 after observing that this threshold captured significant itemsets without cluttering the analysis with less common ones.
          Similarly, the min_threshold for the confidence level was set at 0.55 to ensure that the association rules found were more likely than not to hold true in future transactions.
          </p>

          <h2>Conclusion</h2>
          <p>
          The switch to MBA and the tuning of these parameters led to a more nuanced understanding of the dataset.
          The output was rich with insights, revealing strong associations that could guide inventory management, product bundling, and targeted promotions.
          This shift from linear regression to MBA was a strategic move that transformed the use of the dataset,
          culminating in a deeper comprehension of consumer behavior and more informed business decisions.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="trend">
      <Navbar />
      <head>
        <title>Trend Analysis</title>
      </head>
      <body class='trend-container'>
        <header>
          <br></br>
          <h1>Welcome to the Trend Analysis Page</h1>
          <br></br>
          <p>Select an option below:</p>
        </header>
        <div className="trend-dashboard">
          <div className="sidebar">
            <ul>
              {Object.keys(trendMenu).map((option) => (
                <li
                  key={option}
                  className={selectedOption === option ? 'active' : ''}
                  onClick={() => {
                    setSelectedOption(option);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div className="content">
            {trendMenu[selectedOption]}
          </div>
        </div>
        <footer>
          <p>&copy; 2023 Data Machine Learning. All rights reserved.</p>
        </footer>
      </body>
    </div>
  )
}

export default Trend;
