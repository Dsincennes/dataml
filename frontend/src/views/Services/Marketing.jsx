// import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import './Marketing.scss'; // Import a CSS file for styling

// const Marketing = () => {
//   return (
//     <div className="Marketing-Main">
//       <Navbar />
//       <h1>Marketing analysis</h1>
//       <div className="iframe-container">
//         <iframe 
//           className='noscroll-container'
//           src="https://dataml-ds.runmercury.com" 
//           width="1200" 
//           height="800"
//           title="Marketing Data Analysis"
//           scrolling='none'
//         ></iframe>
//       </div>
//     </div>
//   )
// }

// export default Marketing;

import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Marketing.scss';
import './SocialMedia.css';


const Marketing = () => {
  const [selectedOption, setSelectedOption] = useState('Analysis');

  const redirectToURL = () => {
    // Redirecting to streamlit in EC2 instance
    window.location.href = 'http://3.130.169.45:8501';
  };

  const marketdemoMenu = {
    Analysis: (
      <div>
        <div>
          <h1>Check out below</h1>
          {/* <button onClick={redirectToURL}>Open Streamlit</button> */}
          <iframe src="http://3.129.188.1:8501/" title="marketdemo-st-app"className="iframe-style" ></iframe>
        </div>
      </div>
    ),
    Documentation: (
      <div>
        <h2>Frontend Local Development</h2>
        <ol>
          <li>cd frontend</li>
          <li>npm install (install front end dependencies)</li>
          <li>npm start (Start React app)</li>
        </ol>

        <h2>Update website</h2>
        <ol>
          <li>cd frontend</li>
          <li>npm run build</li>
          <li>Login to AWS, S3 Service, find appropriate bucket, upload all contents inside build folder.</li>
        </ol>

        <h2>Access Contact us & Directorship Database</h2>
        <ol>
          <li>Login to AWS &gt; DynamoDB service &gt; Tables &gt; SpecificTable &gt; Explore Table Items</li>
        </ol>

        <h2>Access Website signup users</h2>
        <ol>
          <li>Login to AWS</li>
          <li>Cognito Service</li>
          <li>User Pools</li>
          <li>DataMLUserPool</li>
        </ol>

        <h3>Notes</h3>
        <ul>
          <li>React routing, used react-router-dom and react-router-hash-link to move around between pages</li>
          <li>CircleCI for CI/CD, set up a script that auto updates webapp to S3 in AWS. (See .circleci/config.yml)</li>
        </ul>
      </div>
    )
  }

  return (
    <div className="marketdemographic">
      <Navbar />
      <head>
        <title>marketdemographic Analysis</title>

      </head>
      <body class='marketdemo-container' >
        <header>
          <br></br>
          <h1>Welcome to the Marketing Analysis Page</h1>
          <br></br>
          <p>Select an option below:</p>
        </header>
        <div className="marketdemo-dashboard">
          <div className="sidebar">
            <ul>
              {Object.keys(marketdemoMenu).map((option) => (
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
            {marketdemoMenu[selectedOption]}
          </div>

        </div>
        <footer>
          <p>&copy; 2023 Data Machine Learning. All rights reserved.</p>
        </footer>
      </body>

    </div>
  )
}

export default Marketing
