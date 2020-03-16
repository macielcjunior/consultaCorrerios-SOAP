const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({}));

  //Remove X-Powered-by
  app.disable('x-powered-by');

  consign()
    .include('src/routes')
    .into(app);

  return app;
};
