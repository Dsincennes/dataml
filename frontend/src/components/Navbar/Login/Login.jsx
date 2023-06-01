import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            axios.post(`http://localhost:8000/api/token?code=${codeResponse.code}`, {
                headers: {
                    Accept: 'application/json'
                }
            }).then((response) => {
                console.log(response.data);
                setUser(response.data);
            });
        //   Cookies.set("user-token", codeResponse.access_token) // set our persist value , figure out where to pass it around
        },
        onError: (error) => console.log('Login Failed:', error),
        flow: 'auth-code',
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
        {profile ? (
            <button onClick={logOut} style={{backgroundColor: "white", color: "black", borderRadius: "16px", marginLeft: "10px"}}>Log out</button>
            ) : (
                <button onClick={() => login()} style={{backgroundColor: "white", color: "black", borderRadius: "16px", marginLeft: "10px"}}>Log in</button>
                )}
                </div>
    );
};

export default Login;
