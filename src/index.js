import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Router from './components/Router';
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
