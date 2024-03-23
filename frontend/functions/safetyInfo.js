const safetyInfo = require('../src/safety_data.json');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(safetyInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
