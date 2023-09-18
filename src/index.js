import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.EXCALIDRAW_ASSET_PATH = process.env.NODE_ENV === "development" ? "/excalidraw-assets-dev" : '/excalidraw-assets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);