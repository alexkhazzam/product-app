const express = require('express');
const path = require('path');
const Router = express.Router();
const productRoutes = require('./add-product');

Router.get('/', (req, res, next) => {
  const products = productRoutes.products;
  res.render('homepage', {
    pageTitle: 'Homepage',
    path: '/',
    products: products,
    productsExist: products.length > 0,
  });
});

module.exports = Router;
