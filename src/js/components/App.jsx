import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import AppRoutes from './AppRoutes.jsx';

const App = (props) => {
  return (
    <div>
      <Navbar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
