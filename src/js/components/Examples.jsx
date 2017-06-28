import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Examples = (props) => {
  return (
    <div className="">
      <h1 className="text-center">Examples</h1>
      <p className="">Hera are a few locations you can try out</p>
      <ol>
        <li>
          <Link to='/location=Mumbai'>Mumbai, India</Link>
        </li>
        <li>
          <Link to='/location=Delhi'>Delhi, India</Link>
        </li>
      </ol>
    </div>
  );
}

export default Examples;
