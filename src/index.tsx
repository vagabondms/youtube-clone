import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './root.scss';
import axios from 'axios';

import * as serviceWorker from '@src/serviceWorker';

import App from '@src/App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();

axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.params = {};
axios.defaults.params.key = process.env.REACT_APP_KEY;
