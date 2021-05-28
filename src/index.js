import React from 'react';
import ReactDOM from 'react-dom';
import TmdbState from './context/tmdb/TmdbState';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TmdbState>
      <App />
    </TmdbState>
  </React.StrictMode>,
  document.getElementById('root')
);
