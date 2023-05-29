import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';

function App() {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
          setUser(codeResponse)
          Cookies.set("user-token", codeResponse.access_token) // set our persist value , figure out where to pass it around
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        // add to database here.
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    
    return (
        <div>
            <h2>Google Login</h2>
            <br />
            {profile ? (
                <div>
                    <h3>{profile.name} Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google</button>
            )}
        </div>
    );
}
export default App;