'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');

const db = new Sequelize('codegig', 'postgres', '346671alelol', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log(`Error: ${err}`));

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
