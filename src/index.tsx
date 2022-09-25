import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ModalConstructor } from './components/modals/ModalConstructor/ModalConstructor';
import './index.css';
import mainStore from './stores/mainStore';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider {...mainStore}>
        <App />

        <ModalConstructor />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
