let weather = {
  getWeather: (weatherApi) => {
    let temperature = weatherApi();

    if (temperature === null) {
      return 'i do not know'
    }

    return temperature > 200 ? 'holy crap it is hot outside!' : 'holy crap it is cold outside';
  }
};

module.exports = weather; 
