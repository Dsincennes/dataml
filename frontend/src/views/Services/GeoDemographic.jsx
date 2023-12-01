import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './GeoDemographic.scss';
import './SocialMedia.css';


const GeoDemographic = () => {
    const [selectedOption, setSelectedOption] = useState('Analysis');

    const redirectToURL = () => {
        // Redirecting to streamlit in EC2 instance
        window.location.href = 'http://3.130.169.45:8501';
      };
      
    const geodemoMenu = {
        Analysis: (
            <div> 
                <div>
                    <h1>Check out below</h1>
                    <button onClick={redirectToURL}>Open Streamlit</button>
                    {/* <iframe src="http://18.221.118.171:8501" title="geodemo-st-app"className="iframe-style" ></iframe> */}
                </div>
            </div>
        ), 
        Documentation: (
            <div> 
                <div>
                    <h1>Documentation</h1>
                    <h2>Setting up an Elastic IP address</h2>
                    <p><strong>What is an Elastic IP?</strong></p>
                    <p>Elastic IPs are static public IPv4 address designed for dynamic cloud computing.</p>
                    <p>Elastic IPs are beneficial when you require a consistent IP address for your cloud resources, like hosting a website or managing certain applications that need a fixed public IP.
                        So even if you stop and start an instance (such as the ones we use in EC2 for Streamlit), the IP address will remain the same.
                        It is also more cost-effective than running the instance non-stop.
                    </p>
                    <ol>
                        <li>Go to the <a href="https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#Addresses:">Elastic IP Console</a> in AWS</li>
                        <li>Click “Allocate Elastic IP address” </li>
                        <li>Keep the defaults and click "Allocate" </li>
                        <li>Click on the Elastic IP you created, then “Associate Elastic IP Address” </li>
                        <li>Choose “Instance” as your  Resource Type and your instance from the dropdown (if it doesn’t show, make sure you are in the correct region)</li>
                        <li>Click "Associate"</li>
                    </ol>
                    <h2>Connecting to Streamlit in EC2</h2>
                    <ol>
                        <li>Start the EC2 instance for Geodemographic Analysis by clicking "Start instance" under the "Instance State" drop down (<strong>geodemo-app</strong> located in <strong>us-east-2</strong>)</li>
                        <li>Once started, click the "Connect" button. On the next page, keep the default settings and click "Connect" again. A new page will open</li>
                        <li>When the Ubuntu instance is ready and connected, change the directory to "/home/ubuntu/geodemo-app"</li>
                            <ul>
                                <li>Use the following command if you are already at "/home/ubuntu":</li>
                                <li><strong>cd geodemo-app</strong></li>
                            </ul>
                        <li>Run the Streamlit file for the project</li>
                            <ul>
                                <li><strong>streamlit run homepage.py</strong></li>
                            </ul>
                    </ol>
                    <h2>Copying Python Files from S3</h2>
                    <ol>
                        <li>To do this, IAM security credentials will be required. First enter this command:</li>
                            <ul>
                                <li><strong>aws configure</strong></li>
                            </ul>
                        <li>Enter the respective AWS Access Key and Secret Key, the other information can be skipped by pressing <strong>Enter</strong> on your keyboard </li>
                            <ul>
                                <li>NOTE: The Access Key and Secret Key will be with the developer of this analysis. Please send a request in.</li>
                            </ul>
                        <li>Next, copy the file you want that is stored in your S3 with the following command: </li>
                            <ul>
                                <li><strong>aws s3 cp s3://your-bucket-name/fileName.py /local/ec2/path/here</strong> (my local ec2 path is /home/ubuntu/geodemo-app)</li>
                            </ul>
                    </ol>
                </div>
            </div>
        )
    }

    return (
        <div className="geodemographic">
            <Navbar />
            <head>
                <title>Geodemographic Analysis</title>
                
            </head>
            <body class='geodemo-container' >
                <header>
                    <br></br>
                    <h1>Welcome to the Geodemographic Analysis Page</h1>
                    <br></br>
                    <p>Select an option below:</p>
                </header> 
                <div className="geodemo-dashboard">
                        <div className="sidebar">
                            <ul>
                                {Object.keys(geodemoMenu).map((option) => (
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

                        <div className="content" >
                            {geodemoMenu[selectedOption]}
                        </div>
                    
                </div>
                <footer>
                    <p>&copy; 2023 Data Machine Learning. All rights reserved.</p>
                </footer>                
            </body>
            
        </div>
    )
}

export default GeoDemographic
