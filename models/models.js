const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    field: "category_id",
  },
  name: {
    type: DataTypes.STRING,
    field: "category_name",
  },
});

const Brand = sequelize.define('Brand', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    field: "brand_id",
  },
  name: {
    type: DataTypes.STRING,
    field: "brand_name",
  },
});

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    field: "product_id",
  },
  name: {
    type: DataTypes.STRING,
    field: "product_name",
  },
  price: {
    type: DataTypes.INTEGER,
    field: "product_price",
  },
  offer_price: {
    type: DataTypes.INTEGER,
    field: "product_offerprice",
  },
});

Category.hasMany(Product, {foreignKey: 'category_id'});
Product.belongsTo(Category, {foreignKey: 'category_id'});

Brand.hasMany(Product, {foreignKey: 'brand_id'});
Product.belongsTo(Brand, {foreignKey: 'brand_id'});

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    field: "customer_id",
  },
  name: {
    type: DataTypes.STRING,
    field: "customer_name",
  },
  email: {
    type: DataTypes.STRING,
    field: "customer_emailid",
  },
  password: {
    type: DataTypes.STRING,
    field: "customer_password",
  },
});

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    field: "order_id",
  },
  quantity: {
    type: DataTypes.INTEGER,
    field: "order_quantity",
  },
  order_date: DataTypes.DATE,
  order_delivery_date: DataTypes.DATE,
  status: {
    type: DataTypes.STRING,
    field: "order_status",
  },
  price: {
    type: DataTypes.INTEGER,
    field: "order_price",
  },
});

Customer.hasMany(Order, {foreignKey: 'customer_id'});
Order.belongsTo(Customer, {foreignKey: 'customer_id'});

Product.hasMany(Order, {foreignKey: 'product_id'});
Order.belongsTo(Product, {foreignKey: 'product_id'});

module.exports = {
  Category,
  Brand,
  Product,
  Customer,
  Order
}