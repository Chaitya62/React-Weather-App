import React, {Component} from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <div>

      <h2>It is {temp + " "}
        in {location}</h2>

    </div>
  );
}

export default WeatherMessage;
