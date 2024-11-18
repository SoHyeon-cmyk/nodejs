import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//react-router-dom에 내장되어있는 BrowserRouter컴포넌트로 감싸준다
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
);

