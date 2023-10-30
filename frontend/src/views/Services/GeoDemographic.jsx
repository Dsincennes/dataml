import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './GeoDemographic.scss';

const GeoDemographic = () => {
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
                </header> 

                <main class='geodemo-container'>
                    <iframe 
                        src="https://geodemographic-analysis.runmercury.com/" 
                        title="Geodemographic Analysis Examples" 
                        class='iframe-style'> </iframe>

                </main>

                <footer>
                    <p>&copy; 2023 Data Machine Learning. All rights reserved.</p>
                </footer>
            </body>
        </div>
    )
}

export default GeoDemographic
