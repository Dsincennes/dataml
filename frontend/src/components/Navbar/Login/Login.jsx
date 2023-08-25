import React from 'react';
import { Auth } from 'aws-amplify'; 


const Login = () => {

    const oauth = {
      domain: 'dataml.auth.us-east-1.amazoncognito.com',
      scope: ['email', 'openid'],
      redirectSignIn: 'https://dataml.io/', // Redirect URL after sign in
      redirectSignOut: 'https://dataml.io/', // Redirect URL after sign out
      responseType: 'token',
      options: {
        AdvancedSecurityDataCollectionFlag: true
      }
    }

    Auth.configure({
      Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_fgSZqqste',
        userPoolWebClientId: '2bcudra8uccse9hh1dceu5hci8',
        oauth: oauth
      },
    })

    const onLogin = () => {
      const URL = "https://dataml.auth.us-east-1.amazoncognito.com/login?client_id=2bcudra8uccse9hh1dceu5hci8&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fdataml.io"
      window.location.assign(URL); 
    }

    // const onSignout = () => {
    //   const URL = "https://dataml.io/"
    //   window.location.assign(URL); 
    // }
    return (
        <>
            <button
              onClick={() => onLogin()}
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "16px",
                marginLeft: "10px",
              }}
            >
              Log in
            </button>
        </>
      );
      
};

export default Login;
