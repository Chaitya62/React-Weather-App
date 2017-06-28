import React, {Component} from 'react'

const About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="lead">This is a weather application build on react. I have build this for practicing my react skills</p>
      <p className="lead">Here are some of the tools I have used</p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a>- This is a Javascript FrameWork</li>
        <li>
          <a href="http://openweathermap.org">OpenWeatherMap API</a>- To get data by location
        </li>
      </ol>
    </div>
  );
}

export default About;
