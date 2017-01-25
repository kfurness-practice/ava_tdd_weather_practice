let axios = require('axios');

let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=af286277e9eca5e1ea22faf2695cf4a1'

module.exports = function(){
    return axios.get(apiUrl)
      .then(function(response) {
        return {
          status: response.status,
          temperature: response.data.main.temp
        }
      })
      .catch(function(err) {
        console.log(err);
      })
}
