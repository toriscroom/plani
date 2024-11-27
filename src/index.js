import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/App.css'; // Estilo global
import App from './App.jsx'; // Componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
