const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const environment = process.env.NODE_ENV || 'development';
const router = require('./src/router');

app.use(cors());
app.use(bodyParser.json());


require('./src/models');
router(app);


if(environment === 'test') {
  module.exports = app;
} else {
  app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });
}

