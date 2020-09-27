const express = require('express');
const path = require('path');
const fs = require('fs');
const Router = express.Router();

const products = [];

Router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
});

Router.post('/add-product', (req, res, next) => {
  const body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  });
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString().split('=')[1];
    products.push({ product: parsedBody });
    const JSONObj = [
      {
        product: parsedBody,
      },
    ];
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

exports.routes = Router;
exports.products = products;
