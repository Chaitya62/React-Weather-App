import React, {Component} from 'react';

class WeatherForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref='city' placeholder="Enter a city"/>
          <input type="submit" value="Get Weather"/>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    var cityRef = this.refs.city;
    var city = cityRef.value;
    console.log(city);
    cityRef.value = '';

  }
}

export default WeatherForm;
