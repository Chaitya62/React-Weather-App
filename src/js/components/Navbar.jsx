import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h2>Navbar</h2>
        <NavLink exact to='/' activeClassName="active" activeStyle={{
          fontWeight: 'bold'
        }}>Home</NavLink>
        <NavLink to='/about' activeClassName="active" activeStyle={{
          fontWeight: 'bold'
        }}>About</NavLink>
        <NavLink to='/examples' activeClassName="active" activeStyle={{
          fontWeight: 'bold'
        }}>Examples</NavLink>
      </div>
    );
  }
}

export default Navbar;
