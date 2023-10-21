import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for client-side routing

ReactDOM.render(
  <Router> {/* Wrap the App component with the Router to enable client-side routing */}
    <App />
  </Router>,
  document.getElementById("root")
);
