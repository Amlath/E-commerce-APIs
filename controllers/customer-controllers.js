const customerRepositories = require('../repositories/customer-repositories');
const asyncHandler = require('../middlewares/async-handler');
const ErrorResponse = require('../utils/error-response');

const getAllCustomer = asyncHandler(async(req, res, next) => {
  const customers = await customerRepositories.getAllCustomer();
  res.status(200).json({success: true, data: customers});
})

const getCustomerById = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const customer = await customerRepositories.getCustomerById(id);
  res.status(200).json({success: true, data: customer});
})

const createCustomer = asyncHandler(async(req, res, next) => {
  const { name, email, password } = req.body;
  const created = await customerRepositories.createCustomer(name, email, password);
  if(created)
    res.status(201).json({success: true, data: {message: "New customer added"}});
})

const updateCustomer = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const customer_exists = await customerRepositories.checkCustomerExists(id);  
  if(customer_exists) {
    const { name, email, password } = req.body;
    await customerRepositories.updateCustomer(id, name, email, password);
    res.status(200).json({message: "Updated customer"});
  } else next(new ErrorResponse(`Customer doesn't exist with id ${id}`, 404));
})

const deleteCustomer = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const customer_exists = await customerRepositories.checkCustomerExists(id);  
  if(customer_exists) {
    await customerRepositories.deleteCustomer(id);
    res.status(200).json({message: "Deleted customer"});
  } else next(new ErrorResponse(`Customer doesn't exist with id ${id}`, 404));
})

module.exports = {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
}