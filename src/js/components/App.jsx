import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import AppRoutes from './AppRoutes.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar/>
        <AppRoutes/>
      </div>
    );

  }
}

export default App;
