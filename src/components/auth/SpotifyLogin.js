// src/components/auth/SpotifyLogin.js

const CLIENT_ID = '02874817491e409c81d0b69fea81456e';
const REDIRECT_URI = encodeURIComponent('http://localhost:3000/callback');
const SCOPE = encodeURIComponent('playlist-modify-private playlist-read-private');

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=code&show_dialog=true`;

function SpotifyLogin() {
    return (
        <div>
            <h1>Welcome to Jammming!</h1>
            <a href={AUTH_URL}>Log in with Spotify</a>
        </div>
    );
}

export default SpotifyLogin;
