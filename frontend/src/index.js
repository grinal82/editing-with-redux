import React from 'react';
import  ReactDOM  from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';




// оборачиваем App в провайдер, передаем хранилище (store), чтобы все компоненты ниже по цепочке имели к нему доступ

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
