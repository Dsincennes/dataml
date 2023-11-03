import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const TrendPage = () => {
  // Replace 'your-ec2-instance-public-ip' with the public IP of your EC2 instance
  // and 'port' with the port number you've configured Jupyter to run on (default is 8888).
  // Make sure your file path is correct: it should point to a .ipynb file, not a .py file.
  const notebookUrl = `http://18.207.143.203:8888/notebooks/Data_Test.ipynb`;

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
