// Open Weather Map API Calls

var axios = require('axios');


const API_KEY = 'a3b87de90154a070969508d564606267';

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;


function getTemp(location){
  var encodedLocation = encodeURIComponent(location.trim())
  var requestUrl = `${BASE_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then((res)=>{
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message);
    }
    else{
      return res.data.main.temp;
    }
  },function(res){
    throw new Error(res.data.message);
  })
}

export default getTemp
