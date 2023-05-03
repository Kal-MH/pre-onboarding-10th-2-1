import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';
import ClickAwayProvider from './contexts/ClickAwayContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ClickAwayProvider>
      <App />
    </ClickAwayProvider>
  </React.StrictMode>
);
