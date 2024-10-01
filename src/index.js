import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User2 from './classCom';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Users from './funCom';
import Input from './inputBox';
import Profile from './ifelse';
import Login from './ifelse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
