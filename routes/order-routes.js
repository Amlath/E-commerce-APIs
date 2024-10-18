const express = require('express');
const { getAllOrder, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/order-controllers');

const router = express.Router();

router.route('/').get(getAllOrder).post(createOrder);
router.route('/:id').get(getOrderById).put(updateOrder).delete(deleteOrder);

module.exports = router;