import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import WeatherForm from './WeatherForm.jsx';

class Navbar extends Component {
  onSearch(e) {
    e.preventDefault();
    alert('not yet wired up');
  }
  render() {
    return (
      <div>

        <div className="top-bar" id="responsive-menu">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Weather Find</li>
              <li>
                <NavLink exact to='/' activeClassName="active" activeStyle={{
                  fontWeight: 'bold'
                }}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about' activeClassName="active" activeStyle={{
                  fontWeight: 'bold'
                }}>About</NavLink>
              </li>
              <li>
                <NavLink to='/examples' activeClassName="active" activeStyle={{
                  fontWeight: 'bold'
                }}>Examples</NavLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search Weather"/>
                </li>
                <li>
                  <input className="button" type="submit" value="Get Weather"/>
                </li>
              </ul>
            </form>
          </div>
        </div>

      </div>
    );
  }

}

export default Navbar;
