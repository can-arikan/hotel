import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Menu/menu.scss';
import MainPage from './pages/MainPage';
import reportWebVitals from './dev-tests/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
