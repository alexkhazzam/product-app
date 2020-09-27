const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

bodyParser.urlencoded({ extended: false });
const app = express();

const homepageRoutes = require('./routes/homepage');
const addProduct = require('./routes/add-product');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', addProduct);
app.use(homepageRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
