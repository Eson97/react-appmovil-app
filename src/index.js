import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './Components/DefaultLayout';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <BrowserRouter>
    <DefaultLayout />
  </BrowserRouter>,
  document.getElementById('root')
);

