import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './SocialMedia.css';
import Plot from 'react-plotly.js'; // Import Plotly

// Define the platformContent object before using it
const platformContent = {
  YouTube: (
    <div>
      <h3>YouTube Analysis</h3>
      {/* Add content specific to YouTube analysis here */}
    </div>
  ),
  TikTok: (
    <div>
      <h3>TikTok Analysis</h3>
      {/* Add content specific to TikTok analysis here */}
    </div>
  ),
  Twitter: (
    <div>
      <h3>Twitter Analysis</h3>
      {/* Add content specific to Twitter analysis here */}
    </div>
  ),
};

const platformContent2 = {
  YouTube: (
    <div>
      <h3>YouTube Analysis</h3>
      <div>
        <h4>Countries with Most users (in millions)</h4>
        <Plot
          data={[
            {
              type: 'bar',
              x: ['India', 'USA', 'Indonesia', 'Brazil', 'Russia'],
              y: [467, 247, 139, 138, 106],
            },
          ]}
          layout={{ width: 600, height: 400, title: 'Top 5 Countries' }}
        />
      </div>
      <div>
        <h4>Channels with most subscribers (in millions)</h4>
        <Plot
          data={[
            {
              type: 'bar',
              x: ['T-Series', 'MrBeast', 'Cocomelon', 'Sony', 'Kids Diana Show'],
              y: [252, 224, 167, 164, 114],
            },
          ]}
          layout={{ width: 600, height: 400, title: 'Top 5 Channels' }}
        />
      </div>
      {/* Add more example graphs or content here */}
    </div>
  ),
  TikTok: (
    <div>
      <h3>TikTok Analysis</h3>
      <div>
        <h4>Countries with Most users (in millions)</h4>
        <Plot
          data={[
            {
              type: 'bar',
              x: ['USA', 'Indonesia', 'Brazil', 'Mexico', 'Russia'],
              y: [116, 113, 84, 62, 51],
            },
          ]}
          layout={{ width: 600, height: 400, title: 'Top 5 Countries' }}
        />
      </div>
      <div>
        <h4>Accounts with most followers (in millions)</h4>
        <Plot
          data={[
            {
              type: 'bar',
              x: ['Khaby lame', 'Charlie DAmelio', 'Bella Porch', 'Addison Rae', 'MrBeast'],
              y: [162, 151, 93, 88, 87],
            },
          ]}
          layout={{ width: 600, height: 400, title: 'Top Accounts' }}
        />
      </div>
      {/* Add more example graphs or content here for TikTok */}
    </div>
  ),
  Twitter: (
    <div>
      <h3>Twitter Analysis</h3>
      <div>
        <h4>Countries with Most users (in millions)</h4>
        <Plot
          data={[
            {
              type: 'bar',
              x: ['USA', 'Japan', 'India', 'Brazil', 'Indonesia'],
              y: [150, 120, 100, 90, 80],
            },
          ]}
          layout={{width: 600, height: 400, title: 'Top Countries' }}
        />
      </div>
      <div>
        <h4>Accounts with most followers (in millions)</h4>
        <Plot
          data={[
            {
              type: 'bar',
              x: ['Elon Musk', 'Barack Obama', 'Justin Bieber', 'Cristiano Ronaldo', 'Rihanna'],
              y: [160, 131, 111, 110, 108],
            },
          ]}
          layout={{ width: 600, height: 400, title: 'Top Accounts' }}
        />
      </div>
      {/* Add more example graphs or content here for Twitter */}
    </div>
  ),
};

const SocialMedia = () => {
  const [selectedOption, setSelectedOption] = useState('Analysis');
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const menuContent = {
    Analysis: (
      <div>
        <div>
          <h3>Select a Platform for Analysis</h3>
          <ul>
            {Object.keys(platformContent).map((platform) => (
              <li
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={selectedPlatform === platform ? 'active' : ''}
              >
                {platform}
              </li>
            ))}
          </ul>
          {selectedPlatform && platformContent[selectedPlatform]}
        </div>
      </div>
    ),
    Example: (
      <div>
        <div>
          <h3>Select a Platform for the Example</h3>
          <ul>
            {Object.keys(platformContent2).map((platform) => (
              <li
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={selectedPlatform === platform ? 'active' : ''}
              >
                {platform}
              </li>
            ))}
          </ul>
          {selectedPlatform && platformContent2[selectedPlatform]}
        </div>
      </div>
    ),
    Settings: (
      <div>
        <h2>Settings</h2>
        {/* Add settings content here */}
      </div>
    ),
  };

  return (
    <div className="social-media-dashboard">
      <Navbar />
      <h1>Social Media Analysis Dashboard</h1>
      <p>Select an option from the menu to view the content.</p>

      <div className="dashboard-content">
        <div className="sidebar">
          <ul>
            {Object.keys(menuContent).map((option) => (
              <li
                key={option}
                className={selectedOption === option ? 'active' : ''}
                onClick={() => {
                  setSelectedOption(option);
                  setSelectedPlatform(null); // Reset selected platform
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div className="content">
          {menuContent[selectedOption]}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
