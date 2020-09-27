const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

bodyParser.urlencoded({ extended: false });
const app = express();

const homepageRoutes = require('./routes/homepage');
const productRoutes = require('./routes/add-product');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', productRoutes.routes);
app.use(homepageRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
