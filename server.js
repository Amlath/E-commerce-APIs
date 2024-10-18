const dotenv = require('dotenv');
const express = require('express');
const errorHandler = require('./middlewares/error-handler');
const category = require('./routes/category-routes');
const brand = require('./routes/brand-routes');
const product = require('./routes/product-routes');
const customer = require('./routes/customer-routes');
const order = require('./routes/order-routes');

const app = express();
const sequelize = require('./config/database');
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
app.use(express.json());
app.use('/api/category', category);
app.use('/api/brand', brand);
app.use('/api/product', product);
app.use('/api/customer', customer);
app.use('/api/order', order);
app.use(errorHandler);