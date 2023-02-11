import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const script = document.createElement("script");
    script.src = "style.js";
    script.async = true;
    document.body.appendChild(script);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


