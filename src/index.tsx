import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './reset.css';
import './index.css'

import App from './components/app/App';
import StoreContext from './components/context/StoreContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
   <StoreContext>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
   </StoreContext>
  </React.StrictMode>
);