const express = require('express');
const path = require('path');
const Router = express.Router();

Router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'homepage.html'));
});

module.exports = Router;
