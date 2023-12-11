import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer, // Передача корневого редьюсера
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);

reportWebVitals();
