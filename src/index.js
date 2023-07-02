import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/css/Articles-Badges-images.css';
import './assets/css/Navbar-Centered-Brand-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();