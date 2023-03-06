const { readdirSync } = require('fs');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

dotenv.config();

const options = {
  origin: process.env.DOMAIN_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(options));
app.use(bodyParser.json());

//routes
readdirSync('./v1/routes').map((router) => {
  app.use(`/api/v1`, require(`./v1/routes/${router}`));
});

module.exports = app;
