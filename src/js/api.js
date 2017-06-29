// Open Weather Map API Calls

var axios = require('axios');


const API_KEY = 'a3b87de90154a070969508d564606267';

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&units=metric`;


function getTemp(location){
  var encodedLocation = encodeURIComponent(location.trim())
  var requestUrl = `${BASE_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function(res){
    if(res.cod=='404' && res.message){

      throw new Error(res.message);
    }
    else{
      return res.data.main.temp;
    }
  }).catch(function(err){
    const {response} = err;
    throw new Error(response.data.message);
  });
}

export default getTemp
