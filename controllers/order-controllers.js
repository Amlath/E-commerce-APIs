const orderRepositories = require('../repositories/order-repositories');
const asyncHandler = require('../middlewares/async-handler');
const ErrorResponse = require('../utils/error-response');
const calculatePrice = require('../utils/order-total');

const getAllOrder = asyncHandler(async(req, res, next) => {
  const orders = await orderRepositories.getAllOrder();
  res.status(200).json({success: true, data: orders});
})

const getOrderById = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  const order = await orderRepositories.getOrderById(id);
  if(order != null)
    res.status(200).json({success: true, data: order});
  else res.status(400).json({success: false, message: `Order with id ${id} doesnot exists`})
})

const createOrder = asyncHandler(async(req, res, next) => {
  const { customer_id, product_id, quantity, order_date, order_delivery_date, status } = req.body;
  const order_price = await calculatePrice(product_id, quantity);
  const created = await orderRepositories.createOrder(customer_id, product_id, quantity, order_date, order_delivery_date, status, order_price);
  if(created)
    res.status(201).json({success: true, data: {message: "New order added"}});
})

const updateOrder = asyncHandler(async(req, res, next) => {
  const id = req.params.id;  
  const order_exists = await orderRepositories.checkOrderExists(id);
  if(order_exists) {
    const status = req.body.status;
    await orderRepositories.updateOrder(id, status);
    res.status(200).json({message: "Status order"});
  } else next(new ErrorResponse(`Order doesn't exist with id ${id}`, 404));
})

const deleteOrder = asyncHandler(async(req, res, next) => {
  const id = req.params.id;
  console.log("order id: ", id);
  const order_exists = await orderRepositories.checkOrderExists(id);  
  console.log("order exists: ", order_exists);
  if(order_exists) {
    await orderRepositories.deleteOrder(id);
    res.status(200).json({message: "Deleted order"});
  } else next(new ErrorResponse(`Order doesn't exist with id ${id}`, 404));
})

module.exports = {
  getAllOrder,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
}