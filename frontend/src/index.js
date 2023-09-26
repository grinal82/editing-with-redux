import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';



const root = createRoot(document.getElementById('root')); 
// оборачиваем App в провайдер, передаем хранилище (store), чтобы все компоненты ниже по цепочке имели к нему доступ
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);