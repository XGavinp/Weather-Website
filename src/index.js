import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SpeedInsights } from "@vercel/speed-insights/next"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

