import './App.css';
import SpotifyLogin from './components/auth/SpotifyLogin';
import Callback from './components/auth/Callback';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={
              <div>
                <p>
                  <SpotifyLogin />
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </div>
            } />
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;