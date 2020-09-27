const express = require('express');
const path = require('path');
const fs = require('fs');
const { parse } = require('path');
const Router = express.Router();

Router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

Router.post('/add-product', (req, res, next) => {
  const body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString().split('=')[1];
    const JSONObj = [
      {
        product: parsedBody,
      },
    ];
    console.log(parsedBody);
    fs.writeFile(
      path.join(__dirname, '../', 'data', 'product.json'),
      JSON.stringify(JSONObj),
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  });
  res.redirect('/');
});

module.exports = Router;
