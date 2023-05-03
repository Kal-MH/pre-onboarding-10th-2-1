import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';
import ClickAwayProvider from './contexts/ClickAwayContext';
import SearchKeywordProvider from './contexts/SearchKeywordContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <SearchKeywordProvider>
      <ClickAwayProvider>
        <App />
      </ClickAwayProvider>
    </SearchKeywordProvider>
  </React.StrictMode>
);
