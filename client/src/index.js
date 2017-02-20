import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import getRoutes from './routes';

ReactDOM.render(
  getRoutes(),
  document.getElementById('root')
);
