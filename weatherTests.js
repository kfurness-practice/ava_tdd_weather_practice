// If temp is < 200, we will say "holy crap it's cold outside!"
// If temp is > 200, we will say it's hot outside!
// If no temp is available we will say "I don't know!"Gu

let test = require('ava');

test('should say holy crap it is cold outside as the temp is > 200', t => {
  let expected = 'holy crap it is cold outside';

  let weatherApi = () => 190;

  let actual = weather.getWeather(weatherApi);

  t.is(expected, actual);
});

test('should say holy crap it is hot outside as the temp is < 200', t => {
  let expected = 'holy crap it is hot outside!';

  let weatherApi = () => 210;

  let actual = weather.getWeather(weatherApi);

  t.is(expected, actual);
})

test('should say i do not know as no temperature was returned', t => {
  let expected = 'i do not know';

  let weatherApi = () => null;

  let actual = weather.getWeather(weatherApi);

  t.is(expected, actual);
})

let weather = {
  getWeather: (weatherApi) => {
    let temperature = weatherApi();

    if (temperature === null) {
      return 'i do not know'
    }

    return temperature > 200 ? 'holy crap it is hot outside!' : 'holy crap it is cold outside';
  }
};
