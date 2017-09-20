import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Routes
// import Routes from './components/Routes';

ReactDOM.render(
	<BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
