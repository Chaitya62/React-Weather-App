import React, {Component} from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import getTemp from '../api';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }
  render() {
    var {temp, location, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h2>Loading....</h2>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      } else {
        return <h2>Enter a city to find the weather</h2>
      }
    }
    return (
      <div>
        <h1 className="text-center">Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/> {renderMessage()}
      </div>
    );
  }

  handleSearch(location) {
    this.setState({isLoading: true});
    getTemp(location).then(function(temp) {
      this.setState({location: location, temp: temp, isLoading: false});
    }.bind(this), function(errMessage) {
      alert(errMessage);
      this.setState({isLoading: false});
    }.bind(this));

  }
}

export default Weather;
