import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './root.scss';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from '@src/serviceWorker';
import { Provider } from 'react-redux';

import App from '@src/App';
import { store } from './store';

console.log(process.env);
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.params = {};
axios.defaults.params.key = process.env.REACT_APP_KEY;
