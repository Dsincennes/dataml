import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './GeoDemographic.scss';
import './SocialMedia.css';


const GeoDemographic = () => {
    const [selectedOption, setSelectedOption] = useState('Analysis');

    // const redirectToURL = () => {
    //     // Redirecting to streamlit in EC2 instance
    //     window.location.href = 'http://18.220.231.13:8501';
    //   };
      
    const geodemoMenu = {
        Analysis: (
            <div> 
                <div>
                    <h3>Click below to run the housing analysis</h3>
                    {/* <button onClick={redirectToURL}>Open Streamlit</button> */}
                    <iframe src="http://18.220.231.13:8501" title="geodemo-st-app"className="iframe-style" ></iframe>
                </div>
            </div>
        ), 
        Documentation: (
            <div> 
                <div>
                    <h3>Storing good to know documentation here for general users or things I learned along the way</h3>
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

                        <div className="content">
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
