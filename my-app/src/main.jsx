import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './pages/LoaderPage/Loader.jsx';
import './index.css'
import App from './App.jsx'
import {store, persistor} from '../src/redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
