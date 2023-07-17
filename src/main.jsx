import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import { App } from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';



ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  //</React.StrictMode>, StrictMode вывводит ошибки в консоль. нужен чтобы один итеже запросы в нетворке  не отправлялись по несколько раз
)
