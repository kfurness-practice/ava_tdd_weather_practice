let test = require('ava');

let weatherApi = require('./weatherApi');
let axios = require('axios');

test('should retrieve weather from weather API',  async t => {
  let actual = await weatherApi();

  t.is(actual.status, 200);
  t.not(actual.temperature, '');
  t.not(actual.temperature, undefined)
});
