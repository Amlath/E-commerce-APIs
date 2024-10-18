const productRepositories = require('../repositories/product-repositories');
const asyncHandler = require('../middlewares/async-handler');
const ErrorResponse = require('../utils/error-response');

const getAllProduct = asyncHandler(async(req, res, next) => {
  const products = await productRepositories.getAllProduct();
  res.status(200).json({success: true, data: products});
})

const getProductById = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const product = await productRepositories.getProductById(id);
  res.status(200).json({success: true, data: product});
})

const createProduct = asyncHandler(async(req, res, next) => {
  const { name, category, brand, price, offerprice } = req.body;
  const created = await productRepositories.createProduct(name, category, brand, price, offerprice);
  if(created)
    res.status(201).json({success: true, data: {message: "New product added"}});
})

const updateProduct = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const product_exists = await productRepositories.checkProductExists(id);  
  if(product_exists) {
    const { name, category, brand, price, offerprice } = req.body;
    await productRepositories.updateProduct(id, name, category, brand, price, offerprice);
    res.status(200).json({message: "Updated product"});
  } else next(new ErrorResponse(`Product doesn't exist with id ${id}`, 404));
})

const deleteProduct = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const product_exists = await productRepositories.checkProductExists(id);  
  if(product_exists) {
    await productRepositories.deleteProduct(id);
    res.status(200).json({message: "Deleted product"});
  } else next(new ErrorResponse(`Product doesn't exist with id ${id}`, 404));
})

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}