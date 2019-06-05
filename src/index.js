import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

//Hot Module Replacement HMR -- tool for reloading application in browser without page refresh
if (module.hot) {
  module.hot.accept();
}