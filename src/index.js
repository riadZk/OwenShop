import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css';
import App from './Nouveau dossier/App2';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
// import {Provider} from 'react-redux'

ReactDOM.render(
  <BrowserRouter>
  {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
