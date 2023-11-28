import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";
import CotextProvider from './manager/ContextProvider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CotextProvider>
        <App />
      </CotextProvider>
    </BrowserRouter>
  </React.StrictMode>
);



