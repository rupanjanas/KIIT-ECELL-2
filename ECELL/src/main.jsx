// index.js or main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure the path is correct for your App.jsx file

// Get the root HTML element where your React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root and render your App component into it
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);