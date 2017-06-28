import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, IndexRoute} from 'react-router-dom';
import App from 'App';

// load foundation-sites

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <HashRouter>
  <div>
    <App/>

  </div>
</HashRouter>, document.getElementById('app'));
