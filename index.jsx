import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import 'animate.css';
import { Provider } from 'react-redux';
import { store } from './components/store';
const ele = document.getElementById('root');
const root = ReactDOM.createRoot(ele);

root.render(
  // <React.StrictMode>
  <>
    <Provider store={store}>

      <App />
    </Provider>
  </>
);



