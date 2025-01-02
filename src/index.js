import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'react-dom/client' for React 18+
import './index.css'; // Optional: Global styles
import App from './App'; // Main App component

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
