import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import "./Css/Loading.css";
import "./Css/button.css";
import "./Css/alerts.css";
import "./Css/sign.css";
import "./all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import MenuContext from './Context/MenuContext';
import WindowContext from './Context/WindowContext';
import EmailProvider from './Pages/Context/EmailContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowContext>
    <MenuContext>
    <EmailProvider>
    <Router>
    < App />
    </Router>
    </EmailProvider>
    </MenuContext>
    </WindowContext> 
  </React.StrictMode>
);

