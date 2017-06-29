import React, {Component} from 'react';

class WeatherForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="search" className="" ref='city' placeholder="Search weather by city"/>
          <input type="submit" className="hollow expanded button" value="Get Weather"/>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    var cityRef = this.refs.city;
    var city = cityRef.value;
    if (city.length > 0) {
      this.props.onSearch(city);
      cityRef.value = '';
    }

  }
}

export default WeatherForm;
