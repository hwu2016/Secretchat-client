import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


const option = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  transition: transitions.FADE
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...option}>
    <App />
  </AlertProvider>
  ,
  document.getElementById('root')
);

