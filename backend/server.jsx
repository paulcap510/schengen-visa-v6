const express = require('express');
const cors = require('cors');
const app = express();
const helmet = require('helmet');
const port = 3000;

app.use(helmet());
app.use(cors());

const countryData = require('../frontend/src/country_data_updated.json');

app.get('/api/data', (req, res) => {
  res.json(countryData);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
