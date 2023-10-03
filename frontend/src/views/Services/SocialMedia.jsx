import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Services.scss'; // Services page CSS 

const SocialMedia = () => {
  return (
    <div className="trend">
      <Navbar />

      <div className='main-content'>
        <head>
          <title>Geodemographic Analysis</title>
        </head>
        <Nav className="analysisNav" >
          {/* <h3>GeoDemographic Analysis</h3> */}
          <Nav.Link>Test 1</Nav.Link>
        </Nav>
        <body>
          <header>
            <h1>Welcome to the Geodemographic Analysis Page!</h1>
          </header>

          <main>

            <h2>Content Section</h2>
            <p>This is a basic HTML page. You can replace this content with your own.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas leo in lorem luctus, non laoreet sapien porttitor.
              Integer a ex elit. Proin lacinia nunc eleifend felis tempor volutpat. Fusce augue felis, porta eget leo vitae, malesuada efficitur erat.
              Quisque accumsan ante quis eros sodales maximus. Suspendisse sed maximus ligula. Donec risus felis, consectetur in accumsan tempus, fermentum eu arcu.
              Suspendisse sit amet ex vel elit cursus lobortis.</p>
          </main>

          <footer>
            <p>&copy; 2023 Data Machine Learning. All rights reserved.</p>
          </footer>
        </body>
      </div>
    </div>
  )
}

export default SocialMedia