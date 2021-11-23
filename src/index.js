import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtube';
import axios from 'axios';
import videoCardContext from './contexts/videoCardContext';

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);

const setting = Object.freeze({
  page: {
    home: 'home',
    searchResult: 'searchResult',
    playVideo: 'playVideo',
  },
  thumbSize: {
    small: 'small',
    medium: 'medium',
  },
  fontSize: {
    regular: 'regular',
    small: 'small',
  },
  display: {
    margin: 'margin',
    none: 'none',
  },
  description: {
    show: 'show',
    none: 'none',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <videoCardContext.Provider value={setting}>
        <App youtube={youtube} />
      </videoCardContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
