import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from '@src/serviceWorker';
import { store } from '@store/store';
import App from '@src/App';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
