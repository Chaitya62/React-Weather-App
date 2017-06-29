import React, {Component} from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import getTemp from '../api';
import ErrorModal from './ErrorModal.jsx';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      errMessage: undefined
    }
  }

  makeSearchFromLocation(props) {
    if (!props)
      props = this.props;
    var query = /\?(.*?)=(.*?)&?$/.exec(props.location.search);

    if (query && query.length >= 2) {
      var location = query[2];

      if (location && location.length > 0) {
        this.handleSearch(location);
        window.location.hash = '#/';
      }
    }
  }

  componentDidMount() {

    this.makeSearchFromLocation();

  }
  componentWillReceiveProps(newProps) {

    this.makeSearchFromLocation(newProps);
  }
  render() {
    var {temp, location, isLoading, errMessage} = this.state;
    var self = this;
    function renderMessage() {
      if (isLoading) {
        return <h2>Loading....</h2>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      } else {
        return <h2>Enter a city to find the weather</h2>
      }
    }

    function renderError() {

      if (typeof errMessage == 'string') {
        return (<ErrorModal onClose={self.handleClose.bind(self)} message={errMessage}/>);
      } else {
        return <div></div>
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/> {renderMessage()}
        {renderError()}
      </div>
    );
  }

  handleClose(e) {
    this.setState({errMessage: undefined});
  }

  handleSearch(location) {
    this.setState({isLoading: true, errorMessage: undefined, location: undefined, temp: undefined});
    getTemp(location).then(function(temp) {
      this.setState({location: location, temp: temp, isLoading: false, errMessage: undefined});
    }.bind(this)).catch(function(errMessage) {
      this.setState({isLoading: false, errMessage: errMessage.message});
    }.bind(this));

  }
}

export default Weather;
