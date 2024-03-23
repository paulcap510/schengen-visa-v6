const visaInfo = require('../src/country_data_updated.json');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(visaInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
