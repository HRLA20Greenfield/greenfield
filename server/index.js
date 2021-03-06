
const express = require('express');
const parser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(routes);

app.listen(1337, () => {
  console.log('Hey! Listen!');
});

module.exports = app;