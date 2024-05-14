import React, { useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CLIENT_ID = '02874817491e409c81d0b69fea81456e'; 
const CLIENT_SECRET = '695e575001214af59ddba17a088a7449'; 
const REDIRECT_URI = 'http://localhost:3000/callback';

function Callback() {
    const location = useLocation();
    const navigate = useNavigate();

    const exchangeCodeForToken = useCallback(async (code) => {
        try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
                },
                body: new URLSearchParams({
                    code: code,
                    redirect_uri: REDIRECT_URI,
                    grant_type: 'authorization_code'
                })
            });

            const data = await response.json();
            const { access_token, refresh_token } = data;

            // Save the tokens in local storage
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('refresh_token', refresh_token);

            // Redirect user away from the callback page
            navigate('/');
        } catch (error) {
            console.error('Error during token exchange:', error);
        }
    }, [navigate]);

    useEffect(() => {
        const code = new URLSearchParams(location.search).get('code');
        if (code) {
            exchangeCodeForToken(code);
        }
    }, [location, exchangeCodeForToken]);

    return <div>Loading...</div>;
}

export default Callback;