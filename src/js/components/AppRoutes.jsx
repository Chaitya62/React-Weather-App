import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Weather from './Weather.jsx';
import About from './About.jsx';
import Examples from './Examples.jsx';

class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Weather}/>
        <Route path='/about' component={About}/>
        <Route path='/examples' component={Examples}/>
      </div>
    );
  }
}

export default AppRoutes;
