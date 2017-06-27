import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, IndexRoute} from 'react-router-dom';
import App from 'App';


ReactDOM.render(
  <HashRouter>
      <div>
      <App />

      </div>
  </HashRouter>,
  document.getElementById('app'));
